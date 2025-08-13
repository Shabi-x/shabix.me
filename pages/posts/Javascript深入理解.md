<h3 id="_1-类型及检测方式"><font style="color:rgb(44, 62, 80);"> 1 类型及检测方式</font></h3>
**<font style="color:rgb(238, 63, 77);">1. JS内置类型</font>**

<font style="color:rgb(44, 62, 80);">JavaScript 的数据类型有下图所示</font>

![](/images/posts/1754917945971-74c01536-70c1-4dd2-a036-089264916e2e.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">其中，前 7 种类型为基础类型，最后</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1 种（Object）为引用类型</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，也是你需要重点关注的，因为它在日常工作中是使用得最频繁，也是需要关注最多技术细节的数据类型</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JavaScript</font>`<font style="color:rgb(44, 62, 80);">一共有8种数据类型，其中有7种基本数据类型：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Undefined</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Null</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Boolean</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Number</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">String</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Symbol</font>`<font style="color:rgb(44, 62, 80);">（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">es6</font>`<font style="color:rgb(44, 62, 80);">新增，表示独一无二的值）和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">BigInt</font>`<font style="color:rgb(44, 62, 80);">（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">es10</font>`<font style="color:rgb(44, 62, 80);">新增）；</font>
- <font style="color:rgb(44, 62, 80);">1种引用数据类型——</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(44, 62, 80);">（Object本质上是由一组无序的名值对组成的）。里面包含</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function、Array、Date</font>`<font style="color:rgb(44, 62, 80);">等。JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是上述 8 种数据类型之一。</font>
  - **<font style="color:rgb(238, 63, 77);">引用数据类型:</font>**<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(44, 62, 80);">（包含普通对象-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(44, 62, 80);">，数组对象-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array</font>`<font style="color:rgb(44, 62, 80);">，正则对象-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">RegExp</font>`<font style="color:rgb(44, 62, 80);">，日期对象-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Date</font>`<font style="color:rgb(44, 62, 80);">，数学函数-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Math</font>`<font style="color:rgb(44, 62, 80);">，函数对象-</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Function</font>`<font style="color:rgb(44, 62, 80);">）</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在这里，我想先请你重点了解下面两点，因为各种 JavaScript 的数据类型最后都会在初始化之后放在不同的内存中，因此上面的数据类型大致可以分成两类来进行存储：</font>

- **<font style="color:rgb(238, 63, 77);">原始数据类型</font>**<font style="color:rgb(44, 62, 80);">：基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。</font>
- **<font style="color:rgb(238, 63, 77);">引用数据类型</font>**<font style="color:rgb(44, 62, 80);">：引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念；占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。</font>

**<font style="color:rgb(238, 63, 77);">JavaScript 中的数据是如何存储在内存中的？</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在 JavaScript 中，原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址。</font>

<font style="color:rgb(44, 62, 80);">在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">代码空间</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">栈空间</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">堆空间</font>`<font style="color:rgb(44, 62, 80);">。其中的代码空间主要是存储可执行代码的，原始类型(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Number、String、Null、Undefined、Boolean、Symbol、BigInt</font>`<font style="color:rgb(44, 62, 80);">)的数据值都是直接保存在“栈”中的，引用类型(Object)的值是存放在“堆”中的。因此在栈空间中(执行上下文)，原始类型存储的是变量的值，而引用类型存储的是其在"堆空间"中的地址，当 JavaScript 需要访问该数据的时候，是通过栈中的引用地址来访问的，相当于多了一道转手流程。</font>

<font style="color:rgb(44, 62, 80);">在编译过程中，如果 JavaScript 引擎判断到一个闭包，也会在堆空间创建换一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">“closure(fn)”</font>`<font style="color:rgb(44, 62, 80);">的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存闭包中的变量。所以闭包中的变量是存储在“堆空间”中的。</font>

<font style="color:rgb(44, 62, 80);">JavaScript 引擎需要用栈来维护程序执行期间上下文的状态，如果栈空间大了话，所有的数据都存放在栈空间里面，那么会影响到上下文切换的效率，进而又影响到整个程序的执行效率。通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。因此需要“栈”和“堆”两种空间。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">题目一：初出茅庐</font>

```plain
let a = {
  name: 'lee',
  age: 18
}
let b = a;
console.log(a.name);  //第一个console
b.name = 'son';
console.log(a.name);  //第二个console
console.log(b.name);  //第三个console

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这道题比较简单，我们可以看到第一个 console 打出来 name 是 'lee'，这应该没什么疑问；但是在执行了 b.name='son' 之后，结果你会发现 a 和 b 的属性 name 都是 'son'，第二个和第三个打印结果是一样的，这里就体现了引用类型的“共享”的特性，即这两个值都存在同一块内存中共享，一个发生了改变，另外一个也随之跟着变化。</font>

<font style="color:rgb(44, 62, 80);">你可以直接在 Chrome 控制台敲一遍，深入理解一下这部分概念。下面我们再看一段代码，它是比题目一稍复杂一些的对象属性变化问题。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">题目二：渐入佳境</font>

```plain
let a = {
  name: 'Julia',
  age: 20
}
function change(o) {
  o.age = 24;
  o = {
    name: 'Kath',
    age: 30
  }
  return o;
}
let b = change(a);     // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age);    // 第一个console
console.log(a.age);    // 第二个console

```

<font style="color:rgb(44, 62, 80);">这道题涉及了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);">，你通过上述代码可以看到第一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">console</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">30</font>`<font style="color:rgb(44, 62, 80);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">b</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">最后打印结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">{name: "Kath", age: 30}</font>`<font style="color:rgb(44, 62, 80);">；第二个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">console</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的返回结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">24</font>`<font style="color:rgb(44, 62, 80);">，而</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">最后的打印结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">{name: "Julia", age: 24}</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">是不是和你预想的有些区别？你要注意的是，这里的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">return</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">带来了不一样的东西。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">原因在于：函数传参进来的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">o</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，传递的是对象在堆中的内存地址值，通过调用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">o.age = 24</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">（第 7 行代码）确实改变了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">age</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属性；但是第 12 行代码的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">return</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">却又把</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">o</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">变成了另一个内存地址，将</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">{name: "Kath", age: 30}</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">存入其中，最后返回</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">b</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的值就变成了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">{name: "Kath", age: 30}</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。而如果把第 12 行去掉，那么</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">b</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就会返回</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`

**<font style="color:rgb(238, 63, 77);">2. 数据类型检测</font>**

**<font style="color:rgb(238, 63, 77);">（1）typeof</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">typeof 对于原始类型来说，除了 null 都可以显示正确的类型</font>

```plain
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于对象来说，除了函数都会显示</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，所以说</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">instanceof</font>`

**<font style="color:rgb(238, 63, 77);">（2）instanceof</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">instanceof</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">prototype</font>`

```plain
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);

```

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">instanceof</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；</font>
- <font style="color:rgb(44, 62, 80);">而</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">也存在弊端，它虽然可以判断基础数据类型（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">除外），但是引用数据类型中，除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类型以外，其他的也无法判断</font>

```plain
// 我们也可以试着实现一下 instanceof
function _instanceof(left, right) {
    // 由于instance要检测的是某对象，需要有一个前置判断条件
    //基本数据类型直接返回false
    if(typeof left !== 'object' || left === null) return false;

    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}

console.log('test', _instanceof(null, Array)) // false
console.log('test', _instanceof([], Array)) // true
console.log('test', _instanceof('', Array)) // false
console.log('test', _instanceof({}, Object)) // true

```

**<font style="color:rgb(238, 63, 77);">（3）constructor</font>**

```plain
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这里有一个坑，如果我创建一个对象，更改它的原型，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">constructor</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就会变得不可靠了</font>

```plain
function Fn(){};

Fn.prototype=new Array();

var f=new Fn();

console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true

```

**<font style="color:rgb(238, 63, 77);">（4）Object.prototype.toString.call()</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的原型方法，调用该方法，可以统一返回格式为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">“[object Xxx]”</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的字符串，其中</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Xxx</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就是对象的类型。对于</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象，直接调用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就能返回</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[object Object]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">；而对于其他对象，则需要通过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">call</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来调用，才能返回正确的类型信息。我们来看一下代码。</font>

```plain
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"

// 从上面这段代码可以看出，Object.prototype.toString.call() 可以很好地判断引用类型，甚至可以把 document 和 window 都区分开来。

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">实现一个全局通用的数据类型判断方法，来加深你的理解，代码如下</font>

```plain
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');  // 注意正则中间有个空格
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回

```

**<font style="color:rgb(238, 63, 77);">小结</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`
  - <font style="color:rgb(44, 62, 80);">直接在计算机底层基于数据类型的值（二进制）进行检测</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof null</font>`<font style="color:rgb(44, 62, 80);">为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">原因是对象存在在计算机中，都是以</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">000</font>`<font style="color:rgb(44, 62, 80);">开始的二进制存储，所以检测出来的结果是对象</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">普通对象/数组对象/正则对象/日期对象 都是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof NaN === 'number'</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">instanceof</font>`
  - <font style="color:rgb(44, 62, 80);">检测当前实例是否属于这个类的</font>
  - <font style="color:rgb(44, 62, 80);">底层机制：只要当前类出现在实例的原型上，结果都是true</font>
  - <font style="color:rgb(44, 62, 80);">不能检测基本数据类型</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">constructor</font>`
  - <font style="color:rgb(44, 62, 80);">支持基本类型</font>
  - <font style="color:rgb(44, 62, 80);">constructor可以随便改，也不准</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.prototype.toString.call([val])</font>`
  - <font style="color:rgb(44, 62, 80);">返回当前实例所属类信息</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">判断</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Target</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的类型，单单用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">并无法完全满足，这其实并不是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bug</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，本质原因是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的万物皆对象的理论。因此要真正完美判断时，我们需要区分对待:</font>

- <font style="color:rgb(44, 62, 80);">基本类型(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);">): 使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">String(null)</font>`
- <font style="color:rgb(44, 62, 80);">基本类型(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">string / number / boolean / undefined</font>`<font style="color:rgb(44, 62, 80);">) +</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);">: - 直接使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">typeof</font>`<font style="color:rgb(44, 62, 80);">即可</font>
- <font style="color:rgb(44, 62, 80);">其余引用类型(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array / Date / RegExp Error</font>`<font style="color:rgb(44, 62, 80);">): 调用</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString</font>`<font style="color:rgb(44, 62, 80);">后根据</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[object XXX]</font>`<font style="color:rgb(44, 62, 80);">进行判断</font>

**<font style="color:rgb(238, 63, 77);">3. 数据类型转换</font>**

<font style="color:rgb(44, 62, 80);">我们先看一段代码，了解下大致的情况。</font>

```plain
'123' == 123   // false or true?
'' == null    // false or true?
'' == 0        // false or true?
[] == 0        // false or true?
[] == ''       // false or true?
[] == ![]      // false or true?
null == undefined //  false or true?
Number(null)     // 返回什么？
Number('')      // 返回什么？
parseInt('');    // 返回什么？
{}+10           // 返回什么？
let obj = {
    [Symbol.toPrimitive]() {
        return 200;
    },
    valueOf() {
        return 300;
    },
    toString() {
        return 'Hello';
    }
}
console.log(obj + 200); // 这里打印出来是多少？

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">首先我们要知道，在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中类型转换只有三种情况，分别是：</font>

- <font style="color:rgb(44, 62, 80);">转换为布尔值</font>
- <font style="color:rgb(44, 62, 80);">转换为数字</font>
- <font style="color:rgb(44, 62, 80);">转换为字符串</font>

![](/images/posts/1754917945939-b796364c-2ff3-4c93-b41a-bd381087cca8.png)

**<font style="color:rgb(238, 63, 77);">转Boolean</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在条件判断时，除了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">NaN</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">''</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">-0</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，其他所有值都转为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">true</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，包括所有对象</font>

```plain
Boolean(0)          //false
Boolean(null)       //false
Boolean(undefined)  //false
Boolean(NaN)        //false
Boolean(1)          //true
Boolean(13)         //true
Boolean('12')       //true

```

**<font style="color:rgb(238, 63, 77);">对象转原始类型</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象在转换类型的时候，会调用内置的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[ToPrimitive]]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数，对于该函数来说，算法逻辑一般来说如下</font>

- <font style="color:rgb(44, 62, 80);">如果已经是原始类型了，那就不需要转换了</font>
- <font style="color:rgb(44, 62, 80);">调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">x.valueOf()</font>`<font style="color:rgb(44, 62, 80);">，如果转换为基础类型，就返回转换的值</font>
- <font style="color:rgb(44, 62, 80);">调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">x.toString()</font>`<font style="color:rgb(44, 62, 80);">，如果转换为基础类型，就返回转换的值</font>
- <font style="color:rgb(44, 62, 80);">如果都没有返回原始类型，就会报错</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当然你也可以重写</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Symbol.toPrimitive</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，该方法在转原始类型时调用优先级最高。</font>

```plain
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3

```

**<font style="color:rgb(238, 63, 77);">四则运算符</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">它有以下几个特点：</font>

- <font style="color:rgb(44, 62, 80);">运算中其中一方为字符串，那么就会把另一方也转换为字符串</font>
- <font style="color:rgb(44, 62, 80);">如果一方不是字符串或者数字，那么会将它转换为数字或者字符串</font>

```plain
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // "41,2,3"

```

- <font style="color:rgb(44, 62, 80);">对于第一行代码来说，触发特点一，所以将数字</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">转换为字符串，得到结果</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">'11'</font>`
- <font style="color:rgb(44, 62, 80);">对于第二行代码来说，触发特点二，所以将</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">true</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">转为数字</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1</font>`
- <font style="color:rgb(44, 62, 80);">对于第三行代码来说，触发特点二，所以将数组通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString</font>`<font style="color:rgb(44, 62, 80);">转为字符串</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1,2,3</font>`<font style="color:rgb(44, 62, 80);">，得到结果</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">41,2,3</font>`

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">另外对于加法还需要注意这个表达式</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">'a' + + 'b'</font>`

```plain
'a' + + 'b' // -> "aNaN"

```

- <font style="color:rgb(44, 62, 80);">因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">+ 'b'</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">NaN</font>`<font style="color:rgb(44, 62, 80);">，所以结果为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">"aNaN"</font>`<font style="color:rgb(44, 62, 80);">，你可能也会在一些代码中看到过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">+ '1'</font>`<font style="color:rgb(44, 62, 80);">的形式来快速获取</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">number</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类型。</font>
- <font style="color:rgb(44, 62, 80);">那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字</font>

```plain
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN

```

**<font style="color:rgb(238, 63, 77);">比较运算符</font>**

- <font style="color:rgb(44, 62, 80);">如果是对象，就通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toPrimitive</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">转换对象</font>
- <font style="color:rgb(44, 62, 80);">如果是字符串，就通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">unicode</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">字符索引来比较</font>

```plain
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在以上代码中，因为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是对象，所以会通过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">valueOf</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">转换为原始类型再比较值。</font>

**<font style="color:rgb(238, 63, 77);">强制类型转换</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">强制类型转换方式包括</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Number()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">parseInt()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">parseFloat()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">String()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Boolean()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，这几种方法都比较类似</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Number()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的强制转换规则</font>
- <font style="color:rgb(44, 62, 80);">如果是布尔值，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">true</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">分别被转换为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果是数字，返回自身；</font>
- <font style="color:rgb(44, 62, 80);">如果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);">，返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">，返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">NaN</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0X / 0x</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(44, 62, 80);">；如果不是以上格式的字符串，均返回 NaN；</font>
- <font style="color:rgb(44, 62, 80);">如果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Symbol</font>`<font style="color:rgb(44, 62, 80);">，抛出错误；</font>
- <font style="color:rgb(44, 62, 80);">如果是对象，并且部署了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[Symbol.toPrimitive]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，那么调用此方法，否则调用对象的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">valueOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，然后依据前面的规则转换返回的值；如果转换的结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">NaN</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，则调用对象的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，再次依照前面的顺序转换返回对应的值。</font>

```plain
Number(true);        // 1
Number(false);       // 0
Number('0111');      //111
Number(null);        //0
Number('');          //0
Number('1a');        //NaN
Number(-0X11);       //-17
Number('0X11')       //17

```

**<font style="color:rgb(238, 63, 77);">Object 的转换规则</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象转换的规则，会先调用内置的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[ToPrimitive]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数，其规则逻辑如下：</font>

- <font style="color:rgb(44, 62, 80);">如果部署了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Symbol.toPrimitive</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，优先调用再返回；</font>
- <font style="color:rgb(44, 62, 80);">调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">valueOf()</font>`<font style="color:rgb(44, 62, 80);">，如果转换为基础类型，则返回；</font>
- <font style="color:rgb(44, 62, 80);">调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(44, 62, 80);">，如果转换为基础类型，则返回；</font>
- <font style="color:rgb(44, 62, 80);">如果都没有返回基础类型，会报错。</font>

```plain
var obj = {
  value: 1,
  valueOf() {
    return 2;
  },
  toString() {
    return '3'
  },
  [Symbol.toPrimitive]() {
    return 4
  }
}
console.log(obj + 1); // 输出5
// 因为有Symbol.toPrimitive，就优先执行这个；如果Symbol.toPrimitive这段代码删掉，则执行valueOf打印结果为3；如果valueOf也去掉，则调用toString返回'31'(字符串拼接)
// 再看两个特殊的case：
10 + {}
// "10[object Object]"，注意：{}会默认调用valueOf是{}，不是基础类型继续转换，调用toString，返回结果"[object Object]"，于是和10进行'+'运算，按照字符串拼接规则来，参考'+'的规则C
[1,2,undefined,4,5] + 10
// "1,2,,4,510"，注意[1,2,undefined,4,5]会默认先调用valueOf结果还是这个数组，不是基础数据类型继续转换，也还是调用toString，返回"1,2,,4,5"，然后再和10进行运算，还是按照字符串拼接规则，参考'+'的第3条规则

```

**<font style="color:rgb(238, 63, 77);">'==' 的隐式类型转换规则</font>**

- <font style="color:rgb(44, 62, 80);">如果类型相同，无须进行类型转换；</font>
- <font style="color:rgb(44, 62, 80);">如果其中一个操作值是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或者</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">，那么另一个操作符必须为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或者</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">，才会返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">true</font>`<font style="color:rgb(44, 62, 80);">，否则都返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果其中一个是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Symbol</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类型，那么返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">两个操作值如果为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">string</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和 number 类型，那么就会将字符串转换为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">number</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果一个操作值是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">boolean</font>`<font style="color:rgb(44, 62, 80);">，那么转换成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">number</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">如果一个操作值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">且另一方为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">string</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">number</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或者</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">symbol</font>`<font style="color:rgb(44, 62, 80);">，就会把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">转为原始类型再进行判断（调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">object</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">valueOf/toString</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行转换）。</font>

```plain
null == undefined       // true  规则2
null == 0               // false 规则2
'' == null              // false 规则2
'' == 0                 // true  规则4 字符串转隐式转换成Number之后再对比
'123' == 123            // true  规则4 字符串转隐式转换成Number之后再对比
0 == false              // true  e规则 布尔型隐式转换成Number之后再对比
1 == true               // true  e规则 布尔型隐式转换成Number之后再对比
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  }
};
// 注意这里a又可以等于1、2、3
console.log(a == 1 && a == 2 && a ==3);  //true f规则 Object隐式转换
// 注：但是执行过3遍之后，再重新执行a==3或之前的数字就是false，因为value已经加上去了，这里需要注意一下

```

**<font style="color:rgb(238, 63, 77);">'+' 的隐式类型转换规则</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">'+' 号操作符，不仅可以用作数字相加，还可以用作字符串拼接。仅当 '+' 号两边都是数字时，进行的是加法运算；如果两边都是字符串，则直接拼接，无须进行隐式类型转换。</font>

- <font style="color:rgb(44, 62, 80);">如果其中有一个是字符串，另外一个是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或布尔型，则调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级，然后再进行拼接。</font>
- <font style="color:rgb(44, 62, 80);">如果其中有一个是数字，另外一个是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);">、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则。</font>
- <font style="color:rgb(44, 62, 80);">如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接</font>

