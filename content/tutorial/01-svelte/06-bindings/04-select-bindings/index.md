---
title: 列表选择框
---

`bind:value`也适用于获取列表选择框的值哦
> We can also use `bind:value` with `<select>` elements:

```svelte
/// file: App.svelte
<select
    +++bind:+++value={selected}
    onchange={() => answer = ''}
>
```

至于`<option>`的值是个对象还是字符串，Svelte并不关心
> Note that the `<option>` values are objects rather than strings. Svelte doesn't mind.

> [!NOTE] 这是因为我们并没有初始化`selected`变量，绑定的时候它的值会被自动设置为选择框的默认值（通常是列表的第一项），没绑定前`selected`的值都是`undefined`, 所以在标签里不要使用类似`selected.id`的操作。

> [!NOTE] Because we haven't set an initial value of `selected`, the binding will set it to the default value (the first in the list) automatically. Be careful though — until the binding is initialised, `selected` remains undefined, so we can't blindly reference e.g. `selected.id` in the template.
