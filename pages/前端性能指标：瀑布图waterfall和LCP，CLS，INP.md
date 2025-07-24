<h1 id="oWBwO">Waterfall</h1>
<h3 id="twMJh">时长measuring</h3>
waterfall瀑布流面板的浅颜色长度代表了请求发送和等待时间，深颜色代表了请求完成开始执行内容的下载；

前面的白色线段表示等待和链接的时长，后半段代表等待主线程的一系列工作

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738195896578-0c5d67f6-6d12-45d5-a199-9c8fef67ba97.png)![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738195851293-3eb1e424-e8c4-4dfc-9a54-4707373f40e9.png)

不同颜色代表了不同的文件

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196089221-651aede8-725b-401e-ba0b-37b1f9d16f30.png)![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196105378-6e7c6449-a488-4b81-a26b-191af47b4468.png)

<h1 id="hDDoO">性能指标</h1>
<h3 id="rpXW0">已经废弃的性能指标（lagacy matrics）</h3>
<h4 id="XwlMo">DCL(domContentLoaded)</h4>
如下图所示：

- 当Html（蓝色）被解析成dom树
- css（紫色）样式表加载并解析
- 同步Js（黄色）均执行完毕

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196429527-1c2be132-6661-47fc-8c4e-605d6a9cc5df.png)

<h4 id="ZhP3D">L(load)</h4>
当dom完全加载完毕，外部资源完全加载完毕（这里包括图像和字体）；

<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">Load事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 </font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">DOMContentLoaded</font>`<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。</font>

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196620777-153bf52f-4d68-4e46-a0f8-ecd6ae7fc05d.png)

:::success

- `<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">load</font>`<font style="color:rgb(37, 41, 51);">事件强调的是从网络上加载数据，</font><u><font style="color:rgb(37, 41, 51);">并不包括</font></u>**<u><font style="color:rgb(37, 41, 51);">解析</font></u>**<u><font style="color:rgb(37, 41, 51);">这些数据</font></u><font style="color:rgb(37, 41, 51);">；</font>
- <font style="color:rgb(37, 41, 51);">而</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">DOMContentLoaded</font>`<font style="color:rgb(37, 41, 51);">是指加载完 </font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">HTML</font>`<font style="color:rgb(37, 41, 51);"> 数据(不包括样式、JS脚本等文件)并</font>**<font style="color:rgb(37, 41, 51);">解析</font>**<font style="color:rgb(37, 41, 51);">完才会触发。</font>
- <font style="color:rgb(37, 41, 51);">所以如果页面有很多外部资源需要加载，那么</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">load</font>`<font style="color:rgb(37, 41, 51);"> 事件会后触发，如果页面内容较多，外部资源较少（主要耗时在解析），那么</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">load</font>`<font style="color:rgb(37, 41, 51);">事件先触发。</font>

:::

<h4 id="NIMZB">指标废弃的原因</h4>
DCL和L废弃的原因是Vue，React等单页面框架的兴起。

此前指标的愿景是正确反应DOM元素的加载和外部资源的加载完成；

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196783410-fa3c5313-cee5-4420-b6ae-e0569351639e.png)

当前SPA会导致最开始只加载类似id为app的最简单的div，早早的在还是空白页的时候DCL和L就触发了

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738196798830-d7308e85-274c-4fcc-9fce-96aa505fa519.png)

所以现代开发中这两个指标失去了意义？

<h3 id="wm8Bt">核心网络指标(Core web vitals)</h3>
现代核心网络指标主要用于判断网站的可视加载，加载丝滑，交互速度三大指标

- how fast your site visiable load？（LCP）
- how smooth things load?（CLS）
- how quickly users interact? （INP）

<h4 id="gHTdw">LCP(Largest contentful paint)</h4>
> how fast your site visibly loads the most important element
>

什么是**largest**呢

在测量时不看布局这些无关紧 要的，而是看背景图片，图片，视频或者大段的text-element等是否加载完成；

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738206264062-e2c7020a-4a82-4169-a18e-e631e23b7ce7.png)

:::success
**Consideration**

注意：LCP在用户第一次交互后会立即停止测量

例如：当你的页面还是白屏，但是用户已经迫不及待的做出交互（点击）这个指标的测量就已经失去意义即停止测量；

what if a user click the empty page before content loaded？That would stop LCP;

所以一个优秀的网站LCP应该控制在2.5秒左右； ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738206621969-d706d84c-82b4-4316-a796-1b8345d9d74f.png)

:::

<h4 id="ik5vk">CLS(Cumulative layout shift)</h4>
> how smooth and predictably elements load into the page 它用来测量整个页面生命周期内发生的所有意外布局偏移中最大一连串的布局偏移分数
>

举个反面例子来理解CLS的可预测性，类似一些博彩，成人网站的小广告满天飞，元素位置随时改变，一些Dom突然变大变小，让用户点的对象与实际点击的不一致， 导致用户的操作可预测性很差，这就是CLS糟糕的表现。

![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738207921707-7b865925-54b5-48f2-8ff9-c8d7fe379e29.png)

