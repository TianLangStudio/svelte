---
title: <svelte:head>
---

小主人在做网站的时候为了让搜索引擎Google，Baidu什么的更好的收录我们的网站是不是需要在`<head>`中设置些合适的`title`, `meta`什么的啊。 为此贴心的Svelte提供了`<svelte:head>`。在这个练习中，我们使用它在`head`中添加link标签加载CSS文件:
> The `<svelte:head>` element allows you to insert elements inside the `<head>` of your document. This is useful for things like `<title>` and `<meta>` tags, which are critical for good SEO.
> Since those are quite hard to show in the context of this tutorial, we'll use it for a different purpose — loading stylesheets.

```svelte
/// file: App.svelte
<script>
	const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
	let selected = $state(themes[0]);
</script>

+++<svelte:head>
	<link rel="stylesheet" href="/tutorial/stylesheets/{selected}.css" />
</svelte:head>+++

<h1>Welcome to my site!</h1>
```

> [!NOTE] 另外在服务端渲染模式下`<svelte:head>`里的内容是跟页面中的其它内容分开返回的哦.  

> [!NOTE] In server-side rendering (SSR) mode, contents of `<svelte:head>` are returned separately from the rest of your HTML.
