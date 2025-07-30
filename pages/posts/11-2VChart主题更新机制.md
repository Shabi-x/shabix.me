---
title: 11-2.VChart主题更新机制
description: 深入解析VChart主题系统的更新流程与实现原理
date: 2024-12-23T10:00:00.000+00:00
lang: zh
type: note
duration: 12min
---

# VChart主题更新机制

## 主题更新基本概念

VChart主题切换是一个常见的操作：例如根据不同季节、节日，或者是国际化、个性化的配色方案，还有常见的夜间模式，用户可以手动或者监听用户系统对应切换不同风格的主题以适应不同的使用环境。

## 主题更新案例

### 夜间模式的注册和切换

```typescript
VChart.ThemeManager.registerTheme('darkTheme', { ... });
VChart.ThemeManager.registerTheme('lightTheme', { ... });

function toggleTheme(isDarkMode) {
  const themeName = isDarkMode ? 'darkTheme' : 'lightTheme';
  VChart.ThemeManager.setCurrentTheme(themeName);
}
```

### 不同应用场景的风格切换

```typescript
// 不同风格的主题配置
const themes = {
  'finance': { ... },
  'medical': { ... },
  'technology': { ... }
};

Object.keys(themes).forEach(key => {
  VChart.ThemeManager.registerTheme(key + 'Theme', themes[key]);
});

function switchDashboardTheme(businessType) {
  const themeName = businessType + 'Theme';
  VChart.ThemeManager.setCurrentTheme(themeName);
}
```

## 主题相关源码位置与内容

- **package/vchart/scr/core/vchart.ts**：单个图表实例的主题更新执行者，实现具体的主题应用逻辑，将全局主题转化为图表的实际样式变更，图表的更新逻辑主要在这里。
- **package/vchart/src/core/instance-manager.ts**：图表实例的注册和管理中枢，为主题实例更新提供遍历和定位的基础设施，确保每个图表都能接收到主题更新。
- **package/vchart/src/theme/theme-manager.ts**：全局主题调度中心，负责主题的注册、获取和全局更新，提供统一的主题管理入口和协调机制。

通过VChart类的方法定义，实现图表的核心渲染和更新逻辑，ThemeManager和InstanceManager分别负责主题和实例的全局管理，形成了一个解耦、灵活且可扩展的图表库架构；其中VChart提供统一的更新入口，实现了绝大部分的更新操作逻辑；而ThemeManager和InstanceManager通过实例注册和遍历机制，实现了全局主题更新的能力。

## 深入分析主题更新流程

VChart官网把主题更新分为了两个维度，即：

- 单独更新某个图表实例的主题
- 通过ThemeManager更新全局所有图表的主题

两种做法都是通过同样的方法`setCurrentTheme`调用来切换主题，前者是使用VChart对象生成的实例调用，更新的是单个图表；后者通过ThemeManager调用，更新了全局图表主题。所以，我阅读源码的思路是基于`setCurrentTheme`这个方法的声明、定义来层层深入的。

### 示例

#### 单个实例的更新

```typescript
const vchart = new VChart(spec, { dom: CONTAINER_ID })
// 单个theme实例的更新
vchart.setCurrentTheme('userTheme')
```

#### 全局主题的更新

```typescript
// 注册主题
VChart.ThemeManager.registerTheme('userTheme', theme)
// 全局主题更新
VChart.ThemeManager.setCurrentTheme('userTheme')
```

## 主题更新执行者：VChart.ts

分析更新行为，重点是阅读这一条调用链：
`setCurrentTheme()` → `setCurrentThemeSync()` & `updateCustomConfigAndRerender()` → `_setCurrentTheme()`的执行过程

### \_setCurrentTheme()

```typescript
protected _setCurrentTheme(name?: string): IUpdateSpecResult {
  this._updateCurrentTheme(name);
  this._initChartSpec(this._getSpecFromOriginalSpec(), 'setCurrentTheme');
  this._chart?.setCurrentTheme();
  return { change: true, reMake: false };
}
```

