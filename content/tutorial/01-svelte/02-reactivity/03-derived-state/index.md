---
title: 衍生状态Derived state
---
小主您可能经常需要从一个状态 _衍生_ 另一个状态，为此贴心的Svelte提供了`$derived`符文(rune):
> Often, you will need to _derive_ state from other state. For this, we have the `$derived` rune:

```js
/// file: App.svelte
let numbers = $state([1, 2, 3, 4]);
+++let total = $derived(numbers.reduce((t, n) => t + n, 0));+++
```

我们可以像往常一样在标签中使用它:
> We can now use this in our markup:

```svelte
/// file: App.svelte
<p>{numbers.join(' + ')} = +++{total}+++</p>
```

使用`$derived`声明的表达式只有在它的依赖状态（在这个例子中就是`numbers`）更新时才会重新计算。不同于普通状态，衍生状态都是只读的。
> The expression inside the `$derived` declaration will be re-evaluated whenever its dependencies (in this case, just `numbers`) are updated. Unlike normal state, derived state is read-only.

是不是跟React中的useCallback, useMemo类似啊？！小主。