```plain
1 + 2        // 3  常规情况
'1' + '2'    // '12' 常规情况
// 下面看一下特殊情况
'1' + undefined   // "1undefined" 规则1，undefined转换字符串
'1' + null        // "1null" 规则1，null转换字符串
'1' + true        // "1true" 规则1，true转换字符串
'1' + 1n          // '11' 比较特殊字符串和BigInt相加，BigInt转换为字符串
1 + undefined     // NaN  规则2，undefined转换数字相加NaN
1 + null          // 1    规则2，null转换为0
1 + true          // 2    规则2，true转换为1，二者相加为2
1 + 1n            // 错误  不能把BigInt和Number类型直接混合相加
'1' + 3           // '13' 规则3，字符串拼接

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">整体来看，如果数据中有字符串，JavaScript 类型转换还是更倾向于转换成字符串，因为第三条规则中可以看到，在字符串和数字相加的过程中最后返回的还是字符串，这里需要关注一下</font>

**<font style="color:rgb(238, 63, 77);">null 和 undefined 的区别？</font>**

- <font style="color:rgb(44, 62, 80);">首先</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Undefined</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">都是基本数据类型，这两个基本数据类型分别都只有一个值，就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);">。</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代表的含义是未定义，</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代表的含义是空对象（其实不是真的对象，请看下面的注意！）。一般变量声明了但还没有定义的时候会返回</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">主要用于赋值给一些可能会返回对象的变量，作为初始化。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。</font>

- <font style="color:rgb(44, 62, 80);">undefined 在 js 中不是一个保留字，这意味着我们可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">值，比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">void 0</font>`<font style="color:rgb(44, 62, 80);">。</font>
- <font style="color:rgb(44, 62, 80);">当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。</font>

<h3 id="_2-this">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_2-this)<font style="color:rgb(44, 62, 80);">2 This</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不同情况的调用，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">指向分别如何。顺带可以提一下</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">es6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中箭头函数没有</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">,</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">arguments</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">,</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">super</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">等，这些只依赖包含箭头函数最接近的函数</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">我们先来看几个函数调用的场景</font>

```plain
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()

```

- <font style="color:rgb(44, 62, 80);">对于直接调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来说，不管</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">函数被放在了什么地方，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">一定是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`
- <font style="color:rgb(44, 62, 80);">对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj.foo()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来说，我们只需要记住，谁调用了函数，谁就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">，所以在这个场景下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">函数中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象</font>
- <font style="color:rgb(44, 62, 80);">对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方式来说，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被永远绑定在了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">c</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上面，不会被任何方式改变</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">说完了以上几种情况，其实很多代码中的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">应该就没什么问题了，下面让我们看看箭头函数中的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`

```plain
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())

```

- <font style="color:rgb(44, 62, 80);">首先箭头函数其实是没有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的，箭头函数中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">只取决包裹箭头函数的第一个普通函数的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">。在这个例子中，因为包裹箭头函数的第一个普通函数是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(44, 62, 80);">，所以此时的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`<font style="color:rgb(44, 62, 80);">。另外对箭头函数使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(44, 62, 80);">这类函数是无效的。</font>
- <font style="color:rgb(44, 62, 80);">最后种情况也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这些改变上下文的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">API</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">了，对于这些函数来说，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">取决于第一个参数，如果第一个参数为空，那么就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`<font style="color:rgb(44, 62, 80);">。</font>
- <font style="color:rgb(44, 62, 80);">那么说到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(44, 62, 80);">，不知道大家是否考虑过，如果对一个函数进行多次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(44, 62, 80);">，那么上下文会是什么呢？</font>

```plain
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">如果你认为输出结果是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，那么你就错了，其实我们可以把上述代码转换成另一种形式</font>

```plain
// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2()

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">可以从上述代码中发现，不管我们给函数</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">几次，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fn</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">永远由第一次</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">决定，所以结果永远是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`

```plain
let a = { name: 'poetries' }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // => 'poetries'

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以上就是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的规则了，但是可能会发生多个规则同时出现的情况，这时候不同的规则之间会根据优先级最高的来决定</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">最终指向哪里。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">首先，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的方式优先级最高，接下来是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这些函数，然后是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj.foo()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这种调用方式，最后是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这种调用方式，同时，箭头函数的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">一旦被绑定，就不会再被任何方式所改变。</font>

![](/images/posts/1754917946009-f1cb74af-a0c7-48a2-9949-cd851e5342cf.png)

**<font style="color:rgb(238, 63, 77);">函数执行改变this</font>**

- <font style="color:rgb(44, 62, 80);">由于 JS 的设计原理: 在函数中，可以引用运行环境中的变量。因此就需要一个机制来让我们可以在函数体内部获取当前的运行环境，这便是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">因此要明白</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">指向，其实就是要搞清楚 函数的运行环境，说人话就是，谁调用了函数。例如</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj.fn()</font>`<font style="color:rgb(44, 62, 80);">，便是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">调用了函数，既函数中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this === obj</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fn()</font>`<font style="color:rgb(44, 62, 80);">，这里可以看成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window.fn()</font>`<font style="color:rgb(44, 62, 80);">，因此</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this === window</font>`

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">但这种机制并不完全能满足我们的业务需求，因此提供了三种方式可以手动修改</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的指向:</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">call: fn.call(target, 1, 2)</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">apply: fn.apply(target, [1, 2])</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind: fn.bind(target)(1,2)</font>`

<h3 id="_3-apply-call-bind-原理">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_3-apply-call-bind-%E5%8E%9F%E7%90%86)<font style="color:rgb(44, 62, 80);">3 apply/call/bind 原理</font></h3>
![](/images/posts/1754917945984-1c120430-9089-425c-a952-68a2d1bb0a05.png)

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">call、apply</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是挂在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Function</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象上的三个方法，调用这三个方法的必须是一个函数。</font>

```plain
func.call(thisArg, param1, param2, ...)
func.apply(thisArg, [param1,param2,...])
func.bind(thisArg, param1, param2, ...)

```

- <font style="color:rgb(44, 62, 80);">在浏览器里，在全局范围内this 指向window对象；</font>
- <font style="color:rgb(44, 62, 80);">在函数中，this永远指向最后调用他的那个对象；</font>
- <font style="color:rgb(44, 62, 80);">构造函数中，this指向new出来的那个新的对象；</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">call、apply、bind</font>`<font style="color:rgb(44, 62, 80);">中的this被强绑定在指定的那个对象上；</font>
- <font style="color:rgb(44, 62, 80);">箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">apply、call、bind</font>`<font style="color:rgb(44, 62, 80);">都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。</font>

![](/images/posts/1754917946984-eabeec3d-48eb-4303-8f61-4ab6c34e5ac7.png)

```plain
let a = {
    value: 1
}
function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}
getValue.call(a, 'poe', '24')
getValue.apply(a, ['poe', '24'])

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和其他两个方法作用也是一致的，只是该方法会返回一个函数。并且我们可以通过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">bind</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">实现柯里化</font>

**<font style="color:rgb(238, 63, 77);">方法的应用场景</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">下面几种应用场景，你多加体会就可以发现它们的理念都是“借用”方法的思路。我们来看看都有哪些。</font>

1. <font style="color:rgb(44, 62, 80);">判断数据类型</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.prototype.toString</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来判断类型是最合适的，借用它我们几乎可以判断所有类型的数据</font>

```plain
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1');
}

```

1. <font style="color:rgb(44, 62, 80);">类数组借用方法</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">类数组因为不是真正的数组，所有没有数组类型上自带的种种方法，所以我们就可以利用一些方法去借用数组的方法，比如借用数组的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">push</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法，看下面的一段代码。</font>

```plain
var arrayLike = {
  0: 'java',
  1: 'script',
  length: 2
}
Array.prototype.push.call(arrayLike, 'jack', 'lily');
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">call</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的方法来借用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array 原型链上的 push</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法，可以实现一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">类数组的 push</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法，给</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">arrayLike</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">添加新的元素</font>

1. <font style="color:rgb(44, 62, 80);">获取数组的最大 / 最小值</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">我们可以用 apply 来实现数组中判断最大 / 最小值，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">apply</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">直接传递数组作为调用方法的参数，也可以减少一步展开数组，可以直接使用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Math.max、Math.min</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来获取数组的最大值 / 最小值，请看下面这段代码。</font>

```plain
let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr);
const min = Math.min.apply(Math, arr);

console.log(max);  // 16
console.log(min);  // 6

```

**<font style="color:rgb(238, 63, 77);">实现一个 bind 函数</font>**

<font style="color:rgb(44, 62, 80);">对于实现以下几个函数，可以从几个方面思考</font>

- <font style="color:rgb(44, 62, 80);">不传入第一个参数，那么默认为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`
- <font style="color:rgb(44, 62, 80);">改变了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？</font>

```plain
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

```

**<font style="color:rgb(238, 63, 77);">实现一个 call 函数</font>**

```plain
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'pp', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'pp', '24') => a.fn('pp', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}

```

**<font style="color:rgb(238, 63, 77);">实现一个 apply 函数</font>**

```plain
Function.prototype.myApply = function(context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key')
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组

  let result = context[key](...args);
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
}

```

```plain
// 使用
function f(a,b){
 console.log(a,b)
 console.log(this.name)
}
let obj={
 name:'张三'
}
f.myApply(obj,[1,2])  //arguments[1]

```

<h3 id="_4-变量提升">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_4-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87)<font style="color:rgb(44, 62, 80);">4 变量提升</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当执行</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">代码时，会生成执行环境，只要代码不是写在函数中的，就是在全局执行环境中，函数中的代码会产生函数执行环境，只此两种执行环境。</font>

```plain
b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
    console.log('call b')
}

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行环境时，会有两个阶段。第一个阶段是创建的阶段，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用</font>

- <font style="color:rgb(44, 62, 80);">在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升</font>

```plain
b() // call b second

function b() {
    console.log('call b fist')
}
function b() {
    console.log('call b second')
}
var b = 'Hello world'

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">var</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">会产生很多错误，所以在 ES6中引入了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不能在声明前使用，但是这并不是常说的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不会提升，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">提升了，在第一阶段内存也已经为他开辟好了空间，但是因为这个声明的特性导致了并不能在声明前使用</font>

<h3 id="_5-执行上下文">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_5-%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87)<font style="color:rgb(44, 62, 80);">5 执行上下文</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当执行 JS 代码时，会产生三种执行上下文</font>

- <font style="color:rgb(44, 62, 80);">全局执行上下文</font>
- <font style="color:rgb(44, 62, 80);">函数执行上下文</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">eval</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">执行上下文</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">每个执行上下文中都有三个重要的属性</font>

- <font style="color:rgb(44, 62, 80);">变量对象（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">VO</font>`<font style="color:rgb(44, 62, 80);">），包含变量、函数声明和函数的形参，该属性只能在全局上下文中访问</font>
- <font style="color:rgb(44, 62, 80);">作用域链（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">采用词法作用域，也就是说变量的作用域是在定义时就决定了）</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`

```plain
var a = 10
function foo(i) {
  var b = 20
}
foo()

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于上述代码，执行栈中有两个上下文：全局上下文和函数 foo 上下文。</font>

```plain
stack = [
    globalContext,
    fooContext
]

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于全局上下文来说，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">VO</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">大概是这样的</font>

```plain
globalContext.VO === globe
globalContext.VO = {
    a: undefined,
	foo: <Function>,
}

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于函数</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来说，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">VO</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不能访问，只能访问到活动对象（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">AO</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">）</font>

```plain
fooContext.VO === foo.AO
fooContext.AO {
    i: undefined,
	b: undefined,
    arguments: <>
}
// arguments 是函数独有的对象(箭头函数没有)
// 该对象是一个伪数组，有 `length` 属性且可以通过下标访问元素
// 该对象中的 `callee` 属性代表函数本身
// `caller` 属性代表函数的调用者

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于作用域链，可以把它理解成包含自身变量对象和上级变量对象的列表，通过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scope]]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属性查找上级变量</font>

```plain
fooContext.[[Scope]] = [
    globalContext.VO
]
fooContext.Scope = fooContext.[[Scope]] + fooContext.VO
fooContext.Scope = [
    fooContext.VO,
    globalContext.VO
]

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">接下来让我们看一个老生常谈的例子，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">var</font>`

```plain
b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
	console.log('call b')
}

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">VO</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">），</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。</font>

- <font style="color:rgb(44, 62, 80);">在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升</font>

```plain
b() // call b second

function b() {
	console.log('call b fist')
}
function b() {
	console.log('call b second')
}
var b = 'Hello world'
```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">var</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">会产生很多错误，所以在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中引入了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不能在声明前使用，但是这并不是常说的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不会提升，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">提升了声明但没有赋值，因为临时死区导致了并不能在声明前使用。</font>

- <font style="color:rgb(44, 62, 80);">对于非匿名的立即执行函数需要注意以下一点</font>

```plain
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">因为当</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">foo</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。</font>

```plain
specialObject = {};

Scope = specialObject + Scope;

foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}

delete Scope[0]; // remove specialObject from the front of scope chain

```

**<font style="color:rgb(238, 63, 77);">总结</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">执行上下文可以简单理解为一个对象:</font>

**<font style="color:rgb(238, 63, 77);">它包含三个部分:</font>**

- <font style="color:rgb(44, 62, 80);">变量对象(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">VO</font>`<font style="color:rgb(44, 62, 80);">)</font>
- <font style="color:rgb(44, 62, 80);">作用域链(词法作用域)</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">指向</font>

**<font style="color:rgb(238, 63, 77);">它的类型:</font>**

- <font style="color:rgb(44, 62, 80);">全局执行上下文</font>
- <font style="color:rgb(44, 62, 80);">函数执行上下文</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">eval</font>`<font style="color:rgb(44, 62, 80);">执行上下文</font>

**<font style="color:rgb(238, 63, 77);">代码执行过程:</font>**

- <font style="color:rgb(44, 62, 80);">创建 全局上下文 (</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">global EC</font>`<font style="color:rgb(44, 62, 80);">)</font>
- <font style="color:rgb(44, 62, 80);">全局执行上下文 (</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">caller</font>`<font style="color:rgb(44, 62, 80);">) 逐行 自上而下 执行。遇到函数时，函数执行上下文 (</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">callee</font>`<font style="color:rgb(44, 62, 80);">) 被</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">push</font>`<font style="color:rgb(44, 62, 80);">到执行栈顶层</font>
- <font style="color:rgb(44, 62, 80);">函数执行上下文被激活，成为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">active EC</font>`<font style="color:rgb(44, 62, 80);">, 开始执行函数中的代码，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">caller</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被挂起</font>
- <font style="color:rgb(44, 62, 80);">函数执行完后，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">callee</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pop</font>`<font style="color:rgb(44, 62, 80);">移除出执行栈，控制权交还全局上下文 (</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">caller</font>`<font style="color:rgb(44, 62, 80);">)，继续执行</font>

<h3 id="_6-作用域">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_6-%E4%BD%9C%E7%94%A8%E5%9F%9F)<font style="color:rgb(44, 62, 80);">6 作用域</font></h3>
+ <font style="color:rgb(44, 62, 80);">作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找</font>
+ <font style="color:rgb(44, 62, 80);">作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和 函数。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前 端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。</font>

- <font style="color:rgb(44, 62, 80);">当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找</font>
- <font style="color:rgb(44, 62, 80);">作用域链的创建过程跟执行上下文的建立有关....</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">作用域可以理解为变量的可访问性，总共分为三种类型，分别为：</font>

- <font style="color:rgb(44, 62, 80);">全局作用域</font>
- <font style="color:rgb(44, 62, 80);">函数作用域</font>
- <font style="color:rgb(44, 62, 80);">块级作用域，ES6 中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">const</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">就可以产生该作用域</font>

<font style="color:rgb(44, 62, 80);">其实看完前面的闭包、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这部分内部的话，应该基本能了解作用域的一些应用。</font>

<font style="color:rgb(44, 62, 80);">一旦我们将这些作用域嵌套起来，就变成了另外一个重要的知识点「作用域链」，也就是 JS 到底是如何访问需要的变量或者函数的。</font>

- <font style="color:rgb(44, 62, 80);">首先作用域链是在定义时就被确定下来的，和箭头函数里的 this 一样，后续不会改变，JS 会一层层往上寻找需要的内容。</font>
- <font style="color:rgb(44, 62, 80);">其实作用域链这个东西我们在闭包小结中已经看到过它的实体了：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scopes]]</font>`

![](/images/posts/1754917947482-f487327c-4a41-4d77-bb96-c9ebbe7dd27d.png)

<font style="color:rgb(44, 62, 80);">图中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scopes]]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是个数组，作用域的一层层往上寻找就等同于遍历</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scopes]]</font>`<font style="color:rgb(44, 62, 80);">。</font>

**<font style="color:rgb(238, 63, 77);">1. 全局作用域</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">全局变量是挂载在 window 对象下的变量，所以在网页中的任何位置你都可以使用并且访问到这个全局变量</font>

```plain
var globalName = 'global';
function getName() {
  console.log(globalName) // global
  var name = 'inner'
  console.log(name) // inner
}
getName();
console.log(name); //
console.log(globalName); //global
function setName(){
  vName = 'setName';
}
setName();
console.log(vName); // setName

