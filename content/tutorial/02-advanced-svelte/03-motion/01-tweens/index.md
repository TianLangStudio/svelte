---
title: 插值动画
---

通常使用 _动画(motion)_ 展示数据变化是个不错的选择，因此贴心的Svelte提供了些类用于支持在UI上添加动画。   
从`svelte/motion`导入 `Tween`：
> Often, a good way to communicate that a value is changing is to use _motion_. Svelte ships classes for adding motion to your user interfaces.
> Import the `Tween` class from `svelte/motion`:

```svelte
/// file: App.svelte
<script>
	+++import { Tween } from 'svelte/motion';+++

	let progress = $state(0);
</script>
```

把`progress`定义为`Tween`:
> Turn `progress` into an instance of `Tween`:

```svelte
/// file: App.svelte
<script>
	import { Tween } from 'svelte/motion';

	let progress = +++new Tween+++(0);
</script>
```

`Tween`有一个可写的属性`target`和一个只读的属性`current` —— 就用它来更新`<progress>`元素:
> The `Tween` class has a writable `target` property and a readonly `current` property — update the `<progress>` element...

```svelte
<progress value={progress.+++current+++}></progress>
```

记得在事件处理器中更新`target`值：
> ...and each of the event handlers:

```svelte
<button onclick={() => (progress.+++target+++ = 0)}>
	0%
</button>
```
单击按钮就可以设置进度状态，动画效果看起来中规中矩，接下来添加个`easing`函数：
> Clicking the buttons causes the progress bar to animate to its new value. It's a bit robotic and unsatisfying though. We need to add an easing function:

```svelte
/// file: App.svelte
<script>
	import { Tween } from 'svelte/motion';
	+++import { cubicOut } from 'svelte/easing';+++

	let progress = new Tween(0, +++{
		duration: 400,
		easing: cubicOut
	}+++);
</script>
```

> [!NOTE] `svelte/easing`模块提供[Penner渐变方程](https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), 你也可以指定渐变函数`p => t` 其中`p`和`t`都介于0到1
> [!NOTE] The `svelte/easing` module contains the [Penner easing equations](https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), or you can supply your own `p => t` function where `p` and `t` are both values between 0 and 1.

`Tween`支持的配置项：
- `delay` —— 插值动画开始前需要等待的毫秒数
- `duration` —— 动画的持续时间（以毫秒为单位），或一个 `(from, to) => milliseconds` 函数，允许你（例如）为较大的值变化指定更长的动画时间
- `easing` —— 一个 `p => t` 函数
- `interpolate` —— 一个自定义的 `(from, to) => t => value` 函数，用于在任意值之间进行插值。默认情况下，Svelte 会在数字、日期以及形状相同的数组和对象（只要它们仅包含数字、日期或其他有效的数组和对象）之间进行插值。如果需要插值（例如）颜色字符串或变换矩阵，请提供自定义插值器

> The full set of options available to `Tween`:
> - `delay` — milliseconds before the tween starts
> - `duration` — either the duration of the tween in milliseconds, or a `(from, to) => milliseconds` function allowing you to (e.g.) specify longer tweens for larger changes in value
> - `easing` — a `p => t` function
> - `interpolate` — a custom `(from, to) => t => value` function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour strings or transformation matrices, supply a custom interpolator

如果需要在每次更新值时指定配置项可以使用 `progress.set(value, options)`，而不是直接赋值给 `progress.target`，在这种情况下，`options` 将覆盖默认值。`set`方法的返回值是一个`Promise`, 动画结束的时候`Promise`也就完成了
> You can also call `progress.set(value, options)` instead of assigning directly to `progress.target`, in which case `options` will override the defaults. The `set` method returns a promise that resolves when the tween completes.
