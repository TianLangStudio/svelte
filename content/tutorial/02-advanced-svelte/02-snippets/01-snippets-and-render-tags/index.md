---
title: 代码片段和渲染标签
---

小主，在组件中即使不把代码片段(Snippets)抽取到一个新文件中也能复用. 
在这个练习中我们需要创建一个包含[三只聪明的猴子]的表格，现在我们只有一个猴子🐒。 
我们可以通过复制粘贴或者创建一个包含`{ emoji, description }` 对象的数组，然后使用`{#each ...}`代码块实现。  
但我们更推荐把标签封装成可以复用的代码片段：  
首先我们先 _定义代码片段_:   
> Snippets allow you to reuse content within a component, without extracting it out into a separate file.
In this exercise, we're creating a table of the [three wise monkeys](https://en.wikipedia.org/wiki/Three_wise_monkeys), along with their unicode escape sequences and HTML entities. So far, we have but a single monkey.
> We could duplicate the markup, of course. Or we could create an array of `{ emoji, description }` objects and pass it into an `{#each ...}` block. But a neater solution is to encapsulate the markup in a reusable block.
> Begin by _declaring a snippet_:

```svelte
/// file: App.svelte
+++{#snippet monkey()}+++
	<tr>
		<td>{emoji}</td>
		<td>{description}</td>
		<td>\u{emoji.charCodeAt(0).toString(16)}\u{emoji.charCodeAt(1).toString(16)}</td>
		<td>&amp#{emoji.codePointAt(0)}</td>
	</tr>
+++{/snippet}+++
```

我们需要用 _render(渲染)_ 使猴子可见：
> The monkey is no longer visible until we _render_ it. Let's do that:

```svelte
/// file: App.svelte
<tbody>
	{#snippet monkey()}...{/snippet}

	+++{@render monkey()}+++
</tbody>
```

为了让代码片段适用于其它猴子，我们需要给代码片段添加上参数。对！代码片段像函数一样还支持参数：
> Before we can use the snippet for the rest of our monkeys, we need to pass data into the snippet. Snippets can have zero or more parameters:

```svelte
/// file: App.svelte
<tbody>
	+++{#snippet monkey(emoji, description)}...{/snippet}+++

	+++{@render monkey('🙈', 'see no evil')}+++
</tbody>
```

> [!NOTE] 你也可以使用解构语法使用参数
> [!NOTE] You can also use destructured parameters, if you like.

添加剩余的猴子：
> Add the rest of the monkeys:

- `'🙈', 'see no evil'`
- `'🙉', 'hear no evil'`
- `'🙊', 'speak no evil'`

最后删掉`<script>`代码块，因为已经不需要了：
> Finally, delete the `<script>` block we no longer need it:

```svelte
/// file: App.svelte
---<script>
	let emoji = '🙈';
	let description = 'see no evil';
</script>---
```

> [!NOTE] 我们可以在组件的任何地方定义代码片段，但跟函数一样它只对相同作用域或子作用域的渲染标签可见。
> [!NOTE] Snippets can be declared anywhere in your component, but, like functions, are only visible to render tags in the same 'scope' or a child scope.
