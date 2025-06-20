---
title: 给组件传递代码片段
---

代码片段就像函数一样，也可以把它做为组件的属性(props)值.  
举个例子🌰：
组件`<FilteredList>`负责从`data`中过滤数据，至于过滤后的结果怎么显示由它的父组件负责.  
我们已经定义好了一些代码片段，可以把它们传递给`<FilteredList>`:  
> Since snippets — like functions — are just values, they can be passed to components as props.
> Take this `<FilteredList>` component. Its job is to filter the `data` that gets passed into it, but it has no opinions about how that data should be rendered — that's the responsibility of the parent component.
> We've already got some snippets defined. Begin by passing them into the `<FilteredList>`:

```svelte
/// file: App.svelte
<FilteredList
	data={colors}
	field="name"
	+++{header}+++
	+++{row}+++
></FilteredList>
```

然后在`FilteredList.svelte`中定义属性`header`和`row`:  
> Then, on the other side, declare `header` and `row` as props:

```svelte
/// file: FilteredList.svelte
<script>
	let { data, field, +++header, row+++ } = $props();

	// ...
</script>
```

最后渲染代码片段: 
> Finally, replace the placeholder content with render tags:

```svelte
/// file: FilteredList.svelte
<div class="header">
	+++{@render header()}+++
</div>

<div class="content">
	{#each filtered as d}
		+++{@render row(d)}+++
	{/each}
</div>
```

So easy，妈妈再也不用担心我记不住`MistyRose`和`PeachPuff`里的16进制代码了. 
> Never again will you have to memorize the hex code for `MistyRose` or `PeachPuff`.