```

- <font style="color:rgb(44, 62, 80);">从这段代码中我们可以看到，globalName 这个变量无论在什么地方都是可以被访问到的，所以它就是全局变量。而在 getName 函数中作为局部变量的 name 变量是不具备这种能力的</font>
- <font style="color:rgb(44, 62, 80);">当然全局作用域有相应的缺点，我们定义很多全局变量的时候，会容易引起变量命名的冲突，所以在定义变量的时候应该注意作用域的问题。</font>

**<font style="color:rgb(238, 63, 77);">2. 函数作用域</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数中定义的变量叫作函数变量，这个时候只能在函数内部才能访问到它，所以它的作用域也就是函数的内部，称为函数作用域</font>

```plain
function getName () {
  var name = 'inner';
  console.log(name); //inner
}
getName();
console.log(name);

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">除了这个函数内部，其他地方都是不能访问到它的。同时，当这个函数被执行完之后，这个局部变量也相应会被销毁。所以你会看到在 getName 函数外面的 name 是访问不到的</font>

**<font style="color:rgb(238, 63, 77);">3. 块级作用域</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">ES6 中新增了块级作用域，最直接的表现就是新增的 let 关键词，使用 let 关键词定义的变量只能在块级作用域中被访问，有“暂时性死区”的特点，也就是说这个变量在定义之前是不能被使用的。</font>

<font style="color:rgb(44, 62, 80);">在 JS 编码过程中</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">if 语句</font>`<font style="color:rgb(44, 62, 80);">及</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">for</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">语句后面</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">{...}</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这里面所包括的，就是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">块级作用域</font>`

```plain
console.log(a) //a is not defined
if(true){
  let a = '123'；
  console.log(a)； // 123
}
console.log(a) //a is not defined

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">从这段代码可以看出，变量 a 是在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">if 语句{...}</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中由</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let 关键词</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">进行定义的变量，所以它的作用域是 if 语句括号中的那部分，而在外面进行访问 a 变量是会报错的，因为这里不是它的作用域。所以在 if 代码块的前后输出 a 这个变量的结果，控制台会显示 a 并没有定义</font>

<h3 id="_7-闭包">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_7-%E9%97%AD%E5%8C%85)<font style="color:rgb(44, 62, 80);">7 闭包</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">闭包其实就是一个可以访问其他函数内部变量的函数。创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以 访问到当前函数的局部变量。</font>

![](/images/posts/1754917947397-b1eeeea4-4bc8-4b20-9b34-b95057487957.png)

<font style="color:rgb(44, 62, 80);">因为通常情况下，函数内部变量是无法在外部访问的（即全局变量和局部变量的区别），因此使用闭包的作用，就具备实现了能在外部访问某个函数内部变量的功能，让这些内部变量的值始终可以保存在内存中。下面我们通过代码先来看一个简单的例子</font>

```plain
function fun1() {
	var a = 1;
	return function(){
		console.log(a);
	};
}
fun1();
var result = fun1();
result();  // 1

// 结合闭包的概念，我们把这段代码放到控制台执行一下，就可以发现最后输出的结果是 1（即 a 变量的值）。那么可以很清楚地发现，a 变量作为一个 fun1 函数的内部变量，正常情况下作为函数内的局部变量，是无法被外部访问到的。但是通过闭包，我们最后还是可以拿到 a 变量的值

```

**<font style="color:rgb(238, 63, 77);">闭包有两个常用的用途</font>**

- <font style="color:rgb(44, 62, 80);">闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。</font>
- <font style="color:rgb(44, 62, 80);">函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。</font>

```plain
let a = 1
// fn 是闭包
function fn() {
  console.log(a);
}

function fn1() {
  let a = 1
  // 这里也是闭包
  return () => {
    console.log(a);
  }
}
const fn2 = fn1()
fn2()

```

- <font style="color:rgb(44, 62, 80);">大家都知道闭包其中一个作用是访问私有变量，就比如上述代码中的 fn2 访问到了 fn1 函数中的变量 a。但是此时 fn1 早已销毁，我们是如何访问到变量 a 的呢？不是都说原始类型是存放在栈上的么，为什么此时却没有被销毁掉？</font>
- <font style="color:rgb(44, 62, 80);">接下来笔者会根据浏览器的表现来重新理解关于原始类型存放位置的说法。</font>
- <font style="color:rgb(44, 62, 80);">先来说下数据存放的正确规则是：局部、占用空间确定的数据，一般会存放在栈中，否则就在堆中（也有例外）。 那么接下来我们可以通过 Chrome 来帮助我们验证这个说法说法。</font>

![](/images/posts/1754917947634-cbfb84a8-cbf6-4080-b4f0-92b65b77c691.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">上图中画红框的位置我们能看到一个内部的对象</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scopes]]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，其中存放着变量 a，该对象是被存放在堆上的，其中包含了闭包、全局对象等等内容，因此我们能通过闭包访问到本该销毁的变量。</font>

<font style="color:rgb(44, 62, 80);">另外最开始我们对于闭包的定位是：假如一个函数能访问外部的变量，那么这个函数它就是一个闭包，因此接下来我们看看在全局下的表现是怎么样的。</font>

```plain
let a = 1
var b = 2
// fn 是闭包
function fn() {
  console.log(a, b);
}

```

![](/images/posts/1754917947210-61467e77-5dd2-4441-a0c5-efeb17e762bf.png)

<font style="color:rgb(44, 62, 80);">从上图我们能发现全局下声明的变量，如果是 var 的话就直接被挂到 globe 上，如果是其他关键字声明的话就被挂到 Script 上。虽然这些内容同样还是存在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[Scopes]]</font>`<font style="color:rgb(44, 62, 80);">，但是全局变量应该是存放在静态区域的，因为全局变量无需进行垃圾回收，等需要回收的时候整个应用都没了。</font>

<font style="color:rgb(44, 62, 80);">只有在下图的场景中，原始类型才可能是被存储在栈上。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这里为什么要说可能，是因为 JS 是门动态类型语言，一个变量声明时可以是原始类型，马上又可以赋值为对象类型，然后又回到原始类型。这样频繁的在堆栈上切换存储位置，内部引擎是不是也会有什么优化手段，或者干脆全部都丢堆上？只有 const 声明的原始类型才一定存在栈上？当然这只是笔者的一个推测，暂时没有深究，读者可以忽略这段瞎想</font>

![](/images/posts/1754917949308-0fe2d468-b5ec-4259-9189-585f60fa2bf7.png)

<font style="color:rgb(44, 62, 80);">因此笔者对于原始类型存储位置的理解为：局部变量才是被存储在栈上，全局变量存在静态区域上，其它都存储在堆上。</font>

<font style="color:rgb(44, 62, 80);">当然这个理解是建立的 Chrome 的表现之上的，在不同的浏览器上因为引擎的不同，可能存储的方式还是有所变化的。</font>

**<font style="color:rgb(238, 63, 77);">闭包产生的原因</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">我们在前面介绍了作用域的概念，那么你还需要明白作用域链的基本概念。其实很简单，当访问一个变量时，代码解释器会首先在当前的作用域查找，如果没找到，就去父级作用域去查找，直到找到该变量或者不存在父级作用域中，这样的链路就是作用域链</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。那么我们还是通过下面的代码来详细说明一下作用域链</font>

```plain
var a = 1;
function fun1() {
  var a = 2
  function fun2() {
    var a = 3;
    console.log(a);//3
  }
}

```

- <font style="color:rgb(44, 62, 80);">从中可以看出，fun1 函数的作用域指向全局作用域（window）和它自己本身；fun2 函数的作用域指向全局作用域 （window）、fun1 和它本身；而作用域是从最底层向上找，直到找到全局作用域 window 为止，如果全局还没有的话就会报错。</font>
- <font style="color:rgb(44, 62, 80);">那么这就很形象地说明了什么是作用域链，即当前函数一般都会存在上层函数的作用域的引用，那么他们就形成了一条作用域链。</font>
- <font style="color:rgb(44, 62, 80);">由此可见，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">闭包产生的本质就是：当前环境中存在指向父级作用域的引用</font>`<font style="color:rgb(44, 62, 80);">。那么还是拿上的代码举例。</font>

```plain
function fun1() {
  var a = 2
  function fun2() {
    console.log(a);  //2
  }
  return fun2;
}
var result = fun1();
result();

```

- <font style="color:rgb(44, 62, 80);">从上面这段代码可以看出，这里 result 会拿到父级作用域中的变量，输出 2。因为在当前环境中，含有对 fun2 函数的引用，fun2 函数恰恰引用了 window、fun1 和 fun2 的作用域。因此 fun2 函数是可以访问到 fun1 函数的作用域的变量。</font>
- <font style="color:rgb(44, 62, 80);">那是不是只有返回函数才算是产生了闭包呢？其实也不是，回到闭包的本质，我们只需要让父级作用域的引用存在即可，因此还可以这么改代码，如下所示</font>

```plain
var fun3;
function fun1() {
  var a = 2
  fun3 = function() {
    console.log(a);
  }
}
fun1();
fun3();

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">可以看出，其中实现的结果和前一段代码的效果其实是一样的，就是在给 fun3 函数赋值后，fun3 函数就拥有了 window、fun1 和 fun3 本身这几个作用域的访问权限；然后还是从下往上查找，直到找到 fun1 的作用域中存在 a 这个变量；因此输出的结果还是 2，最后产生了闭包，形式变了，本质没有改变。</font>

<font style="color:rgb(44, 62, 80);">因此最后</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">返回的不管是不是函数，也都不能说明没有产生闭包</font>`

**<font style="color:rgb(238, 63, 77);">闭包的表现形式</font>**

1. <font style="color:rgb(44, 62, 80);">返回一个函数</font>
2. `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">在定时器、事件监听、Ajax 请求、Web Workers 或者任何异步中，只要使用了回调函数，实际上就是在使用闭包</font>`<font style="color:rgb(44, 62, 80);">。请看下面这段代码，这些都是平常开发中用到的形式</font>

```plain
// 定时器
setTimeout(function handler(){
  console.log('1');
}，1000);
// 事件监听
$(' app').click(function(){
  console.log('Event Listener');
});

```

1. <font style="color:rgb(44, 62, 80);">作为函数参数传递的形式，比如下面的例子。</font>

```plain
var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这就是闭包
  fn();
}
foo();  // 输出2，而不是1

```

1. `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">IIFE（立即执行函数），创建了闭包，保存了全局作用域（window）和当前函数的作用域</font>`<font style="color:rgb(44, 62, 80);">，因此可以输出全局的变量，如下所示</font>

```plain
var a = 2;
(function IIFE(){
  console.log(a);  // 输出2
})();

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">IIFE 这个函数会稍微有些特殊，算是一种自执行匿名函数，这个匿名函数拥有独立的作用域。这不仅可以避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域，我们经常能在高级的 JavaScript 编程中看见此类函数。</font>

**<font style="color:rgb(238, 63, 77);">如何解决循环输出问题？</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在互联网大厂的面试中，解决循环输出问题是比较高频的面试题，一般都会给一段这样的代码让你来解释</font>

```plain
for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}

```

<font style="color:rgb(44, 62, 80);">上面这段代码执行之后，从控制台执行的结果可以看出来，结果输出的是 5 个 6，那么一般面试官都会先问为什么都是 6？我想让你实现输出 1、2、3、4、5 的话怎么办呢？</font>

<font style="color:rgb(44, 62, 80);">因此结合本讲所学的知识我们来思考一下，应该怎么给面试官一个满意的解释。你可以围绕这两点来回答。</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为宏任务，由于 JS 中单线程</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">eventLoop 机制</font>`<font style="color:rgb(44, 62, 80);">，在主线程同步任务执行完后才去执行宏任务，因此</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">循环结束后 setTimeout 中的回调才依次执行</font>`
- <font style="color:rgb(44, 62, 80);">因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">函数也是一种闭包，往上找它的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">父级作用域链就是 window</font>`<font style="color:rgb(44, 62, 80);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">变量 i 为 window 上的全局变量</font>`<font style="color:rgb(44, 62, 80);">，开始执行 setTimeout 之前变量 i 已经就是 6 了，因此最后输出的连续就都是 6。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">那么我们再来看看如何按顺序依次输出 1、2、3、4、5 呢？</font>

1. <font style="color:rgb(44, 62, 80);">利用 IIFE</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">可以利用 IIFE（立即执行函数），当每次 for 循环时，把此时的变量 i 传递到定时器中，然后执行，改造之后的代码如下。</font>

```plain
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
}

```

1. <font style="color:rgb(44, 62, 80);">使用 ES6 中的 let</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">ES6 中新增的 let 定义变量的方式，使得 ES6 之后 JS 发生革命性的变化，让 JS 有了块级作用域，代码的作用域以块级为单位进行执行。通过改造后的代码，可以实现上面想要的结果。</font>

```plain
for(let i = 1; i <= 5; i++){
  setTimeout(function() {
    console.log(i);
  },0)
}

```

1. <font style="color:rgb(44, 62, 80);">定时器传入第三个参数</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">setTimeout 作为经常使用的定时器，它是存在第三个参数的，日常工作中我们经常使用的一般是前两个，一个是回调函数，另外一个是时间，而第三个参数用得比较少。那么结合第三个参数，调整完之后的代码如下。</font>

```plain
for(var i=1;i<=5;i++){
  setTimeout(function(j) {
    console.log(j)
  }, 0, i)
}

```

<font style="color:rgb(44, 62, 80);">从中可以看到，第三个参数的传递，可以改变 setTimeout 的执行逻辑，从而实现我们想要的结果，这也是一种解决循环输出问题的途径</font>

**<font style="color:rgb(238, 63, 77);">常见考点</font>**

- <font style="color:rgb(44, 62, 80);">闭包能考的很多，概念和笔试题都会考。</font>
- <font style="color:rgb(44, 62, 80);">概念题就是考考闭包是什么了。</font>
- <font style="color:rgb(44, 62, 80);">笔试题的话基本都会结合上异步，比如最常见的：</font>

```plain
for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

```

<font style="color:rgb(44, 62, 80);">这道题会问输出什么，有哪几种方式可以得到想要的答案？</font>

<h3 id="_8-new的原理">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_8-new%E7%9A%84%E5%8E%9F%E7%90%86)<font style="color:rgb(44, 62, 80);">8 New的原理</font></h3>
**<font style="color:rgb(238, 63, 77);">常见考点</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">做了那些事？</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">返回不同的类型时会有什么表现？</font>
- <font style="color:rgb(44, 62, 80);">手写 new 的实现过程</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">new 关键词的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">主要作用就是执行一个构造函数、返回一个实例对象</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，在 new 的过程中，根据构造函数的情况，来确定是否可以接受参数的传递。下面我们通过一段代码来看一个简单的 new 的例子</font>

```plain
function Person(){
   this.name = 'Jack';
}
var p = new Person();
console.log(p.name)  // Jack

```

<font style="color:rgb(44, 62, 80);">这段代码比较容易理解，从输出结果可以看出，p 是一个通过 person 这个构造函数生成的一个实例对象，这个应该很容易理解。</font>

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">操作符可以帮助我们构建出一个实例，并且绑定上 this，内部执行步骤可大概分为以下几步：</font>

1. <font style="color:rgb(44, 62, 80);">创建一个新对象</font>
2. <font style="color:rgb(44, 62, 80);">对象连接到构造函数原型上，并绑定</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">（this 指向新对象）</font>
3. <font style="color:rgb(44, 62, 80);">执行构造函数代码（为这个新对象添加属性）</font>
4. <font style="color:rgb(44, 62, 80);">返回新对象</font>

<font style="color:rgb(44, 62, 80);">在第四步返回新对象这边有一个情况会例外：</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">那么问题来了，如果不用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这个关键词，结合上面的代码改造一下，去掉</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，会发生什么样的变化呢？我们再来看下面这段代码</font>

```plain
function Person(){
  this.name = 'Jack';
}
var p = Person();
console.log(p) // undefined
console.log(name) // Jack
console.log(p.name) // 'name' of undefined

```

- <font style="color:rgb(44, 62, 80);">从上面的代码中可以看到，我们没有使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这个关键词，返回的结果就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">。其中由于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JavaScript</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代码在默认情况下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的指向是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">window</font>`<font style="color:rgb(44, 62, 80);">，那么</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">name</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的输出结果就为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Jack</font>`<font style="color:rgb(44, 62, 80);">，这是一种不存在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键词的情况。</font>
- <font style="color:rgb(44, 62, 80);">那么当构造函数中有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">return</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">一个对象的操作，结果又会是什么样子呢？我们再来看一段在上面的基础上改造过的代码。</font>

```plain
function Person(){
   this.name = 'Jack';
   return {age: 18}
}
var p = new Person();
console.log(p)  // {age: 18}
console.log(p.name) // undefined
console.log(p.age) // 18

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">通过这段代码又可以看出，当构造函数最后</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">return</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">出来的是一个和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">无关的对象时，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new 命令会直接返回这个新对象</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">而不是通过 new 执行步骤生成的 this 对象</font>`

