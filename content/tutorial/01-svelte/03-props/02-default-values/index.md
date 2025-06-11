---
title: 默认值
---

在`Nested.svelte`可以很容易的为属性设定默认值：
> We can easily specify default values for props in `Nested.svelte`:

```svelte
/// file: Nested.svelte
<script>
	let { answer +++= 'a mystery'+++ } = $props();
</script>
```

现在再添加个组件不给它设置`answer`属性值，它就会用默认值。
> If we now add a second component _without_ an `answer` prop, it will fall back to the default:

```svelte
/// file: App.svelte
<Nested answer={42}/>
+++<Nested />+++
```

哦！默认值，让我想起了备胎兄弟，常在却总在等待被想起。