---
title: 转场指令
---

嗨！小主💕恭喜你又进阶啦！现在我们可以玩点动画效果了。大声告诉我，你想不想给Dom元素添加上PPT一样的翻页效果，那种渐进渐出的动画效果? 也就是转场(transition)动画。贴心的Svelte提供了`transition`指令让添加转场动画So easy!
首先从`svelte/transition`引入`fade`, 当然还有其它转场效果，小主稍后可以自行玩。
> We can make more appealing user interfaces by gracefully transitioning elements into and out of the DOM. Svelte makes this very easy with the `transition` directive.
> First, import the `fade` function from `svelte/transition`...

```svelte
/// file: App.svelte
<script>
	+++import { fade } from 'svelte/transition';+++

	let visible = $state(true);
</script>
```

接下来使用`transition`指令给`<p>`添加上`fade`转场动画：
> ...then add it to the `<p>` element:

```svelte
/// file: App.svelte
<p +++transition:fade+++>
	Fades in and out
</p>
```