<font style="color:rgb(44, 62, 80);">但是这里要求构造函数必须是返回一个对象，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">如果返回的不是对象，那么还是会按照 new 的实现步骤，返回新生成的对象</font>`<font style="color:rgb(44, 62, 80);">。接下来还是在上面这段代码的基础之上稍微改动一下</font>

```plain
function Person(){
   this.name = 'Jack';
   return 'tom';
}
var p = new Person();
console.log(p)  // {name: 'Jack'}
console.log(p.name) // Jack

```

<font style="color:rgb(44, 62, 80);">可以看出，当构造函数中</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">return</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的不是一个对象时，那么它还是会根据</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键词的执行逻辑，生成一个新的对象（绑定了最新</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);">），最后返回出来</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">因此我们总结一下：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象</font>`

![](/images/posts/1754917951100-898f7dd7-f775-484f-a0f0-fbe83557ea02.png)

**<font style="color:rgb(238, 63, 77);">手工实现New的过程</font>**

```plain
function create(fn, ...args) {
  if(typeof fn !== 'function') {
    throw 'fn must be a function';
  }
	// 1、用new Object() 的方式新建了一个对象obj
  // var obj = new Object()
	// 2、给该对象的__proto__赋值为fn.prototype，即设置原型链
  // obj.__proto__ = fn.prototype

  // 1、2步骤合并
  // 创建一个空对象，且这个空对象继承构造函数的 prototype 属性
  // 即实现 obj.__proto__ === constructor.prototype
  var obj = Object.create(fn.prototype);

	// 3、执行fn，并将obj作为内部this。使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  var res = fn.apply(obj, args);
	// 4、如果fn有返回值，则将其作为new操作返回内容，否则返回obj
	return res instanceof Object ? res : obj;
};

```

- <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.create</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">将</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj 的</font>`<font style="color:rgb(44, 62, 80);">proto</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">指向为构造函数的原型</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">apply</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，将构造函数内的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">this</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">指向为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">create</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">返回时，使用三目运算符决定返回结果。</font>

<font style="color:rgb(44, 62, 80);">我们知道，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">构造函数如果有显式返回值，且返回值为对象类型，那么构造函数返回结果不再是目标实例</font>`

<font style="color:rgb(44, 62, 80);">如下代码：</font>

```plain
function Person(name) {
  this.name = name
  return {1: 1}
}
const person = new Person(Person, 'lucas')
console.log(person)
// {1: 1}

```

<font style="color:rgb(44, 62, 80);">测试</font>

```plain
//使用create代替new
function Person() {...}
// 使用内置函数new
var person = new Person(1,2)

// 使用手写的new，即create
var person = create(Person, 1,2)

```

**<font style="color:rgb(238, 63, 77);">new 被调用后大致做了哪几件事情</font>**

- <font style="color:rgb(44, 62, 80);">让实例可以访问到私有属性；</font>
- <font style="color:rgb(44, 62, 80);">让实例可以访问构造函数原型（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">constructor.prototype</font>`<font style="color:rgb(44, 62, 80);">）所在原型链上的属性；</font>
- <font style="color:rgb(44, 62, 80);">构造函数返回的最后结果是引用数据类型。</font>

<h3 id="_9-原型-原型链">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_9-%E5%8E%9F%E5%9E%8B-%E5%8E%9F%E5%9E%8B%E9%93%BE)<font style="color:rgb(44, 62, 80);">9 原型/原型链</font></h3>
`**<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>**`**<font style="color:rgb(238, 63, 77);">和prototype关系</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">constructor</font>`<font style="color:rgb(44, 62, 80);">是</font>**<font style="color:rgb(238, 63, 77);">对象</font>**<font style="color:rgb(44, 62, 80);">独有的。</font><font style="color:rgb(44, 62, 80);">2️⃣</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">prototype</font>`<font style="color:rgb(44, 62, 80);">属性是</font>**<font style="color:rgb(238, 63, 77);">函数</font>**<font style="color:rgb(44, 62, 80);">独有的</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 proto 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.getPrototypeOf()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法，我们可以通过这个方法来获取对象的原型。</font>

<font style="color:rgb(44, 62, 80);">当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.prototype</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">所以这就是我们新建的对象为什么能够使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等方法的原因。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">特点：JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与 之相关的对象也会继承这一改变</font>

- <font style="color:rgb(44, 62, 80);">原型(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">prototype</font>`<font style="color:rgb(44, 62, 80);">): 一个简单的对象，用于实现对象的 属性继承。可以简单的理解成对象的爹。在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Firefox</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Chrome</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">中，每个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JavaScript</font>`<font style="color:rgb(44, 62, 80);">对象中都包含一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);">(非标准)的属性指向它爹(该对象的原型)，可</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">obj.__proto__</font>`<font style="color:rgb(44, 62, 80);">进行访问。</font>
- <font style="color:rgb(44, 62, 80);">构造函数: 可以通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);">来 新建一个对象 的函数。</font>
- <font style="color:rgb(44, 62, 80);">实例: 通过构造函数和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new</font>`<font style="color:rgb(44, 62, 80);">创建出来的对象，便是实例。 实例通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);">指向原型，通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">constructor</font>`<font style="color:rgb(44, 62, 80);">指向构造函数。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">为例，我们常用的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">便是一个构造函数，因此我们可以通过它构建实例。</font>

```plain
// 实例
const instance = new Object()

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">则此时， 实例为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">instance</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">, 构造函数为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，我们知道，构造函数拥有一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">prototype</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的属性指向原型，因此原型为:</font>

```plain
// 原型
const prototype = Object.prototype

```

**<font style="color:rgb(238, 63, 77);">这里我们可以来看出三者的关系:</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">实例.__proto__ === 原型</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">原型.constructor === 构造函数</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">构造函数.prototype === 原型</font>`

```plain
// 这条线其实是是基于原型进行获取的，可以理解成一条基于原型的映射线
// 例如:
// const o = new Object()
// o.constructor === Object   --> true
// o.__proto__ = null;
// o.constructor === Object   --> false
实例.constructor === 构造函数

```

![](/images/posts/1754917951041-bbc11b3c-6344-444c-9e08-e41e230c8c4d.png)

**<font style="color:rgb(238, 63, 77);">原型链</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">原型链是由原型对象组成，每个对象都有</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属性，指向了创建该对象的构造函数的原型，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">将对象连接起来组成了原型链。是一个用来实现继承和共享属性的有限的对象链</font>

- <font style="color:rgb(44, 62, 80);">属性查找机制: 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.prototype</font>`<font style="color:rgb(44, 62, 80);">，如还是没找到，则输出</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">undefined</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">属性修改机制: 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用:</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">b.prototype.x = 2</font>`<font style="color:rgb(44, 62, 80);">；但是这样会造成所有继承于该对象的实例的属性发生改变。</font>

**<font style="color:rgb(238, 63, 77);">js 获取原型的方法</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">p.proto</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">p.constructor.prototype</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.getPrototypeOf(p)</font>`

**<font style="color:rgb(238, 63, 77);">总结</font>**

![](/images/posts/1754917953863-b5124e86-054d-4f7c-a6ec-d72e05780002.png)

- <font style="color:rgb(44, 62, 80);">每个函数都有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">prototype</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">属性，除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Function.prototype.bind()</font>`<font style="color:rgb(44, 62, 80);">，该属性指向原型。</font>
- <font style="color:rgb(44, 62, 80);">每个对象都有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">属性，指向了创建该对象的构造函数的原型。其实这个属性指向了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[prototype]]</font>`<font style="color:rgb(44, 62, 80);">，但是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[[prototype]]</font>`<font style="color:rgb(44, 62, 80);">是内部属性，我们并不能访问到，所以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">_proto_</font>`<font style="color:rgb(44, 62, 80);">来访问。</font>
- <font style="color:rgb(44, 62, 80);">对象可以通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来寻找不属于该对象的属性，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">__proto__</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">将对象连接起来组成了原型链。</font>

<h3 id="_10-继承">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_10-%E7%BB%A7%E6%89%BF)<font style="color:rgb(44, 62, 80);">10 继承</font></h3>
![](/images/posts/1754917953940-7d1de312-33e2-42fa-88db-7da74676a477.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">涉及面试题：原型如何实现继承？</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Class</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">如何实现继承？</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Class</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">本质是什么？</font>

<font style="color:rgb(44, 62, 80);">首先先来讲下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">class</font>`<font style="color:rgb(44, 62, 80);">，其实在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(44, 62, 80);">中并不存在类，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">class</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">只是语法糖，本质还是函数</font>

```plain
class Person {}
Person instanceof Function // true

```

**<font style="color:rgb(238, 63, 77);">组合继承</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">组合继承是最常用的继承方式</font>

```plain
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this, value)
}
Child.prototype = new Parent()

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

```

- <font style="color:rgb(44, 62, 80);">以上继承的方式核心是在子类的构造函数中通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Parent.call(this)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">继承父类的属性，然后改变子类的原型为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new Parent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来继承父类的函数。</font>
- <font style="color:rgb(44, 62, 80);">这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费</font>

**<font style="color:rgb(238, 63, 77);">寄生组合继承</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行了</font>

```plain
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以上继承实现的核心就是将父类的原型赋值给了子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。</font>

**<font style="color:rgb(238, 63, 77);">Class 继承</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以上两种继承方式都是通过原型去解决的，在 ES6 中，我们可以使用 class 去实现继承，并且实现起来很简单</font>

```plain
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
    this.val = value
  }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">class</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">实现继承的核心在于使用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">extends</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">表明继承自哪个父类，并且在子类构造函数中必须调用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">super</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，因为这段代码可以看成</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Parent.call(this, value)</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>

**<font style="color:rgb(238, 63, 77);">ES5 和 ES6 继承的区别：</font>**

- <font style="color:rgb(44, 62, 80);">ES6 继承的子类需要调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">super()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">才能拿到子类，ES5 的话是通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">apply</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这种绑定的方式</font>
- <font style="color:rgb(44, 62, 80);">类声明不会提升，和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">let</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这些一致</font>

```plain
function Super() {}
Super.prototype.getNumber = function() {
  return 1
}

function Sub() {}
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})
let s = new Sub()
s.getNumber()

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以下详细讲解几种常见的继承方式</font>

**<font style="color:rgb(238, 63, 77);">1. 方式1: 借助call</font>**

```plain
function Parent1(){
    this.name = 'parent1';
  }
  function Child1(){
    Parent1.call(this);
    this.type = 'child1'
  }
  console.log(new Child1);

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。那么引出下面的方法。</font>

**<font style="color:rgb(238, 63, 77);">2. 方式2: 借助原型链</font>**

```plain
function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = 'child2';
  }
  Child2.prototype = new Parent2();

  console.log(new Child2());

```

<font style="color:rgb(44, 62, 80);">看似没有问题，父类的方法和属性都能够访问，但实际上有一个潜在的不足。举个例子：</font>

```plain
var s1 = new Child2();
var s2 = new Child2();
s1.play.push(4);
console.log(s1.play, s2.play);

```

<font style="color:rgb(44, 62, 80);">可以看到控制台：</font>

