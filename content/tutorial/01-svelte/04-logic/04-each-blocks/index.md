---
title: Each代码块
---

小主，接下来这一招不但威力大，用好了还能帮你节省大量元气。
在开发时我们经常需要跟列表数据打交道。比如在这个练习里我们需要重复使用`<button>`标签好几次，每次就是改下颜色，还不知道啥时侯添加完。
与其这样费体力的复制粘贴不如使用`each`代码块:
> When building user interfaces you'll often find yourself working with lists of data. In this exercise, we've repeated the `<button>` markup multiple times — changing the colour each time — but there's still more to add.
> Instead of laboriously copying, pasting and editing, we can get rid of all but the first button, then use an `each` block:

```svelte
/// file: App.svelte
<div>
	+++{#each colors as color}+++
		<button
			style="background: red"
			aria-label="red"
			aria-current={selected === 'red'}
			onclick={() => selected = 'red'}
		></button>
	+++{/each}+++
</div>
```

> [!NOTE] 注意这里的表达式 (`colors`) 可以是任何可迭代的对象，也就是像数组的对象, 换句话说只要能用在[`Array.from`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)的都可以。

> [!NOTE] The expression (`colors`, in this case) can be any iterable or array-like object — in other words, anything that works with [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

现在我们可以把`"red"`换成`color`变量
> Now we need to use the `color` variable in place of `"red"`:

```svelte
/// file: App.svelte
<div>
	{#each colors as color}
		<button
			style="background: +++{color}+++"
			aria-label=+++{color}+++
			aria-current={selected === +++color+++}
			onclick={() => selected = +++color+++}
		></button>
	{/each}
</div>
```

你还可以使用第二个参数获取当前元素在列表中的 _索引_
> You can get the current _index_ as a second argument, like so:

```svelte
/// file: App.svelte
<div>
	{#each colors as color, +++i}+++
		<button
			style="background: {color}"
			aria-label={color}
			aria-current={selected === color}
			onclick={() => selected = color}
		>+++{i + 1}+++</button>
	{/each}
</div>
```
