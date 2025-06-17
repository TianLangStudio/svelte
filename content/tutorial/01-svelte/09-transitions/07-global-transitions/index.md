---
title: 全局转场
---

默认情况下转场只在它所绑定的Dom元素被添加或销毁时执行。就像当前的示例：切换显示隐藏整个列表并不触发绑定在列表项上的转场。
如果想在选中和取消副本框时也触发转场效果，而不只是通过滑动条添加或删除列表项时才触发。我们可以使用 _global(全局)_ 转场：

> Ordinarily, transitions will only play on elements when their direct containing block is added or destroyed. In the example here, toggling the visibility of the entire list does not apply transitions to individual list elements.
> Instead, we'd like transitions to not only play when individual items are added and removed with the slider but also when we toggle the checkbox.
> We can achieve this with a _global_ transition, which plays when _any_ block containing the transitions is added or removed:

```svelte
/// file: App.svelte
<div transition:slide+++|global+++>
	{item}
</div>
```

> [!NOTE] 在Svelte 3的时候, 转场默认都是全局的，如果只在绑定元素被添加或销毁时才触发可以使用`|local`. 让我想起了那个男主的台词：三十年河东，三十年河西，莫欺骚年穷啊。

> [!NOTE] In Svelte 3, transitions were global by default and you had to use the `|local` modifier to make them local.
