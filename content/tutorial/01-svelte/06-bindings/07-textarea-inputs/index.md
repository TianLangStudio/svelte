---
title: 多行文本输入框
---

多行文本框和文本输入框一样都可以使用`bind:value`
> The `<textarea>` element behaves similarly to a text input in Svelte — use `bind:value`:

```svelte
/// file: App.svelte
<textarea +++bind:value=+++{value}></textarea>
```

像这样,属性和绑定的变量名称一样, 可以使用简写形式
> In cases like these, where the names match, we can also use a shorthand form:

```svelte
/// file: App.svelte
<textarea +++bind:value+++></textarea>
```

当然这种写法对其它输入框也是一样滴，不只是`<textarea>`
> This applies to all bindings, not just `<textarea>` bindings.

另外小主我感觉你又要突破了。