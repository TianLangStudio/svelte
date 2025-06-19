---
title: 特供响应者
---

贴心的Svelte还提供了些响应式类（reactive classes), 对应JavaScript中的相应类：`Map`, `Set`, `Date`, `URL`, `URLSearchParams`.
比如我们可能会使用`$state(new Date())`声明一个`date`变量，并在`setInterval`中重新赋值。还可以使用[`svelte/reactivity`](/docs/svelte/svelte-reactivity)提供的`SvelteDate`:

> Svelte ships with several reactive classes that you can use in place of JavaScript built-in objects — namely `Map`, `Set`, `Date`, `URL` and `URLSearchParams`.
> In this exercise, we _could_ declare `date` using `$state(new Date())` and reassign it inside the `setInterval`. But a nicer alternative is to use `SvelteDate` from [`svelte/reactivity`](/docs/svelte/svelte-reactivity):

```svelte
/// file: App.svelte
<script>
	+++import { SvelteDate } from 'svelte/reactivity';+++

	let date = new +++SvelteDate();+++

	// ...
</script>
```
