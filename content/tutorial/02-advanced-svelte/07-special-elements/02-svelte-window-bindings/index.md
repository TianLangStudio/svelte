---
title: <svelte:window>绑定
---

不单可以给 _window_ 对象添加事件处理函数哦，还支持绑定某些属性呢，比如:`scrollY`:    
> We can also bind to certain properties of _window_ , such as `scrollY`:

```svelte
/// file: App.svelte
<svelte:window +++bind:scrollY={y}+++ />
```

支持绑定的`window`属性有：    
> The list of properties you can bind to is as follows:

- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — 就是`window.navigator.onLine`

其中除了`scrollX`和`scrollY`都是只读的.
> All except `scrollX` and `scrollY` are readonly.
