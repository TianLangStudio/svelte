---
title: 嵌套组件
---

明智如你，应该不会整个应用就整一个组件吧？贴心的Svelte也想到了，我们可以从其它文件中引入组件并在标签中使用它们，以此支持组合多个组件
> It would be impractical to put your entire app in a single component. Instead, we can import components from other files and include them in our markup.

首先在文件`App.svelte`的顶部添加`<script>`标签并引入`Nested.svelte`
> Add a `<script>` tag to the top of `App.svelte` that imports `Nested.svelte`...

```svelte
/// file: App.svelte
+++<script>
	import Nested from './Nested.svelte';
</script>+++
```

接下来就可以在标签中使用`<Nested>`组件了
> ...and include a `<Nested />` component:

```svelte
/// file: App.svelte
<p>This is a paragraph.</p>
+++<Nested />+++
```

注意看：虽然在`Nested.svelte`中也有个`<p>`元素但`App.svelte`中的样式并没有影响到它。
> Notice that even though `Nested.svelte` has a `<p>` element, the styles from `App.svelte` don't leak in.

> [!NOTE] 为了区别于HTML原生元素，组件的标签名称采用首字母大写.
> [!NOTE] Component names are capitalised, to distinguish them from HTML elements.
