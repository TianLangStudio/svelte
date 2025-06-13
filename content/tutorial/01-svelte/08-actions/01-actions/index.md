---
title: use指令
---

嘿小主，恭喜你突破了💕! 接下来我们修炼些动作（Actions）。如果你先前接触过React可能感觉跟它的自定义hook有点像。
动作(Actions)其实就是一些跟Dom元素同生共死的函数，在解决某些问题时还是很有用滴，比如：

- 跟第三方库交互
- 懒加载图片
- 提示信息（tooltips）
- 添加自定义事件处理器

> Actions are essentially element-level lifecycle functions. They're useful for things like:

> - interfacing with third-party libraries
> - lazy-loaded images
> - tooltips
> - adding custom event handlers

举个例子🌰：这有个画布`<canvas>`, 你可以在目录里调整刷子的颜色和大小。随便画吧，直抒胸臆，把你一腔豪情或者郁闷倾注到刷子上。一画开天地，二画分阴阳，三画可以先停下，先完成练习吧，小主。
当你打开目录时（默认应该已经打开了，如果没有打开自行点击`memu`按钮），不要用鼠标去选择颜色，尝试使用Tab键。有没有发现个问题？按Tab键无效，直到用鼠标点击下目录面板让它获得鼠标焦点. 做为一个贴心的开发者是不是可以让目录面板打开时自动获取焦点？
我们可以这样做：
首先从`actions.svelte.js`引入`trapFocus`
> In this app, you can scribble on the `<canvas>`, and change colours and brush size via the menu. But if you open the menu and cycle through the options with the Tab key, you'll soon find that the focus isn't _trapped_ inside the modal.
> We can fix that with an action. Import `trapFocus` from `actions.svelte.js`...

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	+++import { trapFocus } from './actions.svelte.js';+++

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

	let selected = $state(colors[0]);
	let size = $state(10);
	let showMenu = $state(true);
</script>
```

然后使用`use`指令把`trapFocus`添加到目录面板上:
> ...then add it to the menu with the `use:` directive:

```svelte
/// file: App.svelte
<div class="menu" +++use:trapFocus+++>
```

接下来我们还得一起看下`trapFocus`函数呢。
这就是个动作 —— 所谓动作与Dom元素(这里就是`<div class=""menu>`)同生共死————当元素被挂载到Dom上时被调用, 当元素被卸载时记得自行销毁。
在动作`trapFocus`中我们使用了[效应(effect)](effects)
在效应(effect)中注册了个处理Tab键按下操作的事件监听：
> Let's take a look at the `trapFocus` function in `actions.svelte.js`. An action function is called with a `node` — the `<div class="menu">` in our case — when the node is mounted to the DOM. Inside the action, we have an [effect](effects).
> First, we need to add an event listener that intercepts Tab key presses:

```js
/// file: actions.svelte.js
$effect(() => {
	focusable()[0]?.focus();
	+++node.addEventListener('keydown', handleKeydown);+++
});
```
当Dom元素被卸载时，我们需要清理下事件监听，然后把聚焦还原：
> Second, we need to do some cleanup when the node is unmounted — removing the event listener, and restoring focus to where it was before the element mounted:

```js
/// file: actions.svelte.js
$effect(() => {
	focusable()[0]?.focus();
	node.addEventListener('keydown', handleKeydown);

+++	return () => {
		node.removeEventListener('keydown', handleKeydown);
		previous?.focus();
	};+++
});
```
问题解决了，小主可以再试下，记得快点回来哦。
> Now, when you open the menu, you can cycle through the options with the Tab key.
