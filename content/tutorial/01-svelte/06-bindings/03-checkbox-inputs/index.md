---
title: 复选框
---

贴心的Svelte还为复选框提供了`bind:checked`哦，这样我们就可以轻松获取复选框是否被选中了。
> Checkboxes are used for toggling between states. Instead of binding to `input.value`, we bind to `input.checked`:

```svelte
/// file: App.svelte
<input type="checkbox" +++bind:+++checked={yes}>
```
