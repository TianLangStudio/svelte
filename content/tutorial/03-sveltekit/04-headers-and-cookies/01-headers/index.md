---
title: 设置Headers
---

有时候，有时候，需要设置下头信息呀有没有?! 比如设置下缓存时间，返回内容类型啊有没有?! 
在`load`函数还有后面会遇到的[form actions](the-form-element), [hooks](handle)和[API routes](get-handlers)里可以使用`setHeaders`:
> Inside a `load` function (as well as in [form actions](the-form-element), [hooks](handle) and [API routes](get-handlers), which we'll learn about later) you have access to a `setHeaders` function, which — unsurprisingly — can be used to set headers on the response.
> Most commonly, you'd use it to customise caching behaviour with the [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) response header, but for the sake of this tutorial we'll do something less advisable and more dramatic:

```js
/// file: src/routes/+page.server.js
export function load(+++{ setHeaders }+++) {
+++	setHeaders({
		'Content-Type': 'text/plain'
	});+++
}
```

(可能需要刷新下Iframe才能看到效果)
> (You may need to reload the iframe to see the effect.)
