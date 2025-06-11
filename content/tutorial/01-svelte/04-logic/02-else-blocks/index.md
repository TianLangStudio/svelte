---
title: Else代码块
---

跟JavaScript一样，`if`也可以有`else`:
> Just like in JavaScript, an `if` block can have an `else` block:

```svelte
/// file: App.svelte
{#if count > 10}
	<p>{count} is greater than 10</p>
+++{:else}
	<p>{count} is between 0 and 10</p>+++
{/if}
```

聪明如小主应该不难发现这里的规则：`{#...}`用于开始一个代码块, `{/...}`用于结束代码块, `{:...}`用于继续添加代码块。
恭喜小主💕至此你已掌握了大部分的大道法则。
> `{#...}` opens a block. `{/...}` closes a block. `{:...}` _continues_ a block. Congratulations — you've already learned almost all the syntax Svelte adds to HTML.