首先分析内部私有方法`_setCurrentTheme`，先触发`_updateCurrentTheme`，进入主题的合并与解析流程，接下来重新初始化图表规格（spec），chart是图表的核心渲染实例，负责具体的渲染和交互逻辑，这里调用了`setCurrentTheme`这个方法。

最后返回的`{ change: true, reMake: false }`，`change`表示：配置已发生变更，触发重新渲染，告诉渲染引擎需要更新，`reMake`表示不需要完全重建图表，只需要局部更新即可。返回这个结构是为了在后续的`setCurrentThemeSync`中的`updateCustomConfigAndRerender`中触发图表的更新行为。

### setCurrentThemeSync() & updateCustomConfigAndRerender()

```typescript
/**
 * **同步方法** 设置当前主题。
 * **注意，如果在 spec 上配置了 theme，则 spec 上的 theme 优先级更高。**
 * @param name 主题名称
 * @returns
 */
setCurrentThemeSync(name: string) {
  if (!ThemeManager.themeExist(name)) {
    return this as unknown as IVChart;
  }
  const result = this._setCurrentTheme(name);
  this._setFontFamilyTheme(this._currentTheme?.fontFamily as string);
  this.updateCustomConfigAndRerender(result, true, {
    transformSpec: false,
    actionSource: 'setCurrentTheme'
  });
  return this as unknown as IVChart;
}
```

判空后，首先拿到了`{ change: true, reMake: false }`这个约定好的对象，意为主题更新，必须触发重新渲染，但是不需要完全重建表格，只是局部更新即可。

### updateCustomConfigAndRerender()

```typescript
//result: { change: true, reMake: false };

//调用updateCustomConfigAndRerender
this.updateCustomConfigAndRerender(result, true, {
  transformSpec: false,
  actionSource: 'setCurrentTheme'
});

//updateCustomConfigAndRerender具体实现
updateCustomConfigAndRerender(
  updateSpecResult: IUpdateSpecResult | (() => IUpdateSpecResult),
  sync?: boolean,
  option: IVChartRenderOption = {}
) {
  if (this._isReleased || !updateSpecResult) {
    return undefined;
  }
  if (isFunction(updateSpecResult)) {
    updateSpecResult = updateSpecResult();
  }

  if (updateSpecResult.reAnimate) {
    this.stopAnimation();
    this._updateAnimateState(true);
  }

  this._reCompile(updateSpecResult);
  if (sync) {
    return this._renderSync(option);
  }
  return this._renderAsync(option);
}
```

`updateCustomConfigAndRerender`是主题重渲染的核心逻辑，也是任何主题配置更改（数据模型、图表spec等发生更改时）重渲染的核心。在主题更新里的逻辑并不复杂，因为传入的`updateSpecResult：{ change: true, reMake: false }`并不包括动画处理、也不是函数类型，只执行了`_reCompile()`和`_renderSync()`。

### \_reCompile()

```typescript
protected _reCompile(updateResult: IUpdateSpecResult, morphConfig?: IMorphConfig) {
  if (updateResult.reMake) {
    this._releaseData();
    this._initDataSet();
    this._chart?.release();
    this._chart = null as unknown as IChart;
  }

  if (updateResult.reTransformSpec) {
    // 释放图表等等
    this._chartSpecTransformer = null;
  }

  // 卸载了chart之后再设置主题 避免多余的reInit
  if (updateResult.changeTheme) {
    this._setCurrentTheme();
    this._setFontFamilyTheme(this._currentTheme?.fontFamily as string);
  } else if (updateResult.changeBackground) {
    this._compiler?.setBackground(this._getBackground());
  }

  if (updateResult.reMake) {
    // 如果不需要动画，那么释放item，避免元素残留
    this._compiler?.releaseGrammar(this._option?.animation === false || this._spec?.animation === false);
    // chart 内部事件 模块自己必须删除
    // 内部模块删除事件时，调用了event Dispatcher.release() 导致用户事件被一起删除
    // 外部事件现在需要重新添加
    this._userEvents.forEach(e => this._event?.on(e.eType as any, e.query as any, e.handler as any));

    if (updateResult.reSize) {
      this._doResize();
    }
  } else {
    if (updateResult.reCompile) {
      // recompile
      // 清除之前的所有 compile 内容
      this._compiler?.clear(
        { chart: this._chart, vChart: this },
        this._option?.animation === false || this._spec?.animation === false
      );
      // TODO: 释放事件？ vgrammar 的 view 应该不需要释放，响应的stage也没有释放，所以事件可以不绑定
      // 重新绑定事件
      // TODO: 释放XX？
      // 重新compile
      this._compiler?.compile({ chart: this._chart, vChart: this }, {});
    }
    if (updateResult.reSize) {
      const { width, height } = this.getCurrentSize();
      this._chart.onResize(width, height, false);
      this._compiler.resize(width, height, false);
    }
  }
}
```

