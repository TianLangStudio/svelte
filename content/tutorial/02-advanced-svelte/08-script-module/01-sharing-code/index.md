---
title: 代码共享
---

嗨小主，先前练习中我们接触到的`<script>`中的代码都是在组件初始化时执行的。但偶尔我们也需要在解析到代码模块时就运行，并且只运行一次，这个时候我们可以使用`<script module>`。   
举个例子🌰: 先前的音乐播放器，我们想播放一个的时候其它几个都暂定，就可以使用`<script module>`：
> In all the examples we've seen so far, the `<script>` block contains code that runs when each component instance is initialised. For the vast majority of components, that's all you'll ever need.
> Very occasionally, you'll need to run some code outside of an individual component instance. For example: returning to our custom audio player from a [previous exercise](media-elements), you can play all four tracks simultaneously. It would be better if playing one stopped all the others.
> We can do that by declaring a `<script module>` block. Code contained inside it will run once, when the module first evaluates, rather than when a component is instantiated. Place this at the top of `AudioPlayer.svelte` (note that this is a _separate_ script tag):

```svelte
/// file: AudioPlayer.svelte
+++<script module>
	let current;
</script>+++
```

这样就可以让不同组件间交互还不需要使用状态管理:
> It's now possible for the components to 'talk' to each other without any state management:

```svelte
/// file: AudioPlayer.svelte
<audio
	src={src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	onplay={(e) => {
		const audio = e.currentTarget;

		if (audio !== current) {
			current?.pause();
			current = audio;
		}
	}}+++
	onended={() => {
		time = 0;
	}}
/>
```
