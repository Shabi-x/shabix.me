---
title: Web性能指标详解
description: 深入理解现代Web性能指标，包括Core Web Vitals、Waterfall分析和Performance API
date: 2024-7-30T16:00:00.000+08:00
lang: zh
type: note
duration: 15min
---

# Waterfall

## 时长measuring

waterfall瀑布流面板的浅颜色长度代表了请求发送和等待时间，深颜色代表了请求完成开始执行内容的下载；

前面的白色线段表示等待和链接的时长，后半段代表等待主线程的一系列工作

![Waterfall时长分析](/images/posts/waterfall-timing-1.png)
![Waterfall时长分析2](/images/posts/waterfall-timing-2.png)

不同颜色代表了不同的文件

![Waterfall颜色说明](/images/posts/waterfall-colors-1.png)
![Waterfall颜色说明2](/images/posts/waterfall-colors-2.png)

# 性能指标

## 已经废弃的性能指标（Legacy Metrics）

### DCL(DOMContentLoaded)

如下图所示：

- 当Html（蓝色）被解析成dom树
- css（紫色）样式表加载并解析
- 同步Js（黄色）均执行完毕

![DCL时序图](/images/posts/dcl-timing.png)

### L(Load)

当dom完全加载完毕，外部资源完全加载完毕（这里包括图像和字体）；

Load事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 `DOMContentLoaded` 不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。

![Load时序图](/images/posts/load-timing.png)

> **重要区别**
>
> - `load` 事件强调的是从网络上加载数据，**并不包括解析**这些数据；
> - 而 `DOMContentLoaded` 是指加载完 `HTML` 数据(不包括样式、JS脚本等文件)并**解析**完才会触发。
> - 所以如果页面有很多外部资源需要加载，那么 `load` 事件会后触发，如果页面内容较多，外部资源较少（主要耗时在解析），那么 `load` 事件先触发。

### 指标废弃的原因

DCL和L废弃的原因是Vue，React等单页面框架的兴起。

此前指标的愿景是正确反应DOM元素的加载和外部资源的加载完成；

![传统网站加载](/images/posts/spa-problem-1.png)

当前SPA会导致最开始只加载类似id为app的最简单的div，早早的在还是空白页的时候DCL和L就触发了

![SPA加载问题](/images/posts/spa-problem-2.png)

所以现代开发中这两个指标失去了意义。

## 核心网络指标(Core Web Vitals)

现代核心网络指标主要用于判断网站的可视加载，加载丝滑，交互速度三大指标

- how fast your site visibly load？（LCP）
- how smooth things load?（CLS）
- how quickly users interact? （INP）

### LCP(Largest Contentful Paint)

> how fast your site visibly loads the most important element

什么是**largest**呢

在测量时不看布局这些无关紧要的，而是看背景图片，图片，视频或者大段的text-element等是否加载完成；

![LCP示例](/images/posts/lcp-example.png)

> **注意事项**
>
> 注意：LCP在用户第一次交互后会立即停止测量
>
> 例如：当你的页面还是白屏，但是用户已经迫不及待的做出交互（点击）这个指标的测量就已经失去意义即停止测量；
>
> what if a user click the empty page before content loaded？That would stop LCP;
>
> 所以一个优秀的网站LCP应该控制在2.5秒左右；

![LCP时间标准](/images/posts/lcp-timing.png)

### CLS(Cumulative Layout Shift)

> how smooth and predictably elements load into the page 它用来测量整个页面生命周期内发生的所有意外布局偏移中最大一连串的布局偏移分数

举个反面例子来理解CLS的可预测性，类似一些博彩，成人网站的小广告满天飞，元素位置随时改变，一些Dom突然变大变小，让用户点的对象与实际点击的不一致， 导致用户的操作可预测性很差，这就是CLS糟糕的表现。

![CLS示例](/images/posts/cls-example.png)

CLS指的就是页面布局发生的位移的累积总和：

**Layout Shift Value = I × D【布局偏移分数 = 影响分数 × 距离分数】**

> **注意事项**
>
> not including shifts from user action <500ms(由于用户操作而产生的页面变动被视为可预测的变动)

![CLS用户操作](/images/posts/cls-user-action.png)

> **优化建议**
>
> 这里需要注意的是在写动画时优先考虑使用CSS `transform`属性，因为它能够在**不触发布局偏移的情况下**为元素设置动画：
>
> - 用`transform: scale()`来替代和调整`height`和`width`属性。
> - 如需使元素能够四处移动，可以用`transform: translate()`来替代和调整`top`、`right`、`bottom`或`left`属性。

### INP(Interaction to Next Paint)

> 用户从一次交互开始到下一次绘制这之间花费的时间，这反映了用户的交互能多快速的反馈。

从点击到Frame presented的时长就是INP。

![INP交互生命周期](/images/posts/inp-lifecycle.png)

上图展示了一个`交互流程`的生命周期。`输入延迟`发生在事件处理程序开始运行之前，可能是由于主线程上的`长任务`等因素引起的。然后交互的事件处理程序运行，然后在下一帧呈现之前会发生延迟。

尽管浏览器通过不依赖`JavaScript`的控件（如复选框、单选按钮以及由CSS支持的控件）提供交互性,但是驱动交互性的「主要因素通常还是JavaScript」.

超过半秒没有看到响应，此时的INP就是糟糕的