- `reMake`为true时会通过`_releaseData`、`_initDataSet`、`release`彻底重置图表，释放所有相关资源，为重新渲染做准备。当然前面提到了，主题更新并不会完全重置图表。
- `reMake`为false时，会根据`reCompile`和`reSize`的值分别执行重新compile和图表的尺寸重置，操作例如`_chart`、`_compiler`等实例上的方法实现。

阅读源码后得知，主题更新时其实也不会触发`reCompile`操作，一般是图形有增减，才需要`reCompile`。

### \_renderSync()

```typescript
protected _renderSync = (option: IVChartRenderOption = {}) => {
  const self = this as unknown as IVChart;
  if (!this._beforeRender(option)) {
    return self;
  }
  // 填充数据绘图
  this._compiler?.render(option.morphConfig);
  this._afterRender();
  return self;
};
```

这是一个同步渲染方法，通过`_beforeRender`进行渲染前的准备和检查，确保渲染条件满足；调用`_compiler`的`render`方法执行实际的图表绘制，可以传入变形配置；完成绘制`_afterRender`进行渲染后的清理和状态更新，并返回当前实例。

## 实现全局更新的原理

### 主题调度中心：theme-manager

前面提到VChart实例更新主题是针对一个图表来更新的，而themeManager是更新全局的主题。

在ThemeManager注册主题后，可以用`ThemeManager.setCurrentTheme`通过主题名称来热更新已注册的主题。注意：这个方法将影响页面上的所有图表实例。

```typescript
static setCurrentTheme(name: string) {
  if (!ThemeManager.themeExist(name)) {
    return;
  }
  ThemeManager._currentThemeName = name;
  InstanceManager.forEach((instance: IVChart) => instance?.setCurrentTheme(name));
}
```

不难看出，这个方法全局设置当前主题名，然后遍历所有已注册的图表实例（instance）并对每个实例调用`setCurrentTheme`，从而实现了全局实例的主题更新。

### 主题实例操作的原因：instance-manager

instance对图表的操作，其实是因为在VChart类的构造函数内，将当前VChart实例注册到`InstanceManager.instances`中，从而支持全局操作，如统一更新主题。

```typescript
export class VChart implements IVChart {
  constructor(spec: ISpec, options: IInitOption) {
    // ......其他
    InstanceManager.registerInstance(this)
  }
}
```

## 总结

VChart的主题更新机制通过精心设计的架构实现了高度的灵活性和可扩展性：

1. **双层更新机制**：支持单个图表实例更新和全局图表更新两种模式
2. **优化的渲染策略**：主题更新时采用局部更新而非完全重建，提高性能
3. **解耦的架构设计**：
   - VChart：负责单个图表实例的主题应用和渲染
   - ThemeManager：负责全局主题的注册和管理
   - InstanceManager：负责图表实例的注册和遍历

这种设计使得VChart能够在保持高性能的同时，提供灵活的主题切换能力，满足不同场景下的可视化需求。无论是简单的明暗模式切换，还是复杂的多主题业务场景，VChart都能提供一致且高效的主题更新体验。
