---
title: 隐式属性
---

小主，贴心的Svelte还提供了个方便的功能哦,你可以把代码片段`header`和`row`移动到标签`<FilteredList>`里, 然后删掉属性`{header}`和`{row}`:
> As an authoring convenience, snippets declared directly inside components become props _on_ those components. Take the `header` and `row` snippets and move them inside `<FilteredList>`:

```svelte
/// file: App.svelte
<FilteredList
	data={colors}
	field="name"
	 ---{header} {row}---
>
	+++{#snippet header()}...{/snippet}+++

	+++{#snippet row(d)}...{/snippet}+++
</FilteredList>

--- {#snippet header()}...{/snippet} ---

--- {#snippet row(d)}...{/snippet} ---
```

你会发现代码仍然可以正常运行，这是因为贴心的Svelte把声明在组件标签内部的代码片段自动添加到了组件属性上，这样小主就可以少敲几下键盘了。另外组件标签内部没有声明为代码片段的代码块会添加为`children`属性。  
我们可以去掉`header`代码块的代码片段声明, 然后在组件`FilteredList`内部就可以把属性`header`换成`children`了: 
> Any content inside a component that is _not_ part of a declared snippet becomes a special `children` snippet. Since `header` has no parameters, we can turn it into `children` by removing the block tags...
> ...and renaming the `header` prop to `children` on the other side:

```svelte
/// file: App.svelte
---{#snippet header()}---
<header>
	<span class="color"></span>
	<span class="name">name</span>
	<span class="hex">hex</span>
	<span class="rgb">rgb</span>
	<span class="hsl">hsl</span>
</header>
---{/snippet}---
```
```svelte
/// file: FilteredList.svelte
<script>
	let { data, field, +++children+++, row } = $props();

	// ...
</script>
```
```svelte
/// file: FilteredList.svelte
<div class="header">
	+++{@render children()}+++
</div>
```

是不是方便一些了， 快夸夸我💕💕💕   