CLS指的就是页面布局发生的位移的累积总和：

**Layout Shift Value = I \* D【\*\***<font style="color:rgb(56, 56, 56);background-color:rgb(248, 245, 255);">布局偏移分数 = 影响分数 \* 距离分数</font>\***\*】**

:::success
**Consideration**

not including shifts from user action <500ms(由于用户操作而产生的页面变动被视为可预测的变动)

![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738207866306-e726e0e6-779e-4c5a-87a4-3c441906f611.png)

:::

:::warning
这里需要注意的是在写动画时优先考虑使用CSS `transform`属性，因为它能够在**<u>不触发布局偏移的情况下</u>**为元素设置动画：

- 用`transform: scale()`来替代和调整`height`和`width`属性。
- 如需使元素能够四处移动，可以用`transform: translate()`来替代和调整`top`、`right`、`bottom`或`left`属性。

:::

<h4 id="xGcHW">INP(Interaction to next paint)</h4>
> 用户从一次交互开始到下一次绘制这之间花费的时间，这反映了用户的交互能多快速的反馈。
>

> ![从点击到Frame presented的时长就是INP。](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738292513666-96f5bbe4-9500-42b0-ae00-9b1820fdeef8.png)

<font style="color:rgb(51, 51, 51);">上图展示了一个</font>`<font style="color:rgb(10, 191, 91);background-color:rgb(243, 245, 249);">交互流程</font>`<font style="color:rgb(51, 51, 51);">的生命周期。</font>`<font style="color:rgb(10, 191, 91);background-color:rgb(243, 245, 249);">输入延迟</font>`<font style="color:rgb(51, 51, 51);">发生在事件处理程序开始运行之前，可能是由于主线程上的</font>`<font style="color:rgb(10, 191, 91);background-color:rgb(243, 245, 249);">长任务</font>`<font style="color:rgb(51, 51, 51);">等因素引起的。然后交互的事件处理程序运行，然后在下一帧呈现之前会发生延迟。</font>

<font style="color:rgb(51, 51, 51);">尽管浏览器通过不依赖</font>`<font style="color:rgb(10, 191, 91);background-color:rgb(243, 245, 249);">JavaScript</font>`<font style="color:rgb(51, 51, 51);">的控件（如复选框、单选按钮以及由</font><font style="color:rgb(0, 82, 217);">CSS</font><font style="color:rgb(51, 51, 51);">支持的控件）提供交互性,但是驱动交互性的「主要因素通常还是JavaScript」.</font>

> ![超过半秒没有看到响应，此时的INP就是糟糕的](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738315429961-99f197be-ae2a-438f-b104-fef84d31e9ed.png)

<font style="color:rgb(51, 51, 51);">以下交互会被计入</font>`<font style="color:rgb(10, 191, 91);background-color:rgb(243, 245, 249);">INP</font>`<font style="color:rgb(51, 51, 51);">：</font>

- <font style="color:rgb(51, 51, 51);">鼠标点击</font>
- <font style="color:rgb(51, 51, 51);">触摸（在触摸屏上）</font>
- <font style="color:rgb(51, 51, 51);">键盘按键</font>

<font style="color:rgb(51, 51, 51);">以下交互不会被计入：</font>

- <font style="color:rgb(51, 51, 51);">悬停</font>
- <font style="color:rgb(51, 51, 51);">滚动</font>

:::warning

- <font style="color:#000000;">INP会与设备的好坏强相关；</font>
- <font style="color:#000000;">可能会不存在交互（点击），就不存在INP</font>
- <font style="color:#000000;">由于用户点击次数不止一次，选取最差的一次响应作为INP</font>

:::

<h5 id="iJjka">被INP取代的旧指标FID</h5>
FID只是触发了首次互动的输入延迟的时间

<h2 id="qHQAq">FlameCharts</h2>
火焰图展示了不同任务的执行，只有Task3执行完成后，才代表着task1和task2的完成；

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738211438345-e5f5ca56-dd1b-4098-9dfc-d9b6cbfc90d8.png)![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738280290849-f0ee249e-1ecb-4a02-adea-61f389e30fe1.png)
>
> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738280353519-56357fc6-c54b-4dfa-8097-511a08211235.png)

**不同颜色代表了不同的任务类型**

- 灰色：浏览器的任务
- 蓝色：解析html
- 紫色：布局与绘制
- 黄色：预编译，解析Js
- 淡黄色：js真正执行时的任务
- 绿色：浏览器的扩展任务

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738281221646-53d53ef9-ced0-4ddb-ba34-7cd81aa81d28.png)

举个例子

```html
<html>
  <body>
    <script>
      window.addeventlistener('load', ()=> {
        var el = document.createelement('div')
         el.innerhtml="<h1>hey</h1>"
      document.body.appendchild(el)
      }）
    </script>
  </body>
</html>
```

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738281423612-8ce9bde9-e0ea-4e25-b57d-181b7c306358.png)

