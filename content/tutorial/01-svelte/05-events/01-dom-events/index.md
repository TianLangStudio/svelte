---
title: DOM事件
---

就像在先前练习中见过的，我们可以通过使用`on<name>`形式的函数监听Dom元素的事件（例如：单击事件，[指针移动事件](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)）
> As we've briefly seen already, you can listen to any DOM event on an element (such as click or [pointermove](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)) with an `on<name>` function:

```svelte
/// file: App.svelte
<div +++onpointermove={onpointermove}+++>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
```

跟其它属性一样，如果属性和值名称一样我们就可以使用简写形式:
> Like with any other property where the name matches the value, we can use the short form:

```svelte
/// file: App.svelte
<div +++{onpointermove}+++>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
```
