---
title: 多选列表框
---

小主，你是不是想起了另一个能实现多选的Dom元素。
没错，只要给`select`添加上`multiple`属性它就可以多选了, 它的值就是个数组了。
来动手试下，把复选框换成`<select multiple>`
> A `<select>` element can have a `multiple` attribute, in which case it will populate an array rather than selecting a single value.
> Replace the checkboxes with a `<select multiple>`:

```svelte
/// file: App.svelte
<h2>Flavours</h2>

+++<select multiple bind:value={flavours}>+++
	{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
+++		<option>{flavour}</option>+++
	{/each}
+++</select>+++
```

注意我们省略掉了`<option>`的`value`属性，因为可以直接从它的内容确定它的值。
> Note that we're able to omit the `value` attribute on the `<option>`, since the value is identical to the element's contents.

> [!NOTE] 需要按着 `control` (Ctrl)键 (`command`键如果你用的是MacOS)多选.
> [!NOTE] Press and hold the `control` key (or the `command` key on MacOS) to select multiple options.
