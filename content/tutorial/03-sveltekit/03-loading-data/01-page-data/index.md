---
title: 页面数据
path: /blog
---

可以把SvelteKit做的工作分为三部分：    
`路由` -> `加载` -> `渲染`    
1.  **路由** —— 根据请求内容匹配对应路由。
2.  **加载** —— 加载路由需要的数据  
3.  **渲染** —— 在服务端生成HTML或在客户端更新Dom    
先前我们已经接触过路由和渲染了，接下来我们看下中间的部分 —— 加载。 
可以在`+page.svelte`相同目录下新建一个`+page.server.js`文件并在文件种定义`load`函数用于加载数据. 就像文件名+page.`server`.js 暗示的，这个函数只在服务端运行，也包括使用客户端导航。开始动手添加文件吧：    

> At its core, SvelteKit's job boils down to three things:
> 1. **Routing** — figure out which route matches an incoming request
> 2. **Loading** — get the data needed by the route
> 3. **Rendering** — generate some HTML (on the server) or update the DOM (in the browser)
> We've seen how routing and rendering work. Let's talk about the middle part — loading.
> Every page of your app can declare a `load` function in a `+page.server.js` file alongside the `+page.svelte` file. As the file name suggests, this module only ever runs on the server, including for client-side navigations. Let's add a `src/routes/blog/+page.server.js` file so that we can replace the hard-coded links in `src/routes/blog/+page.svelte` with actual blog post data:

```js
/// file: src/routes/blog/+page.server.js
import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
```

> [!NOTE] 只是为了练习方便我们的数据是从`src/routes/blog/data.js`引入的. 在世界项目种你可能需要从数据库或者内容管理系统中获取相应数据  

> [!NOTE] For the sake of the tutorial, we're importing data from `src/routes/blog/data.js`. In a real app, you'd be more likely to load the data from a database or a CMS, but for now we'll do it like this.

接下来在`src/routes/blog/+page.svelte`中我们就可以通过属性`data`使用数据了：
> We can access this data in `src/routes/blog/+page.svelte` via the `data` prop:

```svelte
/// file: src/routes/blog/+page.svelte
+++<script>
	let { data } = $props();
</script>+++

<h1>blog</h1>

<ul>
---	<li><a href="/blog/one">one</a></li>
	<li><a href="/blog/two">two</a></li>
	<li><a href="/blog/three">three</a></li>---
+++	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}+++
</ul>
```

现在把博客页面也改下：
> Now, let's do the same for the post page:

```js
/// file: src/routes/blog/[slug]/+page.server.js
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	return {
		post
	};
}
```

```svelte
/// file: src/routes/blog/[slug]/+page.svelte
+++<script>
	let { data } = $props();
</script>+++

---<h1>blog post</h1>---
+++<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>+++
```

还有个小细节小主需要注意下：如果用户使用一个不存在的路径访问博客，我们通常需要返回一个404(未找到)页面：  
> There's one last detail we need to take care of — the user might visit an invalid pathname like `/blog/nope`, in which case we'd like to respond with a 404 page:

```js
/// file: src/routes/blog/[slug]/+page.server.js
+++import { error } from '@sveltejs/kit';+++
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	+++if (!post) error(404);+++

	return {
		post
	};
}
```

先到这吧，后面的章节中我们还会学习到错误处理的
> We'll learn more about error handling in later chapters.
