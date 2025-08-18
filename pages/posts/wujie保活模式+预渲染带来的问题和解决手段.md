<!-- ---
title: wujie保活模式+预渲染带来的问题与解决方案小结
description: 深入解析Code Inspector插件的工作原理，了解如何从DOM定位到源码位置
date: 2025-07-24T16:00:00.000+08:00
lang: zh
type: note
duration: 22min
--- -->

# Wujie微前端在保活+预渲染模式中带来的问题和解决手段

## 1. 无界运行模式选择

根据项目架构，无界微前端框架采用了以下运行模式选择策略：

![Code Inspector工作时序图](/images/posts/wujie.png)

权衡用户体验和接入成本，项目采用**保活模式**：

**保活模式的优势：**

1. 子应用无需做生命周期改造，接入成本极低，和接入iframe没什么区别
2. 保活模式结合预加载可以实现页面秒开，子应用之间切换没有白屏时间

**但同样也有一些缺点，都可以封装成公共的hooks解决，所以在开发成本上是可以接受的**

## 2. 问题分析与解决方案

### 2.1 问题一：子应用不会被销毁，需要在activated生命周期钩子中做初始化逻辑

在传统单页应用中，用户离开页面时组件会被销毁，再次进入时会重新创建。但在wujie保活模式下，子应用不会被销毁，导致：

用户从子应用A切换到子应用B，再回到子应用A时，页面显示的还是之前的数据
接口不会重新调用，数据可能是过期的
代码解决方案：

```javascript
// apps/app-tools-next/src/views/settlement/order-list/index.vue
onActivated(syncStep) // 每次激活时同步数据
onMounted(syncStep) // 首次挂载时同步数据

// apps/app-tools-next/src/views/settlement/order-list/components/acceptance-list/index.vue
onActivated(() => {
  table.value?.refreshTableData() // 每次激活时刷新表格数据
})
```

项目中大量使用了Vue的生命周期钩子来处理保活模式下的状态管理：

- `onActivated` - 子应用激活时的处理
- `onDeactivated` - 子应用失活时的处理
- `onMounted` - 组件挂载时的初始化
- `onBeforeUnmount` - 组件卸载前的清理

### 2.2 问题二：子应用之间的路由跳转需要通过Event-Bus的方式解决

**问题描述：**
子应用之间的路由跳转需要通过Event-Bus的方式解决

**解决方案：**
项目在 `apps/app-core/hooks/useWujieStore/useCommonGameStore.ts` 中实现了跨应用状态管理：

```typescript
function useCommonGameStore() {
  const { bus, isStandalone } = useWujie()
  const storage = useStorage<string>(COMMON_STORAGE_KEY, null)

  const commonCurrGame = ref(storage.value ? JSON.parse(storage.value) : new GameItem())

  // 切换游戏时执行
  const onCommonCurrGameChange = (fn: (val: GameItem) => void) => {
    bus.$on('UPDATE_COMMON_GAME', (val: GameItem) => fn(val))
  }

  const setCommonCurrGame = (value: GameItem) => {
    commonCurrGame.value = value
    localStorage.setItem('common/game', JSON.stringify(value))
    if (!isStandalone.value) {
      bus.$emit('UPDATE_COMMON_GAME', value)
    }
  }

  onMounted(() => {
    onCommonCurrGameChange((val) => {
      commonCurrGame.value = val
    })
  })

  return {
    COMMON_CURR_GAME,
    onCommonCurrGameChange,
    setCommonCurrGame,
  }
}
```

**Event-Bus通信机制：**

```typescript
// 主应用中监听事件
bus.$on('getGameList', (val: any) => {
  window.$wujie.props.gameList = val
})

// 子应用中发送事件
bus.$emit('UPDATE_COMMON_GAME', gameData)
```

**全局Event-Bus实现：**
项目在 `packages/flux-enhanced-components/src/core/SimpleEventBus.ts` 中实现了全局事件总线：

```typescript
// 组件中的使用示例
import { EventTypes, globalEventBus } from '../../core/SimpleEventBus'

export { EventTypes, globalEventBus } from './core/SimpleEventBus'

onMounted(() => {
  unsubscribeFilterChange = globalEventBus.on(EventTypes.FILTER_CHANGE, ({ params }) => {
    filterParams.value = params
  })
})
```

### 2.3 问题三：配置如何下发给子应用

**问题描述：**
由于Wujie提供的props选项无法做到响应式更新，导致子应用只能拿到初始数据，所以需要调整配置下发的时机和方法，并抽离成独立hooks供子应用调用。

**解决方案流程图：**

```
主应用
├── 保持数据接口，暴露数据源
├── 加载子应用
└── 子应用用hooks供子应用调用

子应用
├── 利用hooks获取数据，子应用用hooks进行环境
├── 通过Event-Bus下发数据源（event-bus）
└── 在下发数据源时，通过Event-Bus的方式解决
    ├── on（下发数据源时，menu）→ console.log（menu）
    └── on（下发游戏数据时，game）→ console.log（game）
```

**具体实现：**

- 通过Event-Bus实现跨应用状态同步
- 结合localStorage实现状态持久化
- 在组件挂载时自动监听状态变化

### 2.4 问题四：部分用户可能没有某些子应用的权限，导致"预渲染"某些子应用报错

**问题描述：**
部分用户可能没有某些子应用的权限，导致"预渲染"某些子应用报错，所以要根据用户实际权限来动态预渲染

**解决方案：**
通过useWujie hook中的权限检测和动态预渲染逻辑，根据用户实际权限来决定是否预渲染特定子应用。

### 2.5 问题五：下拉框/tooltip弹出位置不正确

**问题描述：**
在微前端环境下，下拉框和tooltip组件的定位可能出现偏差

**解决方案：**
参考：[【方案讨论】针对el中依赖了poper.js 的fixed定位偏移解决方案](https://github.com/Tencent/wujie/issues/**682**)

调整弹出框容器组件的定位方式：

```css
.vxe-table--tooltip-wrapper {
  position: fixed !important;
}

.el-popper {
  position: absolute !important;
}

.el-tooltip__popper {
  position: absolute !important;
}
```

## 3. 总结

通过以上针对性的技术手段，项目成功解决了wujie保活模式+预渲染带来的主要问题：

1. **通过useWujie hook统一处理微前端环境检测和通信**
2. **通过Event-Bus机制解决跨应用路由跳转和状态同步**
3. **通过生命周期钩子处理保活模式下的初始化逻辑**
4. **通过动态权限检测实现按需预渲染**
5. **通过CSS调整解决弹出组件定位问题**
6. **通过js-loader解决第三方组件库兼容性问题**

这些解决方案确保了微前端架构下的用户体验和开发效率，实现了页面秒开和无缝切换的效果。
