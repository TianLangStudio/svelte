---
title: 添加参数
---
转场函数还可以接受参数。
把`fade`换成`fly`:
> Transition functions can accept parameters. Replace the `fade` transition with `fly`...

```svelte
/// file: App.svelte
<script>
	import { +++fly+++ } from 'svelte/transition';

	let visible = $state(true);
</script>
```

使用`transition`指令把`fly`应用到`<p>`的时候添加些配置信息:
> ...and apply it to the `<p>` along with some options:

```svelte
/// file: App.svelte
<p transition:+++fly={{ y: 200, duration: 2000 }}+++>
	+++Flies+++ in and out
</p>
```

注意转场`transition`是 _可反转_ 的 —— 当你切换复选框的时候如果上一个转场还没有完成，它就会从所在的位置直接返回。
> Note that the transition is _reversible_ — if you toggle the checkbox while the transition is ongoing, it transitions from the current point, rather than the beginning or the end.
