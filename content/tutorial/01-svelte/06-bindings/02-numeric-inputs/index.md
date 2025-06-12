---
title: 数字输入框
---

在Dom元素中所有的输入都是字符串，即使为输入框设置了type属性：`type="number"` 或者 `type="range"`。所以我们在处理输入值时就要记得转换类型。
但是在使用`bind:value`时就不需要担心了，贴心的Svelte已经帮我们处理好了。
> In the DOM, every input value is a string. That's unhelpful when you're dealing with numeric inputs — `type="number"` and `type="range"` — as it means you have to remember to coerce `input.value` before using it.
> With `bind:value`, Svelte takes care of it for you:

```svelte
/// file: App.svelte
<label>
	<input type="number" +++bind:+++value={a} min="0" max="10" />
	<input type="range" +++bind:+++value={a} min="0" max="10" />
</label>

<label>
	<input type="number" +++bind:+++value={b} min="0" max="10" />
	<input type="range" +++bind:+++value={b} min="0" max="10" />
</label>
```
