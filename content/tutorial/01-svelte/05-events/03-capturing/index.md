---
title: 事件捕获
---

正常情况下事件处理函数会在事件[冒泡](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling)时被触发, 请小主注意观察，在这个示例中当你向`input`输入内容时，内部的事件处理函数会被优先触发,然后是其它处理函数，因为事件的冒泡顺序是从目标对象到document。
能不能在 _捕获_ 阶段就触发事件处理函数呢?! 当然可以，在强大的Svelte帮助下只需要在事件名称后面添加上`capture`:
> Normally, event handlers run during the [_bubbling_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling) phase. Notice what happens if you type something into the `<input>` in this example — the inner handler runs first, as the event 'bubbles' from the target up to the document, followed by the outer handler.
Sometimes, you want handlers to run during the _capture_ phase instead. Add `capture` to the end of the event name:

```svelte
/// file: App.svelte
<div onkeydown+++capture+++={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydown+++capture+++={(e) => alert(`<input> ${e.key}`)} />
</div>
```

现在事件处理函数的触发顺序就像网络热点事件一样出现反转了。另外小主还需要记得`caputre`事件触发函数会优先于非`capture`函数被触发哦。
> Now, the relative order is reversed. If both capturing and non-capturing handlers exist for a given event, the capturing handlers will run first.
