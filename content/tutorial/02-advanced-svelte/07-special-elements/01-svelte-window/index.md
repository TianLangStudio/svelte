---
title: <svelte:window>
---

小主是不是也在想怎么往`window`对象上添加事件处理器? 贴心的Svelte提供了`<svelte:window>`这样小主就可以仍然使用标签的形式给`window`对象添加事件处理函数了。 来把`onkeydown`给`window`添加上:    
> Just as you can add event listeners to any DOM element, you can add event listeners to the `window` object with `<svelte:window>`.
> We've already got an `onkeydown` function declared — now all we need to do is wire it up:

```svelte
/// file: App.svelte
<svelte:window +++{onkeydown}+++ />
```
