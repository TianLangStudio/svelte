---
title: 状态State
---

Svelte的强大核心是 _响应式_ 的保持Dom和应用状态一致, 例如： 事件响应
> At the heart of Svelte is a powerful system of _reactivity_ for keeping the DOM in sync with your application state — for example, in response to an event.

接下来是个计数器的例子。可以通过使用`$state(...)`把`count`变成响应式的。
> Make the `count` declaration reactive by wrapping the value with `$state(...)`:

```js
/// file: App.svelte
let count = +++$state(0)+++;
```

在Svelte中称这个`$state`为 _rune_ (符文)，用来告诉Svelte `count` 可不是一个普通的变量。符文虽然看起来用起来都有点像函数，但是他们其实是语言的一部分。
> This is called a _rune_, and it's how you tell Svelte that `count` isn't an ordinary variable. Runes look like functions, but they're not — when you use Svelte, they're part of the language itself.

接下来需要做的就是实现 `递增` 了
> All that's left is to implement `increment`:

```js
/// file: App.svelte
function increment() {
	+++count += 1;+++
}
```

$state rune是不是跟React的useState类似
