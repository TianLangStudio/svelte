---
title: 效应Effects
---

小主好厉害啊！我们已经学习了关于状态响应，但不要骄傲哦，毕竟状态要是响应式的得有对应的反应才行，如果状态只是自己变着玩，那就跟个路人甲一样，普普通通的变量一个。
> So far we've talked about reactivity in terms of state. But that's only half of the equation — state is only reactive if something is _reacting_ to it, otherwise it's just a sparkling variable.

对应的反应就叫 _效应_ （effect就先这么叫吧). 小主其实已经接触过它了， 只是贴心的Svelte自作主张在状态更新时做了更新Dom的效应，小主才没有发现。当然小主也可以自己使用`$effect`符文（rune）创建效应。
> The thing that reacts is called an _effect_. You've already encountered effects — the ones that Svelte creates on your behalf to update the DOM in response to state changes — but you can also create your own with the `$effect` rune.


> [!NOTE] 小主要把这个符文当成你的秘密武器哦，需要用的时候再用，平常尽量不用，比如有些效应完全可以使用Dom事件处理函数完成。

> [!NOTE] Most of the time, you shouldn't. `$effect` is best thought of as an escape hatch, rather than something to use frequently. If you can put your side effects in an [event handler](dom-events), for example, that's almost always preferable.

给小主举个🌰：使用`setInterval`计算下组件挂载到Dom上的时间：
> Let's say we want to use `setInterval` to keep track of how long the component has been mounted. Create the effect:

```svelte
/// file: App.svelte
<script>
	let elapsed = $state(0);
	let interval = $state(1000);

+++	$effect(() => {
		setInterval(() => {
			elapsed += 1;
		}, interval);
	});+++
</script>
```

单击`speed up`(加速)按钮几次，你会发现`elapsed`变化的越来越快。这是因为每次`interval`改变的时候，Svelte都会重新调用`setInterval`。
> Click the 'speed up' button a few times and notice that `elapsed` ticks up faster, because we're calling `setInterval` each time `interval` gets smaller.

然后我们单击`slow down`(减速)按钮，你是不是以为`elapsed`变化的会越来越慢。其实没啥子效果，因为我们还没有取消掉原来的`interval`。也就是说我们每次点击都是新增了个定时任务。这能不变化的越来越快吗? 别担心贴心的Svelte已经替小主考虑到这种情况了，所以我们在新增任务前可以先清理掉原来的任务：
> If we then click the 'slow down' button... well, it doesn't work. That's because we're not clearing out the old intervals when the effect updates. We can fix that by returning a cleanup function:

```js
/// file: App.svelte
$effect(() => {
	+++const id =+++ setInterval(() => {
		elapsed += 1;
	}, interval);

+++	return () => {
		clearInterval(id);
	};+++
});
```

清理函数，就是`return`后面的，会在符文(rune)重新执行时调用，当组件销毁时也会调用。
> The cleanup function is called immediately before the effect function re-runs when `interval` changes, and also when the component is destroyed.

如果效应(effect)里不牵扯什么状态(state),那就会只在组件被挂载时执行一次。
> If the effect function doesn't read any state when it runs, it will only run once, when the component mounts.

> [!NOTE] 偷偷的告诉你，服务端渲染时效应是不被执行的.

> [!NOTE] Effects do not run during server-side rendering.

是不是跟React的useEffect类似