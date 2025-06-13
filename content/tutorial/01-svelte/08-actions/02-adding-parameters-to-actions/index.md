---
title: 添加参数
---

嗨，小主！这次我们练习怎么在使用动作(use actions)时传递参数。首先动作的第一个参数是它绑定的Dom元素。
还是举个例子🌰： 我们先前提到动作很适合用来添加提示（tooltip），现在我们就使用[`Tippy.js`](https://atomiks.github.io/tippyjs/)库给按钮`<button>`添加上tooltip。
当你把鼠标移动到按钮上时，你就会看到它了。
但是tooltip上什么信息也没有。
因为tooltip显示的信息通常都很个性——不同的Dom元素显示的内容不一样。你也不想为每个需要显示的Dom元素都写一个tooltip动作吧？！我们可以在使用动作时把显示内容当作参数：
首先让动作接收一个函数类型的参数，这个函数会返回创建提示信息`Tippy`需要的配置信息.注意第一个参数`node`是当前Dom元素也就是`<button>` —— 这个参数有贴心的Svelte自动传入.
> Like transitions and animations, an action can take an argument, which the action function will be called with alongside the element it belongs to.
> In this exercise, we want to add a tooltip to the `<button>` using the [`Tippy.js`](https://atomiks.github.io/tippyjs/) library. The action is already wired up with `use:tooltip`, but if you hover over the button (or focus it with the keyboard) the tooltip contains no content.
> First, the action needs to accept a function that returns some options to pass to Tippy:

```js
/// file: App.svelte
function tooltip(node, +++fn+++) {
	$effect(() => {
		const tooltip = tippy(node, +++fn()+++);

		return tooltip.destroy;
	});
}
```

> [!NOTE] 这里我们使用了函数类型的参数而不是直接使用包含配置信息的对象，这样当需要显示的内容变化时`tooltip`也会跟着更新，而不是一直显示原来的内容。都是智慧!💕

> [!NOTE] We're passing in a function, rather than the options themselves, because the `tooltip` function does not re-run when the options change.

然后在使用动作时传递参数给它：
> Then, we need to pass the options into the action:

```svelte
/// file: App.svelte
<button use:tooltip+++={() => ({ content })}+++>
	Hover me
</button>
```

> [!NOTE] 在上个版本Svelte 4的时候，动作需要返回一个包含`update`和`destroy`的对象，现在仍然适用，但我们现在更推荐使用`$effect`

> [!NOTE] In Svelte 4, actions returned an object with `update` and `destroy` methods. This still works but we recommend using `$effect` instead, as it provides more flexibility and granularity.