![](/images/posts/1754917953758-9f375f5b-88e3-4bf8-af7b-74024fed6497.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，因为两个实例使用的是同一个原型对象。</font>

<font style="color:rgb(44, 62, 80);">那么还有更好的方式么？</font>

**<font style="color:rgb(238, 63, 77);">3. 方式3：将前两种组合</font>**

```plain
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
  }
  function Child3() {
    Parent3.call(this);
    this.type = 'child3';
  }
  Child3.prototype = new Parent3();
  var s3 = new Child3();
  var s4 = new Child3();
  s3.play.push(4);
  console.log(s3.play, s4.play);

```

<font style="color:rgb(44, 62, 80);">可以看到控制台：</font>

![](/images/posts/1754917955409-18add232-eb2b-4751-8a76-825e51a0463e.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">之前的问题都得以解决。但是这里又徒增了一个新问题，那就是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Parent3</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的构造函数会多执行了一次（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Child3.prototype = new Parent3();</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">）。这是我们不愿看到的。那么如何解决这个问题？</font>

**<font style="color:rgb(238, 63, 77);">4. 方式4: 组合继承的优化1</font>**

```plain
function Parent4 () {
    this.name = 'parent4';
    this.play = [1, 2, 3];
  }
  function Child4() {
    Parent4.call(this);
    this.type = 'child4';
  }
  Child4.prototype = Parent4.prototype;

```

<font style="color:rgb(44, 62, 80);">这里让将父类原型对象直接给到子类，父类构造函数只执行一次，而且父类属性和方法均能访问，但是我们来测试一下：</font>

```plain
var s3 = new Child4();
var s4 = new Child4();
console.log(s3)

```

![](/images/posts/1754917956200-07574b5b-659b-4442-a624-fb04450d141c.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">子类实例的构造函数是Parent4，显然这是不对的，应该是Child4。</font>

**<font style="color:rgb(238, 63, 77);">5. 方式5(最推荐使用): 组合继承的优化2</font>**

```plain
function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
  }
  function Child5() {
    Parent5.call(this);
    this.type = 'child5';
  }
  Child5.prototype = Object.create(Parent5.prototype);
  Child5.prototype.constructor = Child5;

```

<font style="color:rgb(44, 62, 80);">这是最推荐的一种方式，接近完美的继承，它的名字也叫做寄生组合继承。</font>

**<font style="color:rgb(238, 63, 77);">6. ES6的extends被编译后的JavaScript代码</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">ES6的代码最后都是要在浏览器上能够跑起来的，这中间就利用了babel这个编译工具，将ES6的代码编译成ES5让一些不支持新语法的浏览器也能运行。</font>

<font style="color:rgb(44, 62, 80);">那最后编译成了什么样子呢？</font>

```plain
function _possibleConstructorReturn(self, call) {
    // ...
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
    // ...
    //看到没有
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Parent = function Parent() {
    // 验证是否是 Parent 构造出来的 this
    _classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
}(Parent));

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">核心是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">_inherits</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数，可以看到它采用的依然也是第五种方式————寄生组合继承方式，同时证明了这种方式的成功。不过这里加了一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.setPrototypeOf(subClass, superClass)</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，这是用来干啥的呢？</font>

<font style="color:rgb(44, 62, 80);">答案是用来继承父类的静态方法。这也是原来的继承方式疏忽掉的地方。</font>

**<font style="color:rgb(238, 63, 77);">追问: 面向对象的设计一定是好的设计吗？</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不一定。从继承的角度说，这一设计是存在巨大隐患的。</font>

- <font style="color:rgb(44, 62, 80);">会生成</font>
- **<font style="color:rgb(238, 63, 77);">ES6 Module</font>**<font style="color:rgb(44, 62, 80);">：模块输出的是一个值的引用，编译时输出接口，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(44, 62, 80);">模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。</font>

**<font style="color:rgb(238, 63, 77);">谈谈对模块化开发的理解</font>**

- <font style="color:rgb(44, 62, 80);">我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。</font>
- <font style="color:rgb(44, 62, 80);">由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。</font>
- <font style="color:rgb(44, 62, 80);">后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所有的所有的模块成员，外部代码可以修改内部属性的值。</font>
- <font style="color:rgb(44, 62, 80);">现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。</font>

<font style="color:rgb(44, 62, 80);"></font>

<h3 id="_11-面向对象"><font style="color:rgb(44, 62, 80);"> 11 面向对象</font></h3>
**<font style="color:rgb(238, 63, 77);">编程思想</font>**

- <font style="color:rgb(44, 62, 80);">基本思想是使用对象，类，继承，封装等基本概念来进行程序设计</font>
- <font style="color:rgb(44, 62, 80);">优点</font>
  - <font style="color:rgb(44, 62, 80);">易维护</font>
    - <font style="color:rgb(44, 62, 80);">采用面向对象思想设计的结构，可读性高，由于继承的存在，即使改变需求，那么维护也只是在局部模块，所以维护起来是非常方便和较低成本的</font>
  - <font style="color:rgb(44, 62, 80);">易扩展</font>
  - <font style="color:rgb(44, 62, 80);">开发工作的重用性、继承性高，降低重复工作量。</font>
  - <font style="color:rgb(44, 62, 80);">缩短了开发周期</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">一般面向对象包含：继承，封装，多态，抽象</font>

**<font style="color:rgb(238, 63, 77);">1. 对象形式的继承</font>**

<font style="color:rgb(44, 62, 80);">浅拷贝</font>

```plain
var Person = {
    name: 'poetry',
    age: 18,
    address: {
        home: 'home',
        office: 'office',
    }
    sclools: ['x','z'],
};

var programer = {
    language: 'js',
};

function extend(p, c){
    var c = c || {};
    for( var prop in p){
        c[prop] = p[prop];
    }
}
extend(Person, programer);
programer.name;  // poetry
programer.address.home;  // home
programer.address.home = 'house';  //house
Person.address.home;  // house

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">从上面的结果看出，浅拷贝的缺陷在于修改了子对象中引用类型的值，会影响到父对象中的值，因为在浅拷贝中对引用类型的拷贝只是拷贝了地址，指向了内存中同一个副本</font>

<font style="color:rgb(44, 62, 80);">深拷贝</font>

```plain
function extendDeeply(p, c){
    var c = c || {};
    for (var prop in p){
        if(typeof p[prop] === "object"){
            c[prop] = (p[prop].constructor === Array)?[]:{};
            extendDeeply(p[prop], c[prop]);
        }else{
            c[prop] = p[prop];
        }
    }
}

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">利用递归进行深拷贝，这样子对象的修改就不会影响到父对象</font>

```plain
extendDeeply(Person, programer);
programer.address.home = 'poetry';
Person.address.home; // home

```

**<font style="color:rgb(238, 63, 77);">利用call和apply继承</font>**

```plain
function Parent(){
    this.name = "abc";
    this.address = {home: "home"};
}
function Child(){
    Parent.call(this);
    this.language = "js";
}

```

**<font style="color:rgb(238, 63, 77);">ES5中的Object.create()</font>**

```plain
var p = { name : 'poetry'};
var obj = Object.create(p);
obj.name; // poetry

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.create()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">作为new操作符的替代方案是ES5之后才出来的。我们也可以自己模拟该方法：</font>

```plain
//模拟Object.create()方法
function myCreate(o){
    function F(){};
    F.prototype = o;
    o = new F();
    return o;
}
var p = { name : 'poetry'};
var obj = myCreate(p);
obj.name; // poetry

```

<font style="color:rgb(44, 62, 80);">目前，各大浏览器的最新版本（包括IE9）都部署了这个方法。如果遇到老式浏览器，可以用下面的代码自行部署</font>

```plain
if (!Object.create) {
　　　　Object.create = function (o) {
　　　　　　 function F() {}
　　　　　　F.prototype = o;
　　　　　　return new F();
　　　　};
　　}

```

**<font style="color:rgb(238, 63, 77);">2. 类的继承</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.create()</font>`

```plain
function Person(name, age){}
Person.prototype.headCount = 1;
Person.prototype.eat = function(){
    console.log('eating...');
}
function Programmer(name, age, title){}

Programmer.prototype = Object.create(Person.prototype); //建立继承关系
Programmer.prototype.constructor = Programmer;  // 修改constructor的指向

```

**<font style="color:rgb(238, 63, 77);">调用父类方法</font>**

```plain
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.headCount = 1;
Person.prototype.eat = function(){
    console.log('eating...');
}

function Programmer(name, age, title){
    Person.apply(this, arguments); // 调用父类的构造器
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.language = "js";
Programmer.prototype.work = function(){
    console.log('i am working code in '+ this.language);
    Person.prototype.eat.apply(this, arguments); // 调用父类上的方法
}

```

**<font style="color:rgb(238, 63, 77);">3. 封装</font>**

- <font style="color:rgb(44, 62, 80);">命名空间</font>
  - <font style="color:rgb(44, 62, 80);">js是没有命名空间的，因此可以用对象模拟</font>

```plain
var app = {};  // 命名空间app
//模块1
app.module1 = {
    name: 'poetry',
    f: function(){
        console.log('hi robot');
    }
};
app.module1.name; // "poetry"
app.module1.f();  // hi robot

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象的属性外界是可读可写 如何来达到封装的额目的？答：可通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">闭包+局部变量</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来完成</font>

- <font style="color:rgb(44, 62, 80);">在构造函数内部声明局部变量 和普通方法</font>
- <font style="color:rgb(44, 62, 80);">因为作用域的关系 只有构造函数内的方法</font>
- <font style="color:rgb(44, 62, 80);">才能访问局部变量 而方法对于外界是开放的</font>
- <font style="color:rgb(44, 62, 80);">因此可以通过方法来访问 原本外界访问不到的局部变量 达到函数封装的目的</font>

```plain
function Girl(name,age){
	var love = '小明';//love 是局部变量 准确说不属于对象 属于这个函数的额激活对象 函数调用时必将产生一个激活对象 love在激活对象身上   激活对象有作用域的关系 有办法访问  加一个函数提供外界访问
	this.name = name;
	this.age = age;
	this.say = function () {
		return love;
	};

	this.movelove = function (){
		love = '小轩'; //35
	}

}

var g = new Girl('yinghong',22);

console.log(g);
console.log(g.say());//小明
console.log(g.movelove());//undefined  因为35行没有返回
console.log(g.say());//小轩

function fn(){
	function t(){
		//var age = 22;//声明age变量 在t的激活对象上
		age = 22;//赋值操作 t的激活对象上找age属性 ，找不到 找fn的激活对象....再找到 最终找到window.age = 22;
				//不加var就是操作window全局属性

	}
	t();
}
console.log(fn());//undefined

```

**<font style="color:rgb(238, 63, 77);">4. 静态成员</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">面向对象中的静态方法-静态属性：没有new对象 也能引用静态方法属性</font>

```plain
function Person(name){
    var age = 100;
    this.name = name;
}
//静态成员
Person.walk = function(){
    console.log('static');
};
Person.walk();  // static

```

**<font style="color:rgb(238, 63, 77);">5. 私有与公有</font>**

```plain
function Person(id){
    // 私有属性与方法
    var name = 'poetry';
    var work = function(){
        console.log(this.id);
    };
    //公有属性与方法
    this.id = id;
    this.say = function(){
        console.log('say hello');
        work.call(this);
    };
};
var p1 = new Person(123);
p1.name; // undefined
p1.id;  // 123
p1.say();  // say hello 123

```

**<font style="color:rgb(238, 63, 77);">6. 模块化</font>**

```plain
var moduleA;
moduleA = function() {
    var prop = 1;

    function func() {}

    return {
        func: func,
        prop: prop
    };
}(); // 立即执行匿名函数

```

**<font style="color:rgb(238, 63, 77);">7. 多态</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">多态:同一个父类继承出来的子类各有各的形态</font>

```plain
function Cat(){
	this.eat = '肉';
}

function Tiger(){
	this.color = '黑黄相间';
}

function Cheetah(){
	this.color = '报文';
}

function Lion(){
	this.color = '土黄色';
}

Tiger.prototype =  Cheetah.prototype = Lion.prototype = new Cat();//共享一个祖先 Cat

var T = new Tiger();
var C = new Cheetah();
var L = new Lion();

console.log(T.color);
console.log(C.color);
console.log(L.color);

console.log(T.eat);
console.log(C.eat);
console.log(L.eat);

```

**<font style="color:rgb(238, 63, 77);">8. 抽象类</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在构造器中</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">throw new Error('')</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">; 抛异常。这样防止这个类被直接调用</font>

```plain
function DetectorBase() {
    throw new Error('Abstract class can not be invoked directly!');
}

DetectorBase.prototype.detect = function() {
    console.log('Detection starting...');
};
DetectorBase.prototype.stop = function() {
    console.log('Detection stopped.');
};
DetectorBase.prototype.init = function() {
    throw new Error('Error');
};

// var d = new DetectorBase();
// Uncaught Error: Abstract class can not be invoked directly!

function LinkDetector() {}
LinkDetector.prototype = Object.create(DetectorBase.prototype);
LinkDetector.prototype.constructor = LinkDetector;

var l = new LinkDetector();
console.log(l); //LinkDetector {}__proto__: LinkDetector
l.detect(); //Detection starting...
l.init(); //Uncaught Error: Error

```

<h3 id="_12-事件机制">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_12-%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6)<font style="color:rgb(44, 62, 80);">12 事件机制</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">涉及面试题：事件的触发过程是怎么样的？知道什么是事件代理嘛？</font>

**<font style="color:rgb(238, 63, 77);">1. 简介</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">事件流是一个事件沿着特定数据结构传播的过程。冒泡和捕获是事件流在</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">DOM</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中两种不同的传播方法</font>

**<font style="color:rgb(238, 63, 77);">事件流有三个阶段</font>**

- <font style="color:rgb(44, 62, 80);">事件捕获阶段</font>
- <font style="color:rgb(44, 62, 80);">处于目标阶段</font>
- <font style="color:rgb(44, 62, 80);">事件冒泡阶段</font>

**<font style="color:rgb(238, 63, 77);">事件捕获</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">事件捕获（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">event capturing</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">）：通俗的理解就是，当鼠标点击或者触发</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">dom</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">事件时，浏览器会从根节点开始由外到内进行事件传播，即点击了子元素，如果父元素通过事件捕获方式注册了对应的事件的话，会先触发父元素绑定的事件</font>

**<font style="color:rgb(238, 63, 77);">事件冒泡</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">事件冒泡（dubbed bubbling）：与事件捕获恰恰相反，事件冒泡顺序是由内到外进行事件传播，直到根节点</font>

<font style="color:rgb(44, 62, 80);">无论是事件捕获还是事件冒泡，它们都有一个共同的行为，就是事件传播</font>

![](/images/posts/1754918003140-6b82d12e-486f-4546-9021-0afbbbdb1406.png)

**<font style="color:rgb(238, 63, 77);">2. 捕获和冒泡</font>**

```plain
<div id="div1">
  <div id="div2"></div>
</div>

<script>
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');

    div1.onClick = function(){
        alert('1')
    }

    div2.onClick = function(){
        alert('2');
    }

</script>

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当点击</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">div2</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">时，会弹出两个弹出框。在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ie8/9/10</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">chrome</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">浏览器，会先弹出”2”再弹出“1”，这就是事件冒泡：事件从最底层的节点向上冒泡传播。事件捕获则跟事件冒泡相反</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">W3C的标准是先捕获再冒泡，</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">addEventListener</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的第三个参数决定把事件注册在捕获（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">true</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">）还是冒泡(</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">)</font>

**<font style="color:rgb(238, 63, 77);">3. 事件对象</font>**

![](/images/posts/1754918003145-e2b6a0a2-ab2c-44d4-b2d0-bc3e7d7820be.png)

**<font style="color:rgb(238, 63, 77);">4. 事件流阻止</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在一些情况下需要阻止事件流的传播，阻止默认动作的发生</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">event.preventDefault()</font>`<font style="color:rgb(44, 62, 80);">：取消事件对象的默认动作以及继续传播。</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">event.stopPropagation()/ event.cancelBubble = true</font>`<font style="color:rgb(44, 62, 80);">：阻止事件冒泡。</font>

**<font style="color:rgb(238, 63, 77);">事件的阻止在不同浏览器有不同处理</font>**

- <font style="color:rgb(44, 62, 80);">在</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">IE</font>`<font style="color:rgb(44, 62, 80);">下使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">event.returnValue= false</font>`<font style="color:rgb(44, 62, 80);">，</font>
- <font style="color:rgb(44, 62, 80);">在非</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">IE</font>`<font style="color:rgb(44, 62, 80);">下则使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">event.preventDefault()</font>`<font style="color:rgb(44, 62, 80);">进行阻止</font>

**<font style="color:rgb(238, 63, 77);">preventDefault与stopPropagation的区别</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">preventDefault</font>`<font style="color:rgb(44, 62, 80);">告诉浏览器不用执行与事件相关联的默认动作（如表单提交）</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopPropagation</font>`<font style="color:rgb(44, 62, 80);">是停止事件继续冒泡，但是对IE9以下的浏览器无效</font>

**<font style="color:rgb(238, 63, 77);">5. 事件注册</font>**

- <font style="color:rgb(44, 62, 80);">通常我们使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">addEventListener</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">useCapture</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">参数来说，该参数默认值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">false</font>`<font style="color:rgb(44, 62, 80);">。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">useCapture</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">决定了注册的事件是捕获事件还是冒泡事件</font>
- <font style="color:rgb(44, 62, 80);">一般来说，我们只希望事件只触发在目标上，这时候可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopPropagation</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来阻止事件的进一步传播。通常我们认为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopPropagation</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopImmediatePropagation</font>`<font style="color:rgb(44, 62, 80);">（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">DOM3</font>`<font style="color:rgb(44, 62, 80);">级新增事件） 同样也能实现阻止事件冒泡和捕获，但是还能阻止该事件目标执行别的注册事件</font>

`**<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopImmediatePropagation()</font>**`**<font style="color:rgb(238, 63, 77);"> </font>\*\***<font style="color:rgb(238, 63, 77);">和</font>\***\*<font style="color:rgb(238, 63, 77);"> </font>**`**<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">stopPropagation()</font>**`**<font style="color:rgb(238, 63, 77);">的区别在哪儿呢</font>**<font style="color:rgb(44, 62, 80);">？后者只会阻止冒泡或者是捕获。 但是前者除此之外还会阻止该元素的其他事件发生，但是后者就不会阻止其他事件的发生。</font>

```plain
node.addEventListener('click',(event) =>{
	event.stopImmediatePropagation()
	console.log('冒泡')
},false);
node.addEventListener('click',(event) => {
	console.log('冒泡2 ')
},false)

```

**<font style="color:rgb(238, 63, 77);">6. 事件委托</font>**

- <font style="color:rgb(44, 62, 80);">在</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">js</font>`<font style="color:rgb(44, 62, 80);">中性能优化的其中一个主要思想是减少</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">dom</font>`<font style="color:rgb(44, 62, 80);">操作。</font>
- <font style="color:rgb(44, 62, 80);">节省内存</font>
- <font style="color:rgb(44, 62, 80);">不需要给子节点注销事件</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">假设有</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">100</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">li</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，每个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">li</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">有相同的点击事件。如果为每</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">个Li</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">都添加事件，则会造成</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">dom</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">访问次数过多，引起浏览器重绘与重排的次数过多，性能则会降低。 使用事件委托则可以解决这样的问题</font>

**<font style="color:rgb(238, 63, 77);">原理</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">实现事件委托是利用了事件的冒泡原理实现的。当我们为最外层的节点添加点击事件，那么里面的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ul</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">li</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的点击事件都会冒泡到最外层节点上，委托它代为执行事件</font>

```plain
<ul id="ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script>
  window.onload = function(){
    var ulEle = document.getElementById('ul');
    ul.onclick = function(ev){
        //兼容IE
        ev = ev || window.event;
        var target = ev.target || ev.srcElement;

        if(target.nodeName.toLowerCase() == 'li'){
            alert( target.innerHTML);
        }

    }
  }
</script>

```

<h3 id="_13-模块化">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_13-%E6%A8%A1%E5%9D%97%E5%8C%96)<font style="color:rgb(44, 62, 80);">13 模块化</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">js 中现在比较成熟的有四种模块加载方案：</font>

- <font style="color:rgb(44, 62, 80);">第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。</font>
- <font style="color:rgb(44, 62, 80);">第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范</font>
- <font style="color:rgb(44, 62, 80);">第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。</font>
- <font style="color:rgb(44, 62, 80);">第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在有</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Babel</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的情况下，我们可以直接使用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的模块化</font>

```plain
// file a.js
export function a() {}
export function b() {}
// file b.js
export default function() {}

import {a, b} from './a.js'
import XXX from './b.js'

```

**<font style="color:rgb(238, 63, 77);">CommonJS</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">CommonJs</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">独有的规范，浏览器中使用就需要用到</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Browserify</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">解析了。</font>

```plain
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在上述代码中，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">module.exports</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">exports</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">很容易混淆，让我们来看看大致内部实现</font>

```plain
var module = require('./a.js')
module.a
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// 基本实现
var module = {
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">再来说说</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">module.exports</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">exports</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，用法其实是相似的，但是不能对</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">exports</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">直接赋值，不会有任何效果。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">CommonJS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中的模块化的两者区别是：</font>

- <font style="color:rgb(44, 62, 80);">前者支持动态导入，也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">require(${path}/xx.js)</font>`<font style="color:rgb(44, 62, 80);">，后者目前不支持，但是已有提案,前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。</font>
- <font style="color:rgb(44, 62, 80);">而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响</font>
- <font style="color:rgb(44, 62, 80);">前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。</font>
- <font style="color:rgb(44, 62, 80);">但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化</font>
- <font style="color:rgb(44, 62, 80);">后者会编译成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">require/exports</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来执行的</font>

**<font style="color:rgb(238, 63, 77);">AMD</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">AMD</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是由</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">RequireJS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">提出的</font>

**<font style="color:rgb(238, 63, 77);">AMD 和 CMD 规范的区别？</font>**

- <font style="color:rgb(44, 62, 80);">第一个方面是在模块定义时对依赖的处理不同。AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 CMD 推崇就近依赖，只有在用到某个模块的时候再去 require。</font>
- <font style="color:rgb(44, 62, 80);">第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。而 CMD在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。</font>

```plain
// CMD
define(function(require, exports, module) {
  var a = require("./a");
  a.doSomething();
  // 此处略去 100 行
  var b = require("./b"); // 依赖可以就近书写
  b.doSomething();
  // ...
});

// AMD 默认推荐
define(["./a", "./b"], function(a, b) {
  // 依赖必须一开始就写好
  a.doSomething();
  // 此处略去 100 行
  b.doSomething();
  // ...
})

```

- **<font style="color:rgb(238, 63, 77);">AMD</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requirejs</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置</font>
- **<font style="color:rgb(238, 63, 77);">CMD</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">seajs</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近</font>
- **<font style="color:rgb(238, 63, 77);">CommonJs</font>**<font style="color:rgb(44, 62, 80);">：模块输出的是一个值的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">copy</font>`<font style="color:rgb(44, 62, 80);">，运行时加载，加载的是一个对象（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">module.exports</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">属性），该对象只有在脚本运行完才会生成</font>
- **<font style="color:rgb(238, 63, 77);">ES6 Module</font>**<font style="color:rgb(44, 62, 80);">：模块输出的是一个值的引用，编译时输出接口，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(44, 62, 80);">模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。</font>

**<font style="color:rgb(238, 63, 77);">谈谈对模块化开发的理解</font>**

- <font style="color:rgb(44, 62, 80);">我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。</font>
- <font style="color:rgb(44, 62, 80);">由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。</font>
- <font style="color:rgb(44, 62, 80);">后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所有的所有的模块成员，外部代码可以修改内部属性的值。</font>
- <font style="color:rgb(44, 62, 80);">现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。</font>

<h3 id="VwSYK">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_14-iterator%E8%BF%AD%E4%BB%A3%E5%99%A8)<font style="color:rgb(44, 62, 80);">14 Iterator迭代器</font></h3>
`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">（迭代器）是一种接口，也可以说是一种规范。为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。</font>

<font style="color:rgb(44, 62, 80);">Iterator语法：</font>

```plain
const obj = {
    [Symbol.iterator]:function(){}
}

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[Symbol.iterator]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属性名是固定的写法，只要拥有了该属性的对象，就能够用迭代器的方式进行遍历。</font>

- <font style="color:rgb(44, 62, 80);">迭代器的遍历方法是首先获得一个迭代器的指针，初始时该指针指向第一条数据之前，接着通过调用 next 方法，改变指针的指向，让其指向下一条数据</font>
- <font style="color:rgb(44, 62, 80);">每一次的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">都会返回一个对象，该对象有两个属性</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">value</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代表想要获取的数据</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">done</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">布尔值，false表示当前指针指向的数据有值，true表示遍历已经结束</font>

**<font style="color:rgb(238, 63, 77);">Iterator 的作用有三个：</font>**

- <font style="color:rgb(44, 62, 80);">创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。</font>
- <font style="color:rgb(44, 62, 80);">第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。</font>
- <font style="color:rgb(44, 62, 80);">第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。</font>
- <font style="color:rgb(44, 62, 80);">不断调用指针对象的next方法，直到它指向数据结构的结束位置。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。</font>

```plain
let arr = [{num:1},2,3]
let it = arr[Symbol.iterator]() // 获取数组中的迭代器
console.log(it.next())  // { value: Object { num: 1 }, done: false }
console.log(it.next())  // { value: 2, done: false }
console.log(it.next())  // { value: 3, done: false }
console.log(it.next())  // { value: undefined, done: true }

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象没有布局Iterator接口，无法使用</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">for of</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">遍历。下面使得对象具备Iterator接口</font>

- <font style="color:rgb(44, 62, 80);">一个数据结构只要有Symbol.iterator属性，就可以认为是“可遍历的”</font>
- <font style="color:rgb(44, 62, 80);">原型部署了Iterator接口的数据结构有三种，具体包含四种，分别是数组，类似数组的对象，Set和Map结构</font>

**<font style="color:rgb(238, 63, 77);">为什么对象（Object）没有部署Iterator接口呢？</font>**

- <font style="color:rgb(44, 62, 80);">一是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。然而遍历遍历器是一种线性处理，对于非线性的数据结构，部署遍历器接口，就等于要部署一种线性转换</font>
- <font style="color:rgb(44, 62, 80);">对对象部署</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(44, 62, 80);">接口并不是很必要，因为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Map</font>`<font style="color:rgb(44, 62, 80);">弥补了它的缺陷，又正好有</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iteraotr</font>`<font style="color:rgb(44, 62, 80);">接口</font>

```plain
let obj = {
    id: '123',
    name: '张三',
    age: 18,
    gender: '男',
    hobbie: '睡觉'
}

obj[Symbol.iterator] = function () {
    let keyArr = Object.keys(obj)
    let index = 0
    return {
        next() {
            return index < keyArr.length ? {
                value: {
                    key: keyArr[index],
                    val: obj[keyArr[index++]]
                }
            } : {
                done: true
            }
        }
    }
}

for (let key of obj) {
  console.log(key)
}

```

![](/images/posts/1754918003224-5ca5aa7d-c968-406b-96f8-94f3c9a4bcf1.png)

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">（迭代器）是一种接口，也可以说是一种规范。为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。</font>

<font style="color:rgb(44, 62, 80);">Iterator语法：</font>

```plain
const obj = {
    [Symbol.iterator]:function(){}
}

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">[Symbol.iterator]</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属性名是固定的写法，只要拥有了该属性的对象，就能够用迭代器的方式进行遍历。</font>

- <font style="color:rgb(44, 62, 80);">迭代器的遍历方法是首先获得一个迭代器的指针，初始时该指针指向第一条数据之前，接着通过调用 next 方法，改变指针的指向，让其指向下一条数据</font>
- <font style="color:rgb(44, 62, 80);">每一次的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">都会返回一个对象，该对象有两个属性</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">value</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代表想要获取的数据</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">done</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">布尔值，false表示当前指针指向的数据有值，true表示遍历已经结束</font>

**<font style="color:rgb(238, 63, 77);">Iterator 的作用有三个：</font>**

- <font style="color:rgb(44, 62, 80);">创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。</font>
- <font style="color:rgb(44, 62, 80);">第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。</font>
- <font style="color:rgb(44, 62, 80);">第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。</font>
- <font style="color:rgb(44, 62, 80);">不断调用指针对象的next方法，直到它指向数据结构的结束位置。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。</font>

```plain
let arr = [{num:1},2,3]
let it = arr[Symbol.iterator]() // 获取数组中的迭代器
console.log(it.next())  // { value: Object { num: 1 }, done: false }
console.log(it.next())  // { value: 2, done: false }
console.log(it.next())  // { value: 3, done: false }
console.log(it.next())  // { value: undefined, done: true }

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象没有布局Iterator接口，无法使用</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">for of</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">遍历。下面使得对象具备Iterator接口</font>

- <font style="color:rgb(44, 62, 80);">一个数据结构只要有Symbol.iterator属性，就可以认为是“可遍历的”</font>
- <font style="color:rgb(44, 62, 80);">原型部署了Iterator接口的数据结构有三种，具体包含四种，分别是数组，类似数组的对象，Set和Map结构</font>

**<font style="color:rgb(238, 63, 77);">为什么对象（Object）没有部署Iterator接口呢？</font>**

- <font style="color:rgb(44, 62, 80);">一是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。然而遍历遍历器是一种线性处理，对于非线性的数据结构，部署遍历器接口，就等于要部署一种线性转换</font>
- <font style="color:rgb(44, 62, 80);">对对象部署</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iterator</font>`<font style="color:rgb(44, 62, 80);">接口并不是很必要，因为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Map</font>`<font style="color:rgb(44, 62, 80);">弥补了它的缺陷，又正好有</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Iteraotr</font>`<font style="color:rgb(44, 62, 80);">接口</font>

```plain
let obj = {
    id: '123',
    name: '张三',
    age: 18,
    gender: '男',
    hobbie: '睡觉'
}

obj[Symbol.iterator] = function () {
    let keyArr = Object.keys(obj)
    let index = 0
    return {
        next() {
            return index < keyArr.length ? {
                value: {
                    key: keyArr[index],
                    val: obj[keyArr[index++]]
                }
            } : {
                done: true
            }
        }
    }
}

for (let key of obj) {
  console.log(key)
}

```

![](/images/posts/1754917890781-4724e763-e59c-43af-98d0-8cbdc4ade558.png)

<h3 id="_15-promise">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_15-promise)<font style="color:rgb(44, 62, 80);">15 Promise</font></h3>
<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这里你谈</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的时候，除了将他解决的痛点以及常用的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">API</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">之外，最好进行拓展把</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">eventloop</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">带进来好好讲一下，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">(微任务)、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">macrotask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">(任务) 的执行顺序，如果看过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">源码，最好可以谈一谈 原生</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是如何实现的。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的关键点在于</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">callback</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的两个参数，一个是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resovle</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，一个是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">reject</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。还有就是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的链式调用（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.then()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，每一个</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">都是一个责任人）</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">新增的语法，解决了回调地狱的问题。</font>
- <font style="color:rgb(44, 62, 80);">可以把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">看成一个状态机。初始是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态，可以通过函数</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolve</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">reject</font>`<font style="color:rgb(44, 62, 80);">，将状态转变为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolved</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或者</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态，状态一旦改变就不能再次变化。</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">函数会返回一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实例，并且该返回值是一个新的实例而不是之前的实例。因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">规范规定除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态，其他状态是不可以改变的，如果返回的是一个相同实例的话，多个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">调用就失去意义了。 对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来说，本质上可以把它看成是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">flatMap</font>`

**<font style="color:rgb(238, 63, 77);">1. Promise 的基本情况</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">简单来说它就是一个容器，里面保存着某个未来才会结束的事件（通常是异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息</font>

<font style="color:rgb(44, 62, 80);">一般 Promise 在执行过程中，必然会处于以下几种状态之一。</font>

- <font style="color:rgb(44, 62, 80);">待定（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);">）：初始状态，既没有被完成，也没有被拒绝。</font>
- <font style="color:rgb(44, 62, 80);">已完成（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">）：操作成功完成。</font>
- <font style="color:rgb(44, 62, 80);">已拒绝（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);">）：操作失败。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">待定状态的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对象执行的话，最后要么会通过一个值完成，要么会通过一个原因被拒绝。当其中一种情况发生时，我们用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法排列起来的相关处理程序就会被调用。因为最后</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.prototype.then</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.prototype.catch</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法返回的是一个</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">， 所以它们可以继续被链式调用</font>

