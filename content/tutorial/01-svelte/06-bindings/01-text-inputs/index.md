---
title: 文本输入框
---

小主！这里有一条大道法则：在Svelte中数据流总是从上到下的，也就是说你可以在父组件中给子组件设置属性，在子组件中再给Dom元素设置属性，如果颠倒了会气血逆流走火入魔哦！
> As a general rule, data flow in Svelte is _top down_ — a parent component can set props on a child component, and a component can set attributes on an element, but not the other way around.

但有时候我们也需要打破一些规则，有道是不破不立。举个例子：在组件中我们想获取`<input>`输入框的值并赋值给变量`name`, 按照以前的方式我们可能使用`oninput`事件处理函数获取`event.target.value`并赋值给`name`. 但是这看起来不是很高级,需要处理的表单元素越多就越别扭。
因此强大贴心的Svelte提供了`bind:value`指令:
> Sometimes it's useful to break that rule. Take the case of the `<input>` element in this component — we _could_ add an `oninput` event handler that sets the value of `name` to `event.target.value`, but it's a bit... boilerplatey. It gets even worse with other form elements, as we'll see.
> Instead, we can use the `bind:value` directive:

```svelte
/// file: App.svelte
<input +++bind:+++value={name}>
```
这样不但状态`name`变化时会更新输入框的值，输入框的值改变了也会更新`name`。
其它的不说，就看这代码量是不是一下就少了很多。小主快夸我!💕
> This means that not only will changes to the value of `name` update the input value, but changes to the input value will update `name`.
