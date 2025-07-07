---
title: 布局数据
path: /blog
---

就像`+layout.svelte`可以为所有子路由创建用户界面，`+layout.server.js`可以为所有子路由加载数据.
比如我们现在页面上添加个 `more posts(更多内容)`按钮，我们可以在`src/routes/blog/[slug]/+page.server.js`中的`load`函数中返回`summaries`用于显示更多博客内容. 但这样做显得功能有些重复. 我们可以把`src/rotues/blog/+page.server.js`更名为`src/routes/blog/+layout.server.js`. 这样并不会影响`/blog`路由并且在页面中仍然可以使用`data.summeries`.    
接下来修改博客页面：
> Just as `+layout.svelte` files create UI for every child route, `+layout.server.js` files load data for every child route.
> Suppose we'd like to add a 'more posts' sidebar to our blog post page. We _could_ return `summaries` from the `load` function in `src/routes/blog/[slug]/+page.server.js`, like we do in `src/routes/blog/+page.server.js`, but that would be repetitive.
> Instead, let's rename `src/routes/blog/+page.server.js` to `src/routes/blog/+layout.server.js`. Notice that the `/blog` route continues to work — `data.summaries` is still available to the page.
> Now, add a sidebar in the layout for the post page:

```svelte
/// file: src/routes/blog/[slug]/+layout.svelte
<script>
	let { data, children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>

+++	<aside>
		<h2>More posts</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/blog/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>+++
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
```

是不是很神奇?! 这是因为所有子布局和子页面都从`+layout.server.js`继承了`data.summaries`.
> The layout (and any page below it) inherits `data.summaries` from the parent `+layout.server.js`.

当我们从一个博客导航到另一个博客时只需要加载博客自己的数据就可以了——布局相关的数据已经加载好了. 了解更多内容请查看相关文档[invalidation](/docs/kit/load#Rerunning-load-functions)    

> When we navigate from one post to another, we only need to load the data for the post itself — the layout data is still valid. See the documentation on [invalidation](/docs/kit/load#Rerunning-load-functions) to learn more.