<font style="color:rgb(44, 62, 80);">关于 Promise 的状态流转情况，有一点值得注意的是，内部状态改变之后不可逆，你需要在编程过程中加以注意。文字描述比较晦涩，我们直接通过一张图就能很清晰地看出 Promise 内部状态流转的情况</font>

![](/images/posts/1754917890782-4ebed5a1-5eed-462e-9f53-afd80396ab8a.png)

<font style="color:rgb(44, 62, 80);">从上图可以看出，我们最开始创建一个新的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">返回给</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">p1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，然后开始执行，状态是 pending，当执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolve</font>`<font style="color:rgb(44, 62, 80);">之后状态就切换为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">，执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">reject</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之后就变为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的状态</font>

**<font style="color:rgb(238, 63, 77);">2. Promise 的静态方法</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">all 方法</font>`
  - <font style="color:rgb(44, 62, 80);">语法：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.all（iterable）</font>`
  - <font style="color:rgb(44, 62, 80);">参数： 一个可迭代对象，如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array</font>`<font style="color:rgb(44, 62, 80);">。</font>
  - <font style="color:rgb(44, 62, 80);">描述： 此方法对于汇总多个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的结果很有用，在 ES6 中可以将多个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.all</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">异步请求并行操作，返回结果一般有下面两种情况。</font>
    - <font style="color:rgb(44, 62, 80);">当所有结果成功返回时按照请求顺序返回成功结果。</font>
    - <font style="color:rgb(44, 62, 80);">当其中有一个失败方法时，则进入失败方法</font>
- <font style="color:rgb(44, 62, 80);">我们来看下业务的场景，对于下面这个业务场景页面的加载，将多个请求合并到一起，用 all 来实现可能效果会更好，请看代码片段</font>

```plain
// 在一个页面中需要加载获取轮播列表、获取店铺列表、获取分类列表这三个操作，页面需要同时发出请求进行页面渲染，这样用 `Promise.all` 来实现，看起来更清晰、一目了然。

//1.获取轮播数据列表
function getBannerList(){
  return new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve('轮播数据')
      },300)
  })
}
//2.获取店铺列表
function getStoreList(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('店铺数据')
    },500)
  })
}
//3.获取分类列表
function getCategoryList(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('分类数据')
    },700)
  })
}
function initLoad(){
  Promise.all([getBannerList(),getStoreList(),getCategoryList()])
  .then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}
initLoad()

```

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">allSettled</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.allSettled</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的语法及参数跟</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.all</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类似，其参数接受一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的数组，返回一个新的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">唯一的不同在于，执行完之后不会失败</font>`<font style="color:rgb(44, 62, 80);">，也就是说当</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.allSettled</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">全部处理完成后，我们可以拿到每个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的状态，而不管其是否处理成功</font>
- <font style="color:rgb(44, 62, 80);">我们来看一下用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">allSettled</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实现的一段代码</font>

```plain
const resolved = Promise.resolve(2);
const rejected = Promise.reject(-1);
const allSettledPromise = Promise.allSettled([resolved, rejected]);
allSettledPromise.then(function (results) {
  console.log(results);
});
// 返回结果：
// [
//    { status: 'fulfilled', value: 2 },
//    { status: 'rejected', reason: -1 }
// ]

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">从上面代码中可以看到，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.allSettled</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">最后返回的是一个数组，记录传进来的参数中每个 Promise 的返回值，这就是和 all 方法不太一样的地方。</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">any</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法</font>
  - <font style="color:rgb(44, 62, 80);">语法：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.any（iterable）</font>`
  - <font style="color:rgb(44, 62, 80);">参数：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">iterable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">可迭代的对象，例如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array</font>`<font style="color:rgb(44, 62, 80);">。</font>
  - <font style="color:rgb(44, 62, 80);">描述：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">any</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">，只要参数</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实例有一个变成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">状态，最后</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">any</font>`<font style="color:rgb(44, 62, 80);">返回的实例就会变成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态；如果所有参数</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实例都变成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态，包装实例就会变成</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">状态。</font>

```plain
const resolved = Promise.resolve(2);
const rejected = Promise.reject(-1);
const anyPromise = Promise.any([resolved, rejected]);
anyPromise.then(function (results) {
  console.log(results);
});
// 返回结果：
// 2

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">从改造后的代码中可以看出，只要其中一个</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">变成</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">状态，那么</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">any</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">最后就返回这个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">p romise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。由于上面</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolved</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这个 Promise 已经是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolve</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的了，故最后返回结果为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">2</font>`

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">race</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法</font>
  - <font style="color:rgb(44, 62, 80);">语法：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.race（iterable）</font>`
  - <font style="color:rgb(44, 62, 80);">参数：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">iterable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">可迭代的对象，例如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Array</font>`<font style="color:rgb(44, 62, 80);">。</font>
  - <font style="color:rgb(44, 62, 80);">描述：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">race</font>`<font style="color:rgb(44, 62, 80);">方法返回一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">，只要参数的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之中有一个实例率先改变状态，则</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">race</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的返回状态就跟着改变。那个率先改变的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实例的返回值，就传递给</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">race</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的回调函数</font>
- <font style="color:rgb(44, 62, 80);">我们来看一下这个业务场景，对于图片的加载，特别适合用 race 方法来解决，将图片请求和超时判断放到一起，用 race 来实现图片的超时判断。请看代码片段。</font>

```plain
//请求某个图片资源
function requestImg(){
  var p = new Promise(function(resolve, reject){
    var img = new Image();
    img.onload = function(){ resolve(img); }
    img.src = 'http://www.baidu.com/img/flexible/logo/pc/result.png';
  });
  return p;
}
//延时函数，用于给请求计时
function timeout(){
  var p = new Promise(function(resolve, reject){
    setTimeout(function(){ reject('图片请求超时'); }, 5000);
  });
  return p;
}
Promise.race([requestImg(), timeout()])
.then(function(results){
  console.log(results);
})
.catch(function(reason){
  console.log(reason);
});

// 从上面的代码中可以看出，采用 Promise 的方式来判断图片是否加载成功，也是针对 Promise.race 方法的一个比较好的业务场景

```

![](/images/posts/1754917890796-cbb2c8e0-e037-4f80-a52b-3e1a09a5cf89.png)

**<font style="color:rgb(238, 63, 77);">promise手写实现，面试够用版：</font>**

```plain
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
// 定义链式调用的then方法
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:
   }
}

```

<font style="color:rgb(44, 62, 80);">Promise异步总结</font>

**<font style="color:rgb(238, 63, 77);">知识点总结</font>**

- **<font style="color:rgb(238, 63, 77);">三种状态</font>**
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">(通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">resolve</font>`<font style="color:rgb(44, 62, 80);">触发)、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);">(通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">reject</font>`<font style="color:rgb(44, 62, 80);">触发)</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending => fulfilled</font>`<font style="color:rgb(44, 62, 80);">或者</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending => rejected</font>`
  - <font style="color:rgb(44, 62, 80);">状态变化不可逆</font>
- **<font style="color:rgb(238, 63, 77);">状态的表现和变化</font>**
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);">状态，不会触发</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">catch</font>`
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">状态会触发后续的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);">回调</font>
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`<font style="color:rgb(44, 62, 80);">状态会触发后续的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">catch</font>`<font style="color:rgb(44, 62, 80);">回调</font>
- **<font style="color:rgb(238, 63, 77);">then和catch对状态的影响（重要）</font>**
  - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);">正常返回</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">，里面有报错返回</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`

```plain
const p1 = Promise.resolve().then(()=>{
  return 100
})
console.log('p1', p1) // fulfilled会触发后续then回调
p1.then(()=>{
  console.log(123)
}) // 打印123

const p2 = Promise.resolve().then(()=>{
  throw new Error('then error')
})
// p2是rejected会触发后续catch回调
p2.then(()=>{
  console.log(456)
}).catch(err=>{
  console.log(789)
})
// 打印789

```

    - `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">catch</font>`<font style="color:rgb(44, 62, 80);">正常返回</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fulfilled</font>`<font style="color:rgb(44, 62, 80);">，里面有报错返回</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">rejected</font>`

```plain
const p1 = Promise.reject('my error').catch(()=>{
  console.log('catch error')
})
p1.then(()=>{
  console.log(1)
})
// console.log(p1) p1返回fulfilled 触发then回调
const p2 = Promise.reject('my error').catch(()=>{
  throw new Error('catch error')
})
// console.log(p2) p2返回rejected 触发catch回调
p2.then(()=>{
  console.log(2)
}).catch(()=>{
  console.log(3)
})

