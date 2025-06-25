---
title: 尺寸
---

小主可以为任何元素添加 `clientWidth`、`clientHeight`、`offsetWidth` 和 `offsetHeight` 绑定，贴心的Svelte会使用 [`ResizeObserver`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver) 更新绑定的值：
> You can add `clientWidth`, `clientHeight`, `offsetWidth` and `offsetHeight` bindings to any element, and Svelte will update the bound values using a [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver):

```svelte
/// file: App.svelte
<div +++bind:clientWidth={w} bind:clientHeight={h}+++>
	<span style="font-size: {size}px" contenteditable>{text}</span>
	<span class="size">{w} x {h}px</span>
</div>
```
这些绑定是只读的——更改`w`和`h`的值不会对元素产生任何影响。
> [!NOTE] display: inline 元素没有宽度或高度（除了具有“固有”尺寸的元素，如 <img> 和 <canvas>），并且无法使用 ResizeObserver 进行观察。小主需要将这些元素的 display 样式更改为其他值，例如 inline-block。

> These bindings are readonly — changing the values of `w` and `h` won't have any effect on the element.
> [!NOTE] `display: inline` elements do not have a width or height (except for elements with 'intrinsic' dimensions, like `<img>` and `<canvas>`), and cannot be observed with a `ResizeObserver`. You will need to change the `display` style of these elements to something else, such as `inline-block`.
