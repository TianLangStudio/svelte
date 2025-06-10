---
title: 状态监测Inspecting state
---

小主可能经常需要跟踪某个状态的变化情况，特别是在排查Bug的时候。
> It's often useful to be able to track the value of a piece of state as it changes over time.

小主是不是想到了使用`console.log`, 就像在`addNumber`中那样！？但是当打开浏览器控制台（可以点击地址栏右边的按钮打开），你会看到一条消息说“这条消息是不可克隆的”。
> Inside the `addNumber` function, we've added a `console.log` statement. But if you click the button and open the console drawer (using the button to the right of the URL bar), you'll see a warning, and a message saying the message could not be cloned.

别急小主，这是因为`numbers`是个响应[代理](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), 我们有几种方法可以修复这个问题，比如使用`$state.snapshot(...)`创建一个非响应的 _快照_ ：
> That's because `numbers` is a reactive [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). There are a couple of things we can do. Firstly, we can create a non-reactive _snapshot_ of the state with `$state.snapshot(...)`:

```js
/// file: App.svelte
function addNumber() {
	numbers.push(numbers.length + 1);
	console.log(+++$state.snapshot(numbers)+++);
}
```
另外我们还可以使用`$inspect`符文（rune）自动地在状态改变时记录下它的快照。更贴心地是这些代码会在正式发布应用时（为正式生产构建时）自动剔除：
> Alternatively, we can use the `$inspect` rune to automatically log a snapshot of the state whenever it changes. This code will automatically be stripped out of your production build:

```js
/// file: App.svelte
function addNumber() {
	numbers.push(numbers.length + 1);
	---console.log($state.snapshot(numbers));---
}

+++$inspect(numbers);+++
```

另外还可以使用`$inspect(...).with(fn)`自定义信息展示方式。比如可以使用`console.trace`查看状态是在什么地方被改变的。
> You can customise how the information is displayed by using `$inspect(...).with(fn)` — for example, you can use `console.trace` to see where the state change originated from:

```js
/// file: App.svelte
$inspect(numbers)+++.with(console.trace)+++;
```

小主，你说Svelte是不是很贴心?!