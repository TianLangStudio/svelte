---
title: 布局Layouts
---

聪明伶俐有追求的小主应该已经注意到了`src/routes/+page.svelte`和`src/routes/about/+page.svelte`的导航部分是一样的。 能不能只写一次让需要的页面都可以共用呢。这就是`+layout.svelte`会帮我们解决。我们可以把相同的部分写到`+layout.svelte`里，相同路由下的所有路由都会使用这个布局. 添加`src/routes/+layout.svelte`文件:
> Different routes of your app will often share common UI. Instead of repeating it in each `+page.svelte` component, we can use a `+layout.svelte` component that applies to all routes in the same directory.
> In this app we have two routes, `src/routes/+page.svelte` and `src/routes/about/+page.svelte`, that contain the same navigation UI. Let's create a new file, `src/routes/+layout.svelte`...

```
src/routes/
├ about/
│ └ +page.svelte
+++├ +layout.svelte+++
└ +page.svelte
```

把页面中相同的部分移动到`+layout.svelte`. `{@render children()}`用于渲染页面内容。
> ...and move the duplicated content from the `+page.svelte` files into the new `+layout.svelte` file. The `{@render children()}` tag is where the page content will be rendered:

```svelte
/// file: src/routes/+layout.svelte
<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

{@render children()}
```

`+layout.svelte`不但对所有下级路由有效，对同级路由也有效哦。而且可以逐级嵌套。
> A `+layout.svelte` file applies to every child route, including the sibling `+page.svelte` (if it exists). You can nest layouts to arbitrary depth.
