---
title: Await代码块
---

很多Web应用都需要跟异步数据打交道, 贴心的Svelte也让 _await_ (等待)[promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)的值变的简单了呢. 可以直接在标签中使用`await`代码块:
> web applications have to deal with asynchronous data at some point. Svelte makes it easy to _await_ the value of [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) directly in your markup:

```svelte
/// file: App.svelte
+++{#await promise}+++
	<p>...rolling</p>
+++{:then number}
	<p>you rolled a {number}!</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}+++
```

> [!NOTE] 只需考虑当前的 `promise`,所以小主不用担心条件竞争.

> [!NOTE] Only the most recent `promise` is considered, meaning you don't need to worry about race conditions.

如果小主确信Promise不会失败,一定会给我们要的值,也可以省略掉`catch`代码块, 当然如果在等Promise返回值时啥也不想做,第一个代码块也是可以不要滴.
> If you know that your promise can't reject, you can omit the `catch` block. You can also omit the first block if you don't want to show anything until the promise resolves:

```svelte
{#await promise then number}
	<p>you rolled a {number}!</p>
{/await}
```
简洁多了