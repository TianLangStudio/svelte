---
title: 读写cookies
---

上个练习提到的[`setHeaders`](headers)可不能用于设置`Set-Cookie`. SvelteKit特意提供了更简单易用的API用于读写`cookies`🍪    
在`load`函数中读取cookie可以使用`cookies.get(name, options)`：
> The [`setHeaders`](headers) function can't be used with the `Set-Cookie` header. Instead, you should use the `cookies` API.
> In your `load` functions, you can read a cookie with `cookies.get(name, options)`:

```js
/// file: src/routes/+page.server.js
export function load(+++{ cookies }+++) {
	+++const visited = cookies.get('visited');+++

	return {
		visited: visited === 'true'
	};
}
```

设置Cookie可以使用`cookies.set(name, value, options)`. 强烈建议设置Cookie时指定`path`, 因为如果不指定有些浏览器会使用当前路径的父目录做为`path`，这可能不是你想要的。
> To set a cookie, use `cookies.set(name, value, options)`. It's strongly recommended that you explicitly configure the `path` when setting a cookie, since browsers' default behaviour — somewhat uselessly — is to set the cookie on the parent of the current path.

```js
/// file: src/routes/+page.server.js
export function load({ cookies }) {
	const visited = cookies.get('visited');

	+++cookies.set('visited', 'true', { path: '/' });+++

	return {
		visited: visited === 'true'
	};
}
```

现在重新加载下Iframe，就会看到`Hello stranger!`变成了`Hello friend!`.
> Now, if you reload the iframe, `Hello stranger!` becomes `Hello friend!`.

小主是不是也好奇为什么就不能直接用`setHeaders`通过设置`Set-Cookie`操作`Cookies`呢? 
主要是当使用`cookies.set(name, ...)`不但会通过`Set-Cookie`头信息设置Cookie值, 还会修改内部的Map，这样同一个请求内调用`cookies.get(name)`也会返回最新的值，另外SvelteKit还会默认添加以下配置确保`cookies`更安全:
> Calling `cookies.set(name, ...)` causes a `Set-Cookie` header to be written, but it _also_ updates the internal map of cookies, meaning any subsequent calls to `cookies.get(name)` during the same request will return the updated value. Under the hood, the `cookies` API uses the popular `cookie` package — the options passed to `cookies.get` and `cookies.set` correspond to the `parse` and `serialize` options from the `cookie` [documentation](https://github.com/jshttp/cookie#api). SvelteKit sets the following defaults to make your cookies more secure:

```js
{
	httpOnly: true,
	secure: true,
	sameSite: 'lax'
}
```
