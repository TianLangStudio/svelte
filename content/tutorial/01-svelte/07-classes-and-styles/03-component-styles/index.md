---
title: 组件样式
---

我们经常需要调整子组件的样式。 比如把这些盒子分别设置成红色绿色和蓝色。
一种方式是在CSS中使用`:global`，它可以让你任意的修改其它组件中的目标元素样式:
> Often, you need to influence the styles inside a child component. Perhaps we want to make these boxes red, green and blue.
> One way to do this is with the `:global` CSS modifier, which allows you to indiscriminately target elements inside other components:

```svelte
/// file: App.svelte
<style>
	.boxes :global(.box:nth-child(1)) {
		background-color: red;
	}

	.boxes :global(.box:nth-child(2)) {
		background-color: green;
	}

	.boxes :global(.box:nth-child(3)) {
		background-color: blue;
	}
</style>
```

但我们不推荐这么做。首先，这种方式极其冗长。其次，它不够稳固 —— 对 `Box.svelte` 的实现细节所做的任何更改都可能破坏这些CSS选择器。
更主要的，这很不礼貌。组件应当能够自行决定哪些样式是可以从“外部”进行控制的，就像它们决定哪些变量会被作为属性(props)公开一样。`：global` 应该被用作一种应急手段 —— 一种最后的解决方案。
我们可以在 `Box.svelte` 文件中，将 `background-color` 的值修改为由一个 [CSS 自定义属性](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)确定：
> But there are lots of reasons _not_ to do that. For one thing, it's extremely verbose. For another, it's brittle — any changes to the implementation details of `Box.svelte` could break the selector.
> Most of all though, it's rude. Components should be able to decide for themselves which styles can be controlled from 'outside', in the same way they decide which variables are exposed as props. `:global` should be used as an escape hatch — a last resort.
> Inside `Box.svelte`, change `background-color` so that it is determined by a [CSS custom property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

```svelte
/// file: Box.svelte
<style>
	.box {
		width: 5em;
		height: 5em;
		border-radius: 0.5em;
		margin: 0 0 1em 0;
		background-color: +++var(--color, #ddd)+++;
	}
</style>
```

所有的父类元素（例如`<div class="boxes">`）都可以设置`--color`的值，我们也可以为每个组件单独设置。
> Any parent element (such as `<div class="boxes">`) can set the value of `--color`, but we can also set it on individual components:

```svelte
/// file: App.svelte
<div class="boxes">
	<Box +++--color="red"+++ />
	<Box +++--color="green"+++ />
	<Box +++--color="blue"+++ />
</div>
```

像其它的属性一样，也可以动态设置`--color`.
> The values can be dynamic, like any other attribute.

> [!NOTE] 偷偷的告诉你，这个功能是通过把组件包含在一个`display:contents`的元素里，通过这个元素应用自定义属性。生成的Dom结构就像：

> [!NOTE] This feature works by wrapping each component in an element with `display: contents`, where needed, and applying the custom properties to it. If you inspect the elements, you'll see markup like this:
>
> ```svelte
> <svelte-css-wrapper style="display: contents; --color: red;">
> 	<!-- contents -->
> </svelte-css-wrapper>
> ```
>
> 虽然`display:contents`不会影响Dom布局，但会影响一些CSS选择器，像：`.parent > .child`. 要留意哦，小主.

> Because of `display: contents` this won't affect your layout, but the extra element _can_ affect selectors like `.parent > .child`.
