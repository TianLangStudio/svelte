---
title: 弹簧动画
---

`Spring(弹簧)` 类是 `Tween（插值）` 的替代方案，通常更适合处理频繁变化的值。
在此示例中，我们有一个跟随鼠标移动的圆，以及两个值——圆的坐标和大小。让我们将它们转换为弹簧：
> The `Spring` class is an alternative to `Tween` that often works better for values that are frequently changing.
> In this example we have a circle that follows the mouse, and two values — the circle's coordinates, and its size. Let's convert them to springs:

```svelte
/// file: App.svelte
<script>
	+++import { Spring } from 'svelte/motion+++';

	let coords = +++new Spring+++({ x: 50, y: 50 });
	let size = +++new Spring+++(10);
</script>
```
与 Tween 类似，弹簧具有一个可写的 target 属性和一个只读的 current 属性。更改事件处理程序：
> As with `Tween`, springs have a writable `target` property and a readonly `current` property. Update the event handlers...

```svelte
<svg
	onmousemove={(e) => {
		coords.+++target+++ = { x: e.clientX, y: e.clientY };
	}}
	onmousedown={() => (size.+++target+++ = 30)}
	onmouseup={() => (size.+++target+++ = 10)}
	role="presentation"
>
```
更改`<circle>` 的属性：
> ...and the `<circle>` attributes:

```svelte
<circle
	cx={coords.+++current+++.x}
	cy={coords.+++current+++.y}
	r={size.+++current+++}
></circle>
```
两个弹簧都使用默认的`stiffness（硬度）` 和 `damping（阻尼，衰减系数）` 值，这些值控制弹簧的特性。我们可以指定自己的初始值：
> Both springs have default `stiffness` and `damping` values, which control the spring's, well... springiness. We can specify our own initial values:

```js
/// file: App.svelte
let coords = new Spring({ x: 50, y: 50 }, +++{
	stiffness: 0.1,
	damping: 0.25
}+++);
```
晃动你的鼠标，尝试拖动滑块，感受这些值如何影响弹簧的行为。注意，你可以在弹簧仍在运动时调整这些值。
> Waggle your mouse around, and try dragging the sliders to get a feel for how they affect the spring's behaviour. Notice that you can adjust the values while the spring is still in motion.
