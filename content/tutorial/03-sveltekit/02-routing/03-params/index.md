---
title: 路由参数
path: /blog
---

有时候路由可能并不确定，是动态的。比如一个博客网站，用户可以访问`/blog/one`, `/blog/two`, `/blog/three` 获取不同的博客内容。我们总不能有多少博客就写多少文件吧？！这时我们可以使用路由参数——一对方括号夹个变量名。 比如 `src/routes/blog/[slug]/+page.svelte`. 其中`[slug]`就是路由参数。 可以在页面中获取参数值，这里可能是`one,two,there, ...`其中一个, 然后再返回相应博客内容。新增文件`src/routes/blog/[slug]/+page.svelte`:
> To create routes with dynamic parameters, use square brackets around a valid variable name. For example, a file like `src/routes/blog/[slug]/+page.svelte` will create a route that matches `/blog/one`, `/blog/two`, `/blog/three` and so on.
> Let's create that file:

```svelte
/// file: src/routes/blog/[slug]/+page.svelte
<h1>blog post</h1>
```

下个练习我们再展示怎么根据参数值展示相应的博客内容。
> We can now navigate from the `/blog` page to individual blog posts. In the next chapter, we'll see how to load their content.

> [!NOTE] 偷偷的告诉你：一个URl节点里还能包含多个路由参数，只要它们之间有个静态内容分割就行。比如`foo/[bar]x[baz]`其中`[bar]` 和 `[baz]`都是动态参数.

> [!NOTE] Multiple route parameters can appear _within_ one URL segment, as long as they are separated by at least one static character: `foo/[bar]x[baz]` is a valid route where `[bar]` and `[baz]` are dynamic parameters.
