---
title: 组件绑定
---

就像绑定DOM元素的属性一样，小主也可以绑定组件的`props`。例如，我们可以绑定 `<Keypad>` 组件的 `value` prop，就像它是一个表单元素一样。
首先，我们需要将该`prop`标记为 _可绑定_ 。在 `Keypad.svelte` 中，更新 `$props()` 声明以使用 `$bindable` 符文(rune)：
> Just as you can bind to properties of DOM elements, you can bind to component props. For example, we can bind to the `value` prop of this `<Keypad>` component as though it were a form element.
> First, we need to mark the prop as _bindable_. Inside `Keypad.svelte`, update the `$props()` declaration to use the `$bindable` rune:

```js
/// file: Keypad.svelte
let { value +++= $bindable('')+++, onsubmit } = $props();
```
然后，在 App.svelte 中，添加一个`bind:` 指令：
> Then, in `App.svelte`, add a `bind:` directive:

```svelte
/// file: App.svelte
<Keypad +++bind:value={pin}+++ {onsubmit} />
```

现在，当用户与键盘交互时，父组件中的 `pin` 值会立即更新。
[!NOTE] 请谨慎使用组件绑定。如果绑定过多，特别是在没有“单一数据源”的情况下，可能会难以跟踪应用程序中数据的流动。

> Now, when the user interacts with the keypad, the value of `pin` in the parent component is immediately updated.
> [!NOTE] Use component bindings sparingly. It can be difficult to track the flow of data around your application if you have too many of them, especially if there is no 'single source of truth'.