```

**<font style="color:rgb(238, 63, 77);">promise then和catch的链接</font>**

```plain
// 第一题
Promise.resolve()
.then(()=>console.log(1))// 状态返回fulfilled
.catch(()=>console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
.then(()=>console.log(3)) // 1,3
// 整个执行完没有报错，状态返回fulfilled

// 第二题
Promise.resolve()
.then(()=>{ // then中有报错 状态返回rejected,后面的catch会执行
  console.log(1)
  throw new Error('error')
})
.catch(()=>console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
.then(()=>console.log(3)) // 1,2,3
// 整个执行完没有报错，状态返回fulfilled

// 第三题
Promise.resolve()
.then(()=>{//then中有报错 状态返回rejected，后面的catch会执行
  console.log(1)
  throw new Error('error')
})
.catch(()=>console.log(2)) // catch中没有报错，状态返回fulfilled，后面的catch不会执行
.catch(()=>console.log(3)) // 1，2
// 整个执行完没有报错，状态返回fulfilled
```

<h3 id="_16-generator">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_16-generator)<font style="color:rgb(44, 62, 80);">16 Generator</font></h3>
`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中新增的语法，和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">一样，都可以用来异步编程。Generator函数可以说是Iterator接口的具体实现方式。Generator 最大的特点就是可以控制函数的执行。</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function*</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用来声明一个函数是生成器函数，它比普通的函数声明多了一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">*</font>`<font style="color:rgb(44, 62, 80);">,</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">*</font>`<font style="color:rgb(44, 62, 80);">的位置比较随意可以挨着</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字，也可以挨着函数名</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">产出的意思，这个关键字只能出现在生成器函数体内，但是生成器中也可以没有</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字，函数遇到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候会暂停，并把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">后面的表达式结果抛出去</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(44, 62, 80);">作用是将代码的控制权交还给生成器函数</font>

```plain
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}

```

<font style="color:rgb(44, 62, 80);">上面这个示例就是一个Generator函数，我们来分析其执行过程：</font>

- <font style="color:rgb(44, 62, 80);">首先 Generator 函数调用时它会返回一个迭代器</font>
- <font style="color:rgb(44, 62, 80);">当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6</font>
- <font style="color:rgb(44, 62, 80);">当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 _ 12，所以第二个 yield 等于 2 _ 12 / 3 = 8</font>
- <font style="color:rgb(44, 62, 80);">当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42</font>

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);">实际就是暂缓执行的标示，每执行一次</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next()</font>`<font style="color:rgb(44, 62, 80);">，相当于指针移动到下一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);">位置</font>

![](/images/posts/1754917890779-572831c3-76fd-49c4-8745-ba8c360c7a58.png)

**<font style="color:rgb(238, 63, 77);background-color:rgb(255, 249, 249);">总结一下</font>**<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数是</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">提供的一种异步编程解决方案。通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">标识位和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法调用，实现函数的分段执行</font>

**<font style="color:rgb(238, 63, 77);">遍历器对象生成函数，最大的特点是可以交出函数的执行权</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">function</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字与函数名之间有一个星号；</font>
- <font style="color:rgb(44, 62, 80);">函数体内部使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">yield</font>`<font style="color:rgb(44, 62, 80);">表达式，定义不同的内部状态；</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(44, 62, 80);">指针移向下一个状态</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">这里你可以说说</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的异步编程，以及它的语法糖</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">async</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">awiat</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，传统的异步编程。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">之前，异步编程大致如下</font>

- <font style="color:rgb(44, 62, 80);">回调函数</font>
- <font style="color:rgb(44, 62, 80);">事件监听</font>
- <font style="color:rgb(44, 62, 80);">发布/订阅</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">传统异步编程方案之一：协程，多个线程互相协作，完成异步任务。</font>

```plain
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">从以上代码可以发现，加上</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">*</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的函数执行后拥有了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数，也就是说函数执行后返回了一个对象。每次调用</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数可以继续执行被暂停的代码。以下是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数的简单实现</font>

```plain
// cb 也就是编译过的 test 函数
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {}
    };

    return {
      next: function() {
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false
        };
      }
    };
  })();
}
// 如果你使用 babel 编译后可以发现 test 函数变成了这样
function test() {
  var a;
  return generator(function(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        // 可以发现通过 yield 将代码分割成几块
        // 每次执行 next 函数就执行一块代码
        // 并且表明下次需要执行哪块代码
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
		// 执行完毕
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

```

<h3 id="_17-async-await">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_17-async-await)<font style="color:rgb(44, 62, 80);">17 async/await</font></h3>
`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数的语法糖。有更好的语义、更好的适用性、返回值是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>

- <font style="color:rgb(44, 62, 80);">await 和 promise 一样，更多的是考笔试题，当然偶尔也会问到和 promise 的一些区别。</font>
- <font style="color:rgb(44, 62, 80);">await 相比直接使用 Promise 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码。缺点在于滥用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性，此时更应该使用 Promise.all。</font>
- <font style="color:rgb(44, 62, 80);">一个函数如果加上 async ，那么该函数就会返回一个 Promise</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">async => *</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await => yield</font>`

```plain
// 基本用法

async function timeout (ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
async function asyncConsole (value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncConsole('hello async and await', 1000)

```

<font style="color:rgb(44, 62, 80);">下面来看一个使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的代码。</font>

```plain
var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1

```

- <font style="color:rgb(44, 62, 80);">首先函数</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">b</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">先执行，在执行到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await 10</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之前变量</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">还是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(44, 62, 80);">，因为在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">内部实现了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">generators</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">generators</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会保留堆栈中东西，所以这时候</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a = 0</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被保存了下来</font>
- <font style="color:rgb(44, 62, 80);">因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是异步操作，遇到</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">await</font>`<font style="color:rgb(44, 62, 80);">就会立即返回一个</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">pending</font>`<font style="color:rgb(44, 62, 80);">状态的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">对象，暂时返回执行代码的控制权，使得函数外的代码得以继续执行，所以会先执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">console.log('1', a)</font>`
- <font style="color:rgb(44, 62, 80);">这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">a = 10</font>`
- <font style="color:rgb(44, 62, 80);">然后后面就是常规执行代码了</font>

**<font style="color:rgb(238, 63, 77);">优缺点：</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">async/await</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的优势在于处理 then 的调用链，能够更清晰准确的写出代码，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。</font>

**<font style="color:rgb(238, 63, 77);">async原理</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">async/await</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">语法糖就是使用</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">函数+自动执行器来运作的</font>

```plain
// 定义了一个promise，用来模拟异步请求，作用是传入参数++
function getNum(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num+1)
        }, 1000)
    })
}

//自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(func){
  var gen = func();

  function next(data){
    var result = gen.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function* (){
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2) ;
};
asyncFun(func);

```

- <font style="color:rgb(44, 62, 80);">在执行的过程中，判断一个函数的</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(44, 62, 80);">是否完成，如果已经完成，将结果传入下一个函数，继续重复此步骤</font>
- <font style="color:rgb(44, 62, 80);">每一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回值的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">value</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">属性为一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象，所以我们为其添加</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法， 在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">then</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法里面接着运行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">next</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法挪移遍历器指针，直到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Generator</font>`<font style="color:rgb(44, 62, 80);">函数运行完成</font>

![](/images/posts/1754917890864-b7098449-9c17-4429-a35c-a3e573d32f7c.png)

<h3 id="_18-事件循环">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_18-%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF)<font style="color:rgb(44, 62, 80);">18 事件循环</font></h3>
![](/images/posts/1754917892538-817cc510-983a-4a63-99a5-deacf51dd7df.png)

- <font style="color:rgb(44, 62, 80);">默认代码从上到下执行，执行环境通过</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">script</font>`<font style="color:rgb(44, 62, 80);">来执行（宏任务）</font>
- <font style="color:rgb(44, 62, 80);">在代码执行过程中，调用定时器</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">click</font>`<font style="color:rgb(44, 62, 80);">事件...不会立即执行，需要等待当前代码全部执行完毕</font>
- <font style="color:rgb(44, 62, 80);">给异步方法划分队列，分别存放到微任务（立即存放）和宏任务（时间到了或事情发生了才存放）到队列中</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">script</font>`<font style="color:rgb(44, 62, 80);">执行完毕后，会清空所有的微任务</font>
- <font style="color:rgb(44, 62, 80);">微任务执行完毕后，会渲染页面（不是每次都调用）</font>
- <font style="color:rgb(44, 62, 80);">再去宏任务队列中看有没有到达时间的，拿出来其中一个执行</font>
- <font style="color:rgb(44, 62, 80);">执行完毕后，按照上述步骤不停的循环</font>

**<font style="color:rgb(238, 63, 77);">例子</font>**

![](/images/posts/1754917892275-89d7f2d5-3dfc-4b6b-9c51-2cc236b7c5b7.png)<font style="color:rgb(44, 62, 80);"> </font>![](/images/posts/1754917892316-692fb62e-e9ff-4658-8427-2c02df19959e.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">自动执行的情况 会输出 listener1 listener2 task1 task2</font>

![](/images/posts/1754917892463-f77f02de-19fe-4646-88f1-73ffbaeee66b.png)<font style="color:rgb(44, 62, 80);"> </font>![](/images/posts/1754917892477-d1441057-2151-47fc-b5a7-94af3a7691b5.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">如果手动点击click 会一个宏任务取出来一个个执行，先执行click的宏任务，取出微任务去执行。会输出 listener1 task1 listener2 task2</font>

![](/images/posts/1754917896425-f8e3762f-feb4-4222-b331-d38171ff676b.png)

```plain
console.log(1)

async function asyncFunc(){
  console.log(2)
  // await xx ==> promise.resolve(()=>{console.log(3)}).then()
  // console.log(3) 放到promise.resolve或立即执行
  await console.log(3)
  // 相当于把console.log(4)放到了then promise.resolve(()=>{console.log(3)}).then(()=>{
  //   console.log(4)
  // })
  // 微任务谁先注册谁先执行
  console.log(4)
}

setTimeout(()=>{console.log(5)})

const promise = new Promise((resolve,reject)=>{
  console.log(6)
  resolve(7)
})

promise.then(d=>{console.log(d)})

asyncFunc()

console.log(8)

// 输出 1 6 2 3 8 7 4 5

```

**<font style="color:rgb(238, 63, 77);">1. 浏览器事件循环</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">涉及面试题：异步代码执行顺序？解释一下什么是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event Loop</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">？</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">js代码执行过程中会有很多任务，这些任务总的分成两类：</font>

- <font style="color:rgb(44, 62, 80);">同步任务</font>
- <font style="color:rgb(44, 62, 80);">异步任务</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。，我们用导图来说明：</font>

![](/images/posts/1754917896382-d25770fa-aed9-497a-b2c7-7837254beb8a.png)

**<font style="color:rgb(238, 63, 77);">我们解释一下这张图：</font>**

- <font style="color:rgb(44, 62, 80);">同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。</font>
- <font style="color:rgb(44, 62, 80);">当指定的事情完成时，Event Table会将这个函数移入Event Queue。</font>
- <font style="color:rgb(44, 62, 80);">主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。</font>
- <font style="color:rgb(44, 62, 80);">上述过程会不断重复，也就是常说的Event Loop(事件循环)。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">那主线程执行栈何时为空呢？js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数</font>

<font style="color:rgb(44, 62, 80);">以上就是js运行的整体流程</font>

**<font style="color:rgb(238, 63, 77);">面试中该如何回答呢？ 下面是我个人推荐的回答：</font>**

- <font style="color:rgb(44, 62, 80);">首先js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行</font>
- <font style="color:rgb(44, 62, 80);">在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务</font>
- <font style="color:rgb(44, 62, 80);">当同步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行</font>
- <font style="color:rgb(44, 62, 80);">任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行</font>
- <font style="color:rgb(44, 62, 80);">当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。</font>

```plain
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function(resolve, reject) {
  console.log(2);
  resolve()
}).then(function() {
  console.log(3)
});
process.nextTick(function () {
  console.log(4)
})
console.log(5)

```

- <font style="color:rgb(44, 62, 80);">第一轮：主线程开始执行，遇到</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);">，将setTimeout的回调函数丢到宏任务队列中，在往下执行</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">new Promise</font>`<font style="color:rgb(44, 62, 80);">立即执行，输出2，then的回调函数丢到微任务队列中，再继续执行，遇到</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(44, 62, 80);">，同样将回调函数扔到微任务队列，再继续执行，输出5，当所有同步任务执行完成后看有没有可以执行的微任务，发现有then函数和</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">nextTick</font>`<font style="color:rgb(44, 62, 80);">两个微任务，先执行哪个呢？</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(44, 62, 80);">指定的异步任务总是发生在所有异步任务之前，因此先执行process.nextTick输出4然后执行then函数输出3，第一轮执行结束。</font>
- <font style="color:rgb(44, 62, 80);">第二轮：从宏任务队列开始，发现setTimeout回调，输出1执行完毕，因此结果是25431</font>

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Task</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">（有多种</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">task</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">） 队列中。一旦执行栈为空，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Loop</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就会从</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Task</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">JS</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中的异步还是同步行为</font>

![](/images/posts/1754917898614-4e66e8d3-eadb-4816-b024-c53a651c3d81.png)

```plain
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

console.log('script end');

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">不同的任务源会被分配到不同的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Task</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">队列中，任务源可以分为 微任务（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">） 和 宏任务（</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">macrotask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">）。在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">ES6</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">规范中，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">称为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">jobs</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">macrotask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">称为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">task</font>`

```plain
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">以上代码虽然</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">写在</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">之前，但是因为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属于微任务而</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">属于宏任务</font>

**<font style="color:rgb(238, 63, 77);">微任务</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Object.observe</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">MutationObserver</font>`
  - ![](/images/posts/1754917900731-fe7c9c11-9f49-446c-9de7-a5d8f5c697e5.png)

**<font style="color:rgb(238, 63, 77);">宏任务</font>**

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">script</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate</font>`
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">I/O</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">网络请求完成、文件读写完成事件</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">UI rendering</font>`
- <font style="color:rgb(44, 62, 80);">用户交互事件（比如鼠标点击、滚动页面、放大缩小等）</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">宏任务中包括了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">script</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务</font>

![](/images/posts/1754917900858-7b8304a0-61b7-4c29-b0e3-19b434be3632.png)

**<font style="color:rgb(238, 63, 77);">所以正确的一次 Event loop 顺序是这样的</font>**

- <font style="color:rgb(44, 62, 80);">执行同步代码，这属于宏任务</font>
- <font style="color:rgb(44, 62, 80);">执行栈为空，查询是否有微任务需要执行</font>
- <font style="color:rgb(44, 62, 80);">执行所有微任务</font>
- <font style="color:rgb(44, 62, 80);">必要的话渲染 UI</font>
- <font style="color:rgb(44, 62, 80);">然后开始下一轮</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event loop</font>`<font style="color:rgb(44, 62, 80);">，执行宏任务中的异步代码</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">通过上述的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event loop</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">DOM</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的话，为了更快的响应界面响应，我们可以把操作</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">DOM</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">放入微任务中</font>

- <font style="color:rgb(44, 62, 80);">JavaScript 引擎首先从宏任务队列（macrotask queue）中取出第一个任务</font>
- <font style="color:rgb(44, 62, 80);">执行完毕后，再将微任务（microtask queue）中的所有任务取出，按照顺序分别全部执行（这里包括不仅指开始执行时队列里的微任务），如果在这一步过程中产生新的微任务，也需要执行；</font>
- <font style="color:rgb(44, 62, 80);">然后再从宏任务队列中取下一个，执行完毕后，再次将 microtask queue 中的全部取出，循环往复，直到两个 queue 中的任务都取完。</font>

![](/images/posts/1754917903234-0269cbd1-7af8-4917-91fd-7022825c1a06.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">总结起来就是：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">一次 Eventloop 循环会处理一个宏任务和所有这次循环中产生的微任务</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>

**<font style="color:rgb(238, 63, 77);">2. Node 中的 Event loop</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当 Node.js 开始启动时，会初始化一个 Eventloop，处理输入的代码脚本，这些脚本会进行 API 异步调用，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">方法会开始处理事件循环。下面就是 Node.js 官网提供的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Eventloop</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">事件循环参考流程</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event loop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和浏览器中的不相同。</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Event loop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">分为</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">6</font>`<font style="color:rgb(44, 62, 80);">个阶段，它们会按照顺序反复运行</font>

![](/images/posts/1754917903338-52b01fe0-3fab-4e50-b244-f8d614bcfb09.png)<font style="color:rgb(44, 62, 80);"> </font>![](/images/posts/1754917903433-059cb41d-d498-4006-91ed-ad8b22890bb5.png)<font style="color:rgb(44, 62, 80);"> </font>![](/images/posts/1754917905605-3305521a-2960-45ad-8d28-7fc8f684f27c.png)

- <font style="color:rgb(44, 62, 80);">每次执行执行一个宏任务后会清空微任务（执行顺序和浏览器一致，在node11版本以上）</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">node中的微任务，当前执行栈的底部，优先级比</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">promise</font>`<font style="color:rgb(44, 62, 80);">要高</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">整个流程分为六个阶段，当这六个阶段执行完一次之后，才可以算得上执行了一次 Eventloop 的循环过程。我们来分别看下这六个阶段都做了哪些事情。</font>

- **<font style="color:rgb(238, 63, 77);">Timers 阶段</font>**<font style="color:rgb(44, 62, 80);">：这个阶段执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`<font style="color:rgb(44, 62, 80);">的回调函数，简单理解就是由这两个函数启动的回调函数。</font>
- **<font style="color:rgb(238, 63, 77);">I/O callbacks 阶段</font>**<font style="color:rgb(44, 62, 80);">：这个阶段主要执行系统级别的回调函数，比如 TCP 连接失败的回调。</font>
- **<font style="color:rgb(238, 63, 77);">idle，prepare 阶段</font>**<font style="color:rgb(44, 62, 80);">：仅系统内部使用，你只需要知道有这 2 个阶段就可以。</font>
- **<font style="color:rgb(238, 63, 77);">poll 阶段</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">poll</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">阶段是一个重要且复杂的阶段，几乎所有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">I/O</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">相关的回调，都在这个阶段执行（除了</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">以及一些因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">exception</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">意外关闭产生的回调）。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">检索新的 I/O 事件，执行与 I/O 相关的回调</font>`<font style="color:rgb(44, 62, 80);">，其他情况 Node.js 将在适当的时候在此阻塞。这也是最复杂的一个阶段，所有的事件循环以及回调处理都在这个阶段执行。这个阶段的主要流程如下图所示。</font>

![](/images/posts/1754917904545-8a01190d-3ef0-4a9a-9b56-5734148cb6ea.png)

- **<font style="color:rgb(238, 63, 77);">check 阶段</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">回调函数在这里执行，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">并不是立马执行，而是当事件循环</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">poll 中没有新的事件处理时就执行该部分</font>`<font style="color:rgb(44, 62, 80);">，如下代码所示。</font>

```plain
const fs = require('fs');
setTimeout(() => { // 新的事件循环的起点
    console.log('1');
}, 0);
setImmediate( () => {
    console.log('setImmediate 1');
});
/// fs.readFile 将会在 poll 阶段执行
fs.readFile('./test.conf', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log('read file success');
});
/// 该部分将会在首次事件循环中执行
Promise.resolve().then(()=>{
    console.log('poll callback');
});
// 首次事件循环执行
console.log('2');

```

<font style="color:rgb(44, 62, 80);">在这一代码中有一个非常奇特的地方，就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之后输出。有以下几点原因：</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">如果不设置时间或者设置时间为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">0</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，则会默认为</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1ms</font>`
- <font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">主流程执行完成后，超过</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1ms</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">时，会将</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">回调函数逻辑插入到待执行回调函数</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">poll</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">队列中；</font>
- <font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">由于当前</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">poll</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">队列中存在可执行回调函数，因此需要先执行完，待完全执行完成后，才会执行</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">check：setImmediate</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">因此这也验证了这句话，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">先执行回调函数，再执行 setImmediate</font>`

- **<font style="color:rgb(238, 63, 77);">close callbacks 阶段</font>**<font style="color:rgb(44, 62, 80);">：执行一些关闭的回调函数，如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">socket.on('close', ...)</font>`

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">除了把 Eventloop 的宏任务细分到不同阶段外。node 还引入了一个新的任务队列</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Process.nextTick()</font>`

<font style="color:rgb(44, 62, 80);">可以认为，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Process.nextTick()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会在上述各个阶段结束时，在</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">进入下一个阶段之前立即执行</font>`<font style="color:rgb(44, 62, 80);">（优先级甚至超过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">队列）</font>

**<font style="color:rgb(238, 63, 77);">事件循环的主要包含微任务和宏任务。具体是怎么进行循环的呢</font>**

![](/images/posts/1754917905902-e51254f0-a3fa-467e-860e-8314fb30ee37.png)

- **<font style="color:rgb(238, 63, 77);">微任务</font>**<font style="color:rgb(44, 62, 80);">：在 Node.js 中微任务包含 2 种——</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`<font style="color:rgb(44, 62, 80);">。</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">微任务在事件循环中优先级是最高的</font>`<font style="color:rgb(44, 62, 80);">，因此在同一个事件循环中有其他任务存在时，优先执行微任务队列。并且</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick 和 Promise</font>`<font style="color:rgb(44, 62, 80);">也存在优先级，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">高于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise</font>`
- **<font style="color:rgb(238, 63, 77);">宏任务</font>**<font style="color:rgb(44, 62, 80);">：在 Node.js 中宏任务包含 4 种——</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setImmediate</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">I/O</font>`<font style="color:rgb(44, 62, 80);">。宏任务在微任务执行之后执行，因此在同一个事件循环周期内，如果既存在微任务队列又存在宏任务队列，那么优先将微任务队列清空，再执行宏任务队列</font>

<font style="color:rgb(44, 62, 80);">我们可以看到有一个核心的主线程，它的执行阶段主要处理三个核心逻辑。</font>

- <font style="color:rgb(44, 62, 80);">同步代码。</font>
- <font style="color:rgb(44, 62, 80);">将异步任务插入到微任务队列或者宏任务队列中。</font>
- <font style="color:rgb(44, 62, 80);">执行微任务或者宏任务的回调函数。在主线程处理回调函数的同时，也需要判断是否插入微任务和宏任务。根据优先级，先判断微任务队列是否存在任务，存在则先执行微任务，不存在则判断在宏任务队列是否有任务，有则执行。</font>

```plain
const fs = require('fs');
// 首次事件循环执行
console.log('start');
/// 将会在新的事件循环中的阶段执行
fs.readFile('./test.conf', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log('read file success');
});
setTimeout(() => { // 新的事件循环的起点
    console.log('setTimeout');
}, 0);
/// 该部分将会在首次事件循环中执行
Promise.resolve().then(()=>{
    console.log('Promise callback');
});
/// 执行 process.nextTick
process.nextTick(() => {
    console.log('nextTick callback');
});
// 首次事件循环执行
console.log('end');

```

<font style="color:rgb(44, 62, 80);">分析下上面代码的执行过程</font>

- <font style="color:rgb(44, 62, 80);">第一个事件循环主线程发起，因此先执行同步代码，所以先输出 start，然后输出 end</font>
- <font style="color:rgb(44, 62, 80);">第一个事件循环主线程发起，因此先执行同步代码，所以先输出 start，然后输出 end；</font>
- <font style="color:rgb(44, 62, 80);">再从上往下分析，遇到微任务，插入微任务队列，遇到宏任务，插入宏任务队列，分析完成后，微任务队列包含：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.resolve 和 process.nextTick</font>`<font style="color:rgb(44, 62, 80);">，宏任务队列包含：</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile 和 setTimeout</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">先执行微任务队列，但是根据优先级，先执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick 再执行 Promise.resolve</font>`<font style="color:rgb(44, 62, 80);">，所以先输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">nextTick callback</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">再输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise callback</font>`<font style="color:rgb(44, 62, 80);">；</font>
- <font style="color:rgb(44, 62, 80);">再执行宏任务队列，根据</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">宏任务插入先后顺序执行 setTimeout 再执行 fs.readFile</font>`<font style="color:rgb(44, 62, 80);">，这里需要注意，先执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">由于其回调时间较短，因此回调也先执行，并非是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">先执行所以才先执行回调函数，但是它执行需要时间肯定大于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1ms</font>`<font style="color:rgb(44, 62, 80);">，所以虽然</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">先于</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">执行，但是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">执行更快，所以先输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，最后输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">read file success</font>`<font style="color:rgb(44, 62, 80);">。</font>

```plain
// 输出结果
start
end
nextTick callback
Promise callback
setTimeout
read file success

```

![](/images/posts/1754917905861-c41af6eb-3310-4902-99a5-53ae21199b43.png)

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当微任务和宏任务又产生新的微任务和宏任务时，又应该如何处理呢？如下代码所示：</font>

```plain
const fs = require('fs');
setTimeout(() => { // 新的事件循环的起点
    console.log('1');
    fs.readFile('./config/test.conf', {encoding: 'utf-8'}, (err, data) => {
        if (err) throw err;
        console.log('read file sync success');
    });
}, 0);
/// 回调将会在新的事件循环之前
fs.readFile('./config/test.conf', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log('read file success');
});
/// 该部分将会在首次事件循环中执行
Promise.resolve().then(()=>{
    console.log('poll callback');
});
// 首次事件循环执行
console.log('2');

```

<font style="color:rgb(44, 62, 80);">在上面代码中，有 2 个宏任务和 1 个微任务，宏任务是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout 和 fs.readFile</font>`<font style="color:rgb(44, 62, 80);">，微任务是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Promise.resolve</font>`<font style="color:rgb(44, 62, 80);">。</font>

- <font style="color:rgb(44, 62, 80);">整个过程优先执行主线程的第一个事件循环过程，所以先执行同步逻辑，先输出 2。</font>
- <font style="color:rgb(44, 62, 80);">接下来执行微任务，输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">poll callback</font>`<font style="color:rgb(44, 62, 80);">。</font>
- <font style="color:rgb(44, 62, 80);">再执行宏任务中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile 和 setTimeout</font>`<font style="color:rgb(44, 62, 80);">，由于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">优先级高，先执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile</font>`<font style="color:rgb(44, 62, 80);">。但是处理时间长于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1ms</font>`<font style="color:rgb(44, 62, 80);">，因此会先执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的回调函数，输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">1</font>`<font style="color:rgb(44, 62, 80);">。这个阶段在执行过程中又会产生新的宏任务</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile</font>`<font style="color:rgb(44, 62, 80);">，因此又将该</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile 插入宏任务队列</font>`
- <font style="color:rgb(44, 62, 80);">最后由于只剩下宏任务了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">fs.readFile</font>`<font style="color:rgb(44, 62, 80);">，因此执行该宏任务，并等待处理完成后的回调，输出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">read file sync success</font>`<font style="color:rgb(44, 62, 80);">。</font>

```plain
// 结果
2
poll callback
1
read file success
read file sync success

```

**<font style="color:rgb(238, 63, 77);">Process.nextick() 和 Vue 的 nextick</font>**

![](/images/posts/1754917906965-1978fc03-e844-4070-b0f2-e072d80a18ef.png)

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node.js</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">和浏览器端宏任务队列的另一个很重要的不同点是，浏览器端任务队列每轮事件循环仅出队一个回调函数接着去执行微任务队列；而</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node.js</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">端只要轮到执行某个宏任务队列，则会执行完队列中所有的当前任务，但是当前轮次新添加到队尾的任务则会等到下一轮次才会执行。</font>

```plain
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
})
// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">上面介绍的都是</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">macrotask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">的执行情况，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">会在以上每个阶段完成后立即执行</font>

```plain
setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 以上代码在浏览器和 node 中打印情况是不同的
// 浏览器中一定打印 timer1, promise1, timer2, promise2
// node 中可能打印 timer1, timer2, promise1, promise2
// 也可能打印 timer1, promise1, timer2, promise2

```

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">中的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">会先于其他</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">执行</font>

![](/images/posts/1754917907085-9e50a79d-3141-48fa-bfe8-3eacd0d3bb44.png)

```plain
setTimeout(() => {
 console.log("timer1");

 Promise.resolve().then(function() {
   console.log("promise1");
 });
}, 0);

// poll阶段执行
fs.readFile('./test',()=>{
  // 在poll阶段里面 如果有setImmediate优先执行，setTimeout处于事件循环顶端 poll下面就是setImmediate
  setTimeout(()=>console.log('setTimeout'),0)
  setImmediate(()=>console.log('setImmediate'),0)
})

process.nextTick(() => {
 console.log("nextTick");
});
// nextTick, timer1, promise1,setImmediate,setTimeout

```

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">对于</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">来说，它会在以上每个阶段完成前清空</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">队列，下图中的</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Tick</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">就代表了</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">microtask</font>`

![](/images/posts/1754917909965-7f37e11c-fe4a-49d2-b469-0a0767881c53.png)

**<font style="color:rgb(238, 63, 77);">谁来启动这个循环过程，循环条件是什么？</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当 Node.js 启动后，会初始化事件循环，处理已提供的输入脚本，它可能会先调用一些异步的 API、调度定时器，或者</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">process.nextTick()</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，然后再开始处理事件循环。因此可以这样理解，Node.js 进程启动后，就发起了一个新的事件循环，也就是事件循环的起点。</font>

<font style="color:rgb(44, 62, 80);">总结来说，Node.js 事件循环的发起点有 4 个：</font>

- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Node.js</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">启动后；</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">回调函数；</font>
- `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">回调函数；</font>
- <font style="color:rgb(44, 62, 80);">也可能是一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">I/O</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">后的回调函数。</font>

**<font style="color:rgb(238, 63, 77);">无限循环有没有终点</font>**

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">当所有的微任务和宏任务都清空的时候，虽然当前没有任务可执行了，但是也并不能代表循环结束了。因为可能存在当前还未回调的异步 I/O，所以这个循环是没有终点的，只要进程在，并且有新的任务存在，就会去执行</font>

**<font style="color:rgb(238, 63, 77);">Node.js 是单线程的还是多线程的？</font>**

`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">主线程是单线程执行的</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，但是 Node.js</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">存在多线程执行</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">，多线程包括</font><font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setTimeout 和异步 I/O 事件</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">。其实 Node.js 还存在其他的线程，包括</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">垃圾回收、内存优化</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">等</font>

**<font style="color:rgb(238, 63, 77);">EventLoop 对渲染的影响</font>**

- <font style="color:rgb(44, 62, 80);">想必你之前在业务开发中也遇到过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestIdlecallback 和 requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);">，这两个函数在我们之前的内容中没有讲过，但是当你开始考虑它们在 Eventloop 的生命周期的哪一步触发，或者这两个方法的回调会在微任务队列还是宏任务队列执行的时候，才发现好像没有想象中那么简单。这两个方法其实也并不属于 JS 的原生方法，而是浏览器宿主环境提供的方法，因为它们牵扯到另一个问题：渲染。</font>
- <font style="color:rgb(44, 62, 80);">我们知道浏览器作为一个复杂的应用是多线程工作的，除了运行 JS 的线程外，还有渲染线程、定时器触发线程、HTTP 请求线程，等等。JS 线程可以读取并且修改 DOM，而渲染线程也需要读取 DOM，这是一个典型的多线程竞争临界资源的问题。所以浏览器就把这两个线程设计成互斥的，即同时只能有一个线程在执行</font>
- <font style="color:rgb(44, 62, 80);">渲染原本就不应该出现在 Eventloop 相关的知识体系里，但是因为 Eventloop 显然是在讨论 JS 如何运行的问题，而渲染则是浏览器另外一个线程的工作。但是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);">的出现却把这两件事情给关联起来</font>
- <font style="color:rgb(44, 62, 80);">通过调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">我们可以在下次渲染之前执行回调函数。那下次渲染具体是哪个时间点呢？渲染和 Eventloop 有什么关系呢？</font>
  - <font style="color:rgb(44, 62, 80);">简单来说，就是在每一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Eventloop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的末尾，</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">判断当前页面是否处于渲染时机，就是重新渲染</font>`