- **Parse HTML**：浏览器解析 HTML 构建 DOM 树。
- **Evaluation script**：解析 HTML 时遇`<script>`标签则执行 JS 代码。
- **Compile code**：JS 代码编译为机器码以高效执行。
- **Event: load**：页面资源加载完触发，可引后续操作。
- **Function call**：`load`事件触发后调用相关函数。
- **Compile (function)**：对`load`回调函数代码编译。
- **Layout**：DOM 或 CSS 变化时，浏览器重算元素几何信息。

总而言之可以在火焰图上看出浏览器获取 HTML 后开始解析构建 DOM 树，解析中遇`<script>`标签执行 JS 代码并编译为机器码。页面资源加载完毕触发`load`事件，调用相关函数，函数代码也需编译，之后因 DOM 变化浏览器进行布局计算。

异步与事件机制决定了load事件是异步触发的，它在页面资源全部加载完成时才发生。这使得它与前期的 HTML 解析、脚本执行等任务天然分隔开，成为独立 Task。

在火焰图中，任务是线性执行的，由于Js的单线程，一个任务如果执行时间过长，会影响其他任务；

<h2 id="PYrj6"><font style="color:rgb(31, 35, 41);">
</font><font style="color:rgb(31, 35, 41);">更多性能指标</font></h2>
<h4 id="grUSI">TTFB(time to first byte)</h4>
> how quickly your host response
>
> 测量了你请求一个资源到后端返回第一个字节之间的时间
>

![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738317251304-2f4c441e-5645-4fb4-8a02-206eeb91b5ba.png)

我们知道一个瀑布流里淡蓝色是网络请求，蓝色是资源下载。所以蓝色的最开始就是TTFB。

![](https://cdn.nlark.com/yuque/0/2025/webp/38724255/1738317327682-4aa29e9e-fc34-4edd-8831-cd24eac707bb.webp)

由上图我们知道TTFB包括了**<font style="color:rgb(3, 106, 202);">重定向时延，DNS查询时延，链接建立延迟，请求响应时延</font>**

**<font style="color:rgb(3, 106, 202);"></font>**

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738317618652-108a0386-3d23-4015-b05a-229bd6467e72.png)

```typescript
import { onTTFB } from 'web-vitals'

console.log(onTTFB)
```

![](https://cdn.nlark.com/yuque/0/2025/webp/38724255/1738317691693-930311fb-b6d1-4f18-ab7f-dab91a69a57f.webp)

<h4 id="HfKXX">FCP（first contentful paint）</h4>
区别于LCP(largest contentful paint)，FCP <font style="color:rgb(89, 89, 89);">测量页面从开始加载到页面内容的</font>**<font style="color:rgb(89, 89, 89);">任何部分</font>**<font style="color:rgb(89, 89, 89);">在屏幕上完成渲染的时间</font>

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738317865870-6aa34c68-a92b-42a8-b734-c67ad32390f5.png)

![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738318428432-c9192d4c-6850-4cab-a75e-1d1dddd87ca6.png)

**TTFB<FCP<LCP**

---

<h1 id="PjeQh">Performance API</h1>
![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738370170293-eb910915-e9fa-4ea7-afa5-194982481a6f.png)

[Performance - Web API | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

<h2 id="N8wQr">Performance实例方法</h2>
+ **Performance.getEntries()**

**基于给定的 filter 返回一个 PerformanceEntry 对象的列表。**

---

- **Performance.getEntriesByName()**

**基于给定的 name 和 entry type 返回一个 PerformanceEntry 对象的列表。**

---

- **Performance.getEntriesByType()**

**基于给定的 entry type 返回一个 PerformanceEntry 对象的列表**

![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738376741543-c0c5f206-dd63-45fb-a168-2459ac758c9c.png)

---

- **Performance.now()**

**返回一个表示从性能测量时刻开始经过的毫秒数 DOMHighResTimeStamp\*\***<font style="color:#DF2A3F;">，比Date.now()精度高得多</font>\*\*

> ![用于获取毫秒级的时间戳计算两者之间的时间差](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738375050676-e7ae140a-dae6-4a36-a8a8-78843c505111.png)

- **Performance.mark()&&Performance.measure()**

**mark根据给出 name 值，在浏览器的性能输入缓冲区中创建一个相关的timestamp；**

**measure在浏览器的指定 start mark 和 end mark 间的性能输入缓冲区中创建一个指定的 timestamp;**

> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738376507135-6f81a491-3c99-41b0-b751-3d27f8257039.png)
>
> ![](https://cdn.nlark.com/yuque/0/2025/png/38724255/1738376580671-c20ff8d7-19e1-4e43-adf1-23c720be1385.png)

<h2 id="GWyIm">Performance Observer API</h2>
**比起PerformanceAPI，****Performance Observer API会更常用****一些：**

1. **performance API需要开发者手动定期调用方法，检查是否有新的性能数据，增加性能开销，且如果调用不及时，可能会错过新增的性能数据**
2. **浏览器的性能条目(performance entries)有固定的缓冲区大小。当缓冲区满时，旧的数据会被清除**
3. **performance 是一个全局对象，所有的性能数据都会存储在这里。如果应用程序的多个模块或第三方库都在使用它，管理和过滤数据会变得复杂，可能会引发冲突；**
