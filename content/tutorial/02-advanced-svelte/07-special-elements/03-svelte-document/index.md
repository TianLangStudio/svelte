---
title: <svelte:document>
---

支持了`window`当然也不能忘了`document`不是，毕竟有些事件还非得在`document`上触发, 比如: `selectionchange` .   
来使用`<svelte:document>`给`document`对象添加上`onselectionchange`事件处理函数:    
> The `<svelte:document>` element allows you to listen for events that fire on `document`. This is useful with events like `selectionchange`, which doesn't fire on `window`.
> Add the `onselectionchange` handler to the `<svelte:document>` tag:

```svelte
/// file: App.svelte
<svelte:document +++{onselectionchange}+++ />
```

偷偷告诉尽量避免在`document`元素上使用`mouseenter`和`mouseleave`哦，因为有些浏览器不支持，可以用在`<svelte:body>`上. 这都是技巧  
> [!NOTE] Avoid `mouseenter` and `mouseleave` handlers on this element, as these events are not fired on `document` in all browsers. Use `<svelte:body>` instead.
