---
title: If代码块
---

HTML不支持逻辑表达式，像条件判断、循环， 它都不支持。但是强大又贴心的Svelte可以，快夸我，夸我❤️
> HTML doesn't have a way of expressing _logic_, like conditionals and loops. Svelte does.

为了按条件渲染标签我们使用`if`代码块。
举个🌰： 当`count`大于10时我们显示些文本。
> To conditionally render some markup, we wrap it in an `if` block. Let's add some text that appears when `count` is greater than `10`:

```svelte
/// file: App.svelte
<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

+++{#if count > 10}
	<p>{count} is greater than 10</p>
{/if}+++
```

可以试下多点击几下按钮看下变化。
小主可以把`10`改成`3`这样可以少点击几次就能看到全部效果，省的累到了。
> Try it — update the component, and click on the button a few times.