![INP时间标准](/images/posts/inp-timing.png)

以下交互会被计入`INP`：

- 鼠标点击
- 触摸（在触摸屏上）
- 键盘按键

以下交互不会被计入：

- 悬停
- 滚动

> **注意事项**
>
> - INP会与设备的好坏强相关；
> - 可能会不存在交互（点击），就不存在INP
> - 由于用户点击次数不止一次，选取最差的一次响应作为INP

#### 被INP取代的旧指标FID

FID只是触发了首次互动的输入延迟的时间

## FlameCharts

火焰图展示了不同任务的执行，只有Task3执行完成后，才代表着task1和task2的完成；

![火焰图示例](/images/posts/flame-chart-1.png)

### 不同颜色代表了不同的任务类型

- 灰色：浏览器的任务
- 蓝色：解析html
- 紫色：布局与绘制
- 黄色：预编译，解析Js
- 淡黄色：js真正执行时的任务
- 绿色：浏览器的扩展任务

![火焰图颜色说明](/images/posts/flame-chart-colors.png)

举个例子

```html
<html>
  <body>
    <script>
      window.addEventListener('load', () => {
        var el = document.createElement('div')
        el.innerHTML = '<h1>hey</h1>'
        document.body.appendChild(el)
      })
    </script>
  </body>
</html>
```

- **Parse HTML**：浏览器解析 HTML 构建 DOM 树。
- **Evaluation script**：解析 HTML 时遇`<script>`标签则执行 JS 代码。
- **Compile code**：JS 代码编译为机器码以高效执行。
- **Event: load**：页面资源加载完触发，可引后续操作。
- **Function call**：`load`事件触发后调用相关函数。
- **Compile (function)**：对`load`回调函数代码编译。
- **Layout**：DOM 或 CSS 变化时，浏览器重算元素几何信息。

![火焰图实例分析](/images/posts/flame-chart-example.png)

总而言之可以在火焰图上看出浏览器获取 HTML 后开始解析构建 DOM 树，解析中遇`<script>`标签执行 JS 代码并编译为机器码。页面资源加载完毕触发`load`事件，调用相关函数，函数代码也需编译，之后因 DOM 变化浏览器进行布局计算。

异步与事件机制决定了load事件是异步触发的，它在页面资源全部加载完成时才发生。这使得它与前期的 HTML 解析、脚本执行等任务天然分隔开，成为独立 Task。

在火焰图中，任务是线性执行的，由于Js的单线程，一个任务如果执行时间过长，会影响其他任务；

## 更多性能指标

### TTFB(Time To First Byte)

> how quickly your host response
>
> 测量了你请求一个资源到后端返回第一个字节之间的时间

我们知道一个瀑布流里淡蓝色是网络请求，蓝色是资源下载。所以蓝色的最开始就是TTFB。

![TTFB在瀑布图中的位置](/images/posts/ttfb-waterfall.png)

TTFB包括了**重定向时延，DNS查询时延，链接建立延迟，请求响应时延**

![TTFB组成部分](/images/posts/ttfb-components.webp)

![TTFB时间标准](/images/posts/ttfb-timing.png)

```typescript
import { onTTFB } from 'web-vitals'

console.log(onTTFB)
```

### FCP（First Contentful Paint）

区别于LCP(Largest Contentful Paint)，FCP 测量页面从开始加载到页面内容的**任何部分**在屏幕上完成渲染的时间

**TTFB < FCP < LCP**

---

# Performance API

![Performance API](/images/posts/performance-api.png)

[Performance - Web API | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

## Performance实例方法

### Performance.getEntries()

**基于给定的 filter 返回一个 PerformanceEntry 对象的列表。**

### Performance.getEntriesByName()

**基于给定的 name 和 entry type 返回一个 PerformanceEntry 对象的列表。**

### Performance.getEntriesByType()

**基于给定的 entry type 返回一个 PerformanceEntry 对象的列表**

![Performance Entries](/images/posts/performance-entries.png)

### Performance.now()

**返回一个表示从性能测量时刻开始经过的毫秒数 DOMHighResTimeStamp，比Date.now()精度高得多**

用于获取毫秒级的时间戳计算两者之间的时间差

![Performance.now()示例](/images/posts/performance-now.png)

### Performance.mark() && Performance.measure()

**mark根据给出 name 值，在浏览器的性能输入缓冲区中创建一个相关的timestamp；**

**measure在浏览器的指定 start mark 和 end mark 间的性能输入缓冲区中创建一个指定的 timestamp;**

![Performance.mark()示例](/images/posts/performance-mark.png)

![Performance.measure()示例](/images/posts/performance-measure.png)

## Performance Observer API

**比起PerformanceAPI，Performance Observer API会更常用一些：**

1. **performance API需要开发者手动定期调用方法，检查是否有新的性能数据，增加性能开销，且如果调用不及时，可能会错过新增的性能数据**
2. **浏览器的性能条目(performance entries)有固定的缓冲区大小。当缓冲区满时，旧的数据会被清除**
3. **performance 是一个全局对象，所有的性能数据都会存储在这里。如果应用程序的多个模块或第三方库都在使用它，管理和过滤数据会变得复杂，可能会引发冲突；**

---

> 更多文章详见：[语雀 - 孤独的游标卡尺](https://www.yuque.com/gududeyoubiaokachi-rl2tl)
