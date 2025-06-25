---
title: 绑定到组件实例
---

小主还可以使用`bind:this`绑定到组件实例本身哦。
这在需要以编程方式与组件交互（而不是通过提供更新的 props）的罕见情况下非常有用。回顾我们在[前几节练习](actions)中的画布应用，添加一个清除屏幕的按钮会很不错。
首先，让我们从 `Canvas.svelte` 中导出一个函数：
> Just as you can bind to DOM elements, you can bind to component instances themselves with `bind:this`.
> This is useful in the rare cases that you need to interact with a component programmatically (rather than by providing it with updated props). Revisiting our canvas app from [a few exercises ago](actions), it would be nice to add a button to clear the screen.
> First, let's export a function from `Canvas.svelte`:

```svelte
/// file: Canvas.svelte
let canvas = $state();
let context = $state();
let coords = $state();

+++export function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}+++
```
然后，创建一个对组件实例的引用：
> Then, create a reference to the component instance:

```js
/// file: App.svelte
let selected = $state(colors[0]);
let size = $state(10);
let showMenu = $state(true);

+++let canvas;+++
```

```svelte
/// file: App.svelte
<Canvas +++bind:this={canvas}+++ color={selected} size={size} />
```

最后，添加一个调用 clear 函数的按钮：
> Finally, add a button that calls the `clear` function:

```svelte
/// file: App.svelte
<div class="controls">
	<button class="show-menu" onclick={() => showMenu = !showMenu}>
		{showMenu ? 'close' : 'menu'}
	</button>

+++	<button onclick={() => canvas.clear()}>
		clear
	</button>+++
</div>
```