- <font style="color:rgb(44, 62, 80);">有屏幕的硬件限制，比如 60Hz 刷新率，简而言之就是 1 秒刷新了 60 次，16.6ms 刷新一次。这个时候浏览器的渲染间隔时间就没必要小于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">16.6ms</font>`<font style="color:rgb(44, 62, 80);">，因为就算渲染了屏幕上也看不到。当然浏览器也不能保证一定会每 16.6ms 会渲染一次，因为还会受到处理器的性能、JavaScript 执行效率等其他因素影响。</font>
- <font style="color:rgb(44, 62, 80);">回到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);">，这个 API 保证在下次浏览器渲染之前一定会被调用，实际上我们完全可以把它看成是一个高级版的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">setInterval</font>`<font style="color:rgb(44, 62, 80);">。它们都是在一段时间后执行回调，但是前者的间隔时间是由浏览器自己不断调整的，而后者只能由用户指定。这样的特性也决定了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">更适合用来做针对每一帧来修改的动画效果</font>
- <font style="color:rgb(44, 62, 80);">当然</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestAnimationFrame</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">不是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Eventloop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">里的宏任务，或者说它并不在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">Eventloop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的生命周期里，只是浏览器又开放的一个在渲染之前发生的新的 hook。另外需要注意的是微任务的认知概念也需要更新，在执行 animation callback 时也有可能产生微任务（比如 promise 的 callback），会放到 animation queue 处理完后再执行。所以微任务并不是像之前说的那样在每一轮 Eventloop 后处理，而是在 JS 的函数调用栈清空后处理</font>

<font style="color:rgb(44, 62, 80);">但是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestIdlecallback</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">却是一个更好理解的概念。当宏任务队列中没有任务可以处理时，浏览器可能存在“空闲状态”。这段空闲时间可以被</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">requestIdlecallback</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">利用起来执行一些优先级不高、不必立即执行的任务，如下图所示：</font>

![](/images/posts/1754917909581-051e9a10-ca6c-4390-946f-080880187281.png)

<h3 id="_19-垃圾回收">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_19-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6)<font style="color:rgb(44, 62, 80);">19 垃圾回收</font></h3>
+ <font style="color:rgb(44, 62, 80);">对于在JavaScript中的字符串，对象，数组是没有固定大小的，只有当对他们进行动态分配存储时，解释器就会分配内存来存储这些数据，当JavaScript的解释器消耗完系统中所有可用的内存时，就会造成系统崩溃。</font>
+ <font style="color:rgb(44, 62, 80);">内存泄漏，在某些情况下，不再使用到的变量所占用内存没有及时释放，导致程序运行中，内存越占越大，极端情况下可以导致系统崩溃，服务器宕机。</font>
+ <font style="color:rgb(44, 62, 80);">JavaScript有自己的一套垃圾回收机制，JavaScript的解释器可以检测到什么时候程序不再使用这个对象了（数据），就会把它所占用的内存释放掉。</font>
+ <font style="color:rgb(44, 62, 80);">针对JavaScript的来及回收机制有以下两种方法（常用）：标记清除，引用计数</font>
+ <font style="color:rgb(44, 62, 80);">标记清除</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">v8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。</font>

- <font style="color:rgb(44, 62, 80);">新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。</font>
- <font style="color:rgb(44, 62, 80);">新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行 Scavenge 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。</font>

**<font style="color:rgb(238, 63, 77);">这个算法分为三步：</font>**

- <font style="color:rgb(44, 62, 80);">首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 To 空间。</font>
- <font style="color:rgb(44, 62, 80);">如果对象不存活，则释放对象的空间。</font>
- <font style="color:rgb(44, 62, 80);">最后将 From 空间和 To 空间角色进行交换。</font>

**<font style="color:rgb(238, 63, 77);">新生代对象晋升到老生代有两个条件：</font>**

- <font style="color:rgb(44, 62, 80);">第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。</font>
- <font style="color:rgb(44, 62, 80);">第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决内存碎片的问题引入了标记压缩法。</font>

<font style="color:rgb(44, 62, 80);">由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 V8 引入了增量标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行</font>

<h3 id="_20-内存泄露">[<font style="color:rgb(62, 175, 124);"> </font>](https://interview.poetries.top/docs/base/improve.html#_20-%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2)<font style="color:rgb(44, 62, 80);">20 内存泄露</font></h3>
+ <font style="color:rgb(44, 62, 80);">意外的全局变量: 无法被回收</font>
+ <font style="color:rgb(44, 62, 80);">定时器: 未被正确关闭，导致所引用的外部变量无法被释放</font>
+ <font style="color:rgb(44, 62, 80);">事件监听: 没有正确销毁 (低版本浏览器可能出现)</font>
+ <font style="color:rgb(44, 62, 80);">闭包</font>
    - <font style="color:rgb(44, 62, 80);">第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。</font>
    - <font style="color:rgb(44, 62, 80);">第二种情况是我们设置了setInterval定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。</font>
    - <font style="color:rgb(44, 62, 80);">第三种情况是我们获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。</font>
    - <font style="color:rgb(44, 62, 80);">第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。</font>
+ `<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">dom</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">引用:</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">dom</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">元素被删除时，内存中的引用未被正确清空</font>
+ <font style="color:rgb(44, 62, 80);">控制台</font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">console.log</font>`<font style="color:rgb(44, 62, 80);">打印的东西</font>

<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);">可用 </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">chrome</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> 中的 </font>`<font style="color:rgb(238, 39, 70);background-color:rgb(249, 241, 219);">timeline</font>`<font style="color:rgb(85, 85, 85);background-color:rgb(255, 249, 249);"> 进行内存标记，可视化查看内存的变化情况，找出异常点。</font>
