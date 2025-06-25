---
title: This
---

小主还可以使用特殊的 `bind:this` 指令来获取组件中元素的只读绑定。
本练习中的 `$effect` 尝试创建一个画布上下文，但 `canvas` 是 `undefined`。首先在组件的顶层声明它：

> You can use the special `bind:this` directive to get a readonly binding to an element in your component.
> The `$effect` in this exercise attempts to create a canvas context, but `canvas` is `undefined`. Begin by declaring it at the top level of the component...

```svelte
/// file: App.svelte
<script>
	import { paint } from './gradient.js';

	+++let canvas;+++

	$effect(() => {
		// ...
	});
</script>
```
然后将`bind:this`添加到 <canvas> 元素：
> ...then add the directive to the `<canvas>` element:

```svelte
/// file: App.svelte
<canvas +++bind:this={canvas}+++ width={32} height={32}></canvas>
```
偷偷告诉你`canvas`的值在组件挂载之前都是`undefined` —— 也就是您无法在`$effect`运行之前访问它
> Note that the value of `canvas` will remain `undefined` until the component has mounted — in other words you can't access it until the `$effect` runs.
