---
title: 散播事件
---

小主这一节的练习就比较简单了，就一句心法：先前学习的[属性散播](spread-props)写法对事件也是有效的。
比如在`App.svelte`定义了`onclick`事件处理函数，我们就可以使用散播的形式把它传递给`BigRedButton.svelte`里的`button`:
> We can also [spread](spread-props) event handlers directly onto elements. Here, we've defined an `onclick` handler in `App.svelte` — all we need to do is pass the props to the `<button>` in `BigRedButton.svelte`:

```svelte
/// file: BigRedButton.svelte
<button +++{...props}+++>
	Push
</button>
```

恭喜小主成功突破👏