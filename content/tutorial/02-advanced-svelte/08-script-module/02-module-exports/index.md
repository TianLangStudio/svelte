---
title: 导出
---

`<script module>`还支持导出哦，比如我们可以在`AudioPlayer.svelte`里导出函数`stopAll`:
> Anything exported from a `module` script block becomes an export from the module itself. Let's export a `stopAll` function:

```svelte
/// file: AudioPlayer.svelte
<script module>
	let current;

+++	export function stopAll() {
		current?.pause();
	}+++
</script>
```

然后就可以在`App.svelte`里引入函数`stopAll`了:
> We can now import `stopAll` in `App.svelte`...

```svelte
/// file: App.svelte
<script>
	import AudioPlayer, +++{ stopAll }+++ from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
</script>
```

在事件处理器里使用`stopAll`:
> ...and use it in an event handler:

```svelte
/// file: App.svelte
<div class="centered">
	{#each tracks as track}
		<AudioPlayer {...track} />
	{/each}

+++	<button onclick={stopAll}>
		stop all
	</button>+++
</div>
```

> [!NOTE] 另外需要注意的是导出没有默认值，因为组件本身就是默认导出

> [!NOTE] You can't have a default export, because the component _is_ the default export.
