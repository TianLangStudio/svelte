---
title: 输入框组
---

小主，又一个新的指令`bind:group`。
当需要把多个单选框或复选框组合起来使用时可以用这个指令。绑定到相同组的单选框互相排它也就是同时只会有个单选框被选中, 如果是复选框绑定的值就是包含所有选中的复选框值的数组。
快动手试下吧，给单选框添加上`bind:group={scoops}`：
> If you have multiple `type="radio"` or `type="checkbox"` inputs relating to the same value, you can use `bind:group` along with the `value` attribute. Radio inputs in the same group are mutually exclusive; checkbox inputs in the same group form an array of selected values.
> Add `bind:group={scoops}` to the radio inputs...

```svelte
/// file: App.svelte
<input
	type="radio"
	name="scoops"
	value={number}
	+++bind:group={scoops}+++
/>
```

再给复选框添加上`bind:group={flavours}`
> ...and `bind:group={flavours}` to the checkbox inputs:

```svelte
/// file: App.svelte
<input
	type="checkbox"
	name="flavours"
	value={flavour}
	+++bind:group={flavours}+++
/>
```
