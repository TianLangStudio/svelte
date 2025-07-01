---
title: <svelte:body>
---

前面已经介绍过`<svelte:window>`和`<svelte:document>`了，类似得还有`<svelte:body>`, 像先前提到的尽量用它绑定`mouseenter`和`mouseleave`事件处理函数:

> Similar to `<svelte:window>` and `<svelte:document>`, the `<svelte:body>` element allows you to listen for events that fire on `document.body`. This is useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`.
> Add `onmouseenter` and `onmouseleave` handlers to the `<svelte:body>` tag...

```svelte
/// file: App.svelte
<svelte:body
	+++onmouseenter={() => hereKitty = true}+++
	+++onmouseleave={() => hereKitty = false}+++
/>
```

小主人可以划拉下鼠标看下效果了。
> ...and hover over the `<body>`.
