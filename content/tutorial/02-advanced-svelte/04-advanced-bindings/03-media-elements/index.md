---
title: 多媒体元素
---

`<audio>`和`<video>`这样的多媒体元素也是可以绑定属性值的, 就像`AudioPlayer.svelte`演示的那样对播放界面做些定制化.
> You can bind to properties of `<audio>` and `<video>` elements, making it easy to (for example) build custom player UI, like `AudioPlayer.svelte`.

首先添加一个`<audio>`元素并绑定属性(使用了简写形式绑定了属性`src`, `duration`和`paused`):
> First, add the `<audio>` element along with its bindings (we'll use the shorthand form for `src`, `duration` and `paused`):

```svelte
/// file: AudioPlayer.svelte
<div class={['player', { paused }]}>
+++	<audio
		{src}
		bind:currentTime={time}
		bind:duration
		bind:paused
	></audio>+++

	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
	></button>
```

接下来为按钮`<button>`添加事件处理器用于切换`播放(play)`和`暂停(paused)`:
> Next, add an event handler to the `<button>` that toggles `paused`:

```svelte
/// file: AudioPlayer.svelte
<button
	class="play"
	aria-label={paused ? 'play' : 'pause'}
	+++onclick={() => paused = !paused}+++
></button>
```

音乐播放器已经小有所成，接下来我们让它支持通过拖拽滑动条选择某一段音频。可以通过在滑动条`pointerdown`事件处理器里的`seek`函数里更新`time`实现:
> Our audio player now has basic functionality. Let's add the ability to seek to a specific part of a track by dragging the slider. Inside the slider's `pointerdown` handler there's a `seek` function, where we can update `time`:

```js
/// file: AudioPlayer.svelte
function seek(e) {
	const { left, width } = div.getBoundingClientRect();

	let p = (e.clientX - left) / width;
	if (p < 0) p = 0;
	if (p > 1) p = 1;

	+++time = p * duration;+++
}
```
当音频结束的时候重放:
> When the track ends, be kind — rewind:

```svelte
/// file: AudioPlayer.svelte
<audio
	{src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	onended={() => {
		time = 0;
	}}+++
></audio>
```

`<audio>` 和 `<video>` 支持的绑定包括：7个 _只读_ 绑定：

- `duration` — 总时长，以秒为单位
- `buffered` — 包含 `{start, end}` 对象的数组
- `seekable` — 同上
- `played` — 同上
- `seeking` — 布尔值
- `ended` — 布尔值
- `readyState` — 介于（包含）0 到 4 之间的数字

5个 _双向_ 绑定：

- `currentTime` — 当前播放位置，以秒为单位
- `playbackRate` — 加速或减速（`1` 为“正常”）
- `paused` — 是否暂停
- `volume` — 介于 0 到 1 之间的值
- `muted` — 布尔值，`true` 表示静音

视频还额外具有只读的 `videoWidth` 和 `videoHeight` 绑定。

> The complete set of bindings for `<audio>` and `<video>` is as follows — seven _readonly_ bindings...

> - `duration` — the total duration, in seconds
> - `buffered` — an array of `{start, end}` objects
> - `seekable` — ditto
> - `played` — ditto
> - `seeking` — boolean
> - `ended` — boolean
> - `readyState` — number between (and including) 0 and 4

> ...and five _two-way_ bindings:

> - `currentTime` — the current position of the playhead, in seconds
> - `playbackRate` — speed up or slow down (`1` is 'normal')
> - `paused` — this one should be self-explanatory
> - `volume` — a value between 0 and 1
> - `muted` — a boolean value where true is muted

> Videos additionally have readonly `videoWidth` and `videoHeight` bindings.
