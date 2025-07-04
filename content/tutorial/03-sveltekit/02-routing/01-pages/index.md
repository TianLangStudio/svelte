---
title: 页面Pages
---

_路由_ （Routes）就是决定应用如何根据URL向用户展示相应的内容。   
SvelteKit使用基于 _文件系统_ 的路由，也就说代码中的文件组织形式直接关系到其对应的访问URL。   
每个`src/routes`下的`+page.svelte`的文件，就是一个页面. 当前只有`src/routes/+page.svelte`对应`/`. 如果我们使用`/about`访问就会报`404`页面找不到错误.   
小主可以通过添加`src/routes/about/+page.svelte`文件修复这个问题：    
> SvelteKit uses filesystem-based routing, which means that the _routes_ of your app — in other words, what the app should do when a user navigates to a particular URL — are defined by the directories in your codebase.
> Every `+page.svelte` file inside `src/routes` creates a page in your app. In this app we currently have one page — `src/routes/+page.svelte`, which maps to `/`. If we navigate to `/about`, we'll see a 404 Not Found error.

> Let's fix that. Add a second page, `src/routes/about/+page.svelte`, copy the contents of `src/routes/+page.svelte`, and update it:

```svelte
/// file: src/routes/about/+page.svelte
<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<h1>+++about+++</h1>
<p>this is the +++about+++ page.</p>
```

现在小主就可以使用`/`和`/about`访问了
> We can now navigate between `/` and `/about`.

> [!NOTE] 与传统的多页应用不同，导航到 `/about` 并返回会像单页应用一样更新当前页面的内容。这让我们兼顾了两者的优势——快速的服务器渲染启动和即时导航。（此行为可以[配置](/docs/kit/page-options)。）

> [!NOTE] Unlike traditional multi-page apps, navigating to `/about` and back updates the contents of the current page, like a single-page app. This gives us the best of both worlds — fast server-rendered startup, then instant navigation. (This behaviour can be [configured](/docs/kit/page-options).)
