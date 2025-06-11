---
title: 内嵌处理函数
---

小主你还可以直接在标签上定义事件处理函数, 这样就不用消耗您珍贵的脑细胞给函数起名称了.
> You can also declare event handlers inline:

```svelte
/// file: App.svelte
<script>
	let m = $state({ x: 0, y: 0 });

	---function onpointermove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}---
</script>

<div
	onpointermove={+++(event) => {
		m.x = event.clientX;
		m.y = event.clientY;
	}+++}
>
	The pointer is at {m.x} x {m.y}
</div>
```
