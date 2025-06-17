---
title: 自定义CSS转场
---

`svelte/transition`模块提供了丰富的转场，小主可以拿来用。如果小主也想自己写一个可以参考`fade`转场源码:
> The `svelte/transition` module has a handful of built-in transitions, but it's very easy to create your own. By way of example, this is the source of the `fade` transition:

```js
function fade(node, { delay = 0, duration = 400 }) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: (t) => `opacity: ${t * o}`
	};
}
```

是不是似曾相识？！跟先前定义动作(action)的函数如出一辙啊！第一个参数也是应用到的Dom元素，第二个参数是包含所需配置信息的对象, 不过返回值可就有讲究了，是一个可以包含以下属性的转场对象：
- `delay` —— 转场开始前需要延迟多少毫秒
- `duration` —— 转场持续的毫秒数 
- `easing` —— 缓动函数 可以访问[tweening](/tutorial/svelte/tweens)了解更多
- `css` —— 设置CSS的函数 `(t, u) => css` 其中`u === 1 - t`
- `tick` —— 调整函数`(t, u) => {...}` 用于对Dom元素进行修改
在转入开始和转出结束的时候t的值为0, 在转入结束和转出开始的时候t的值为1

> The function takes two arguments — the node to which the transition is applied, and any parameters that were passed in — and returns a transition object which can have the following properties:

> - `delay` — milliseconds before the transition begins
> - `duration` — length of the transition in milliseconds
> - `easing` — a `p => t` easing function (see the chapter on [tweening](/tutorial/svelte/tweens))
> - `css` — a `(t, u) => css` function, where `u === 1 - t`
> - `tick` — a `(t, u) => {...}` function that has some effect on the node
> The `t` value is `0` at the beginning of an intro or the end of an outro, and `1` at the end of an intro or beginning of an outro.

大多数情况下，小主应该返回“css”属性而不要返回“tick”属性，因为 CSS 动画会脱离主线程运行，以尽可能避免出现卡顿现象。Svelte 会模拟转场过程并构建 CSS 动画，然后让其运行。
比如`fade`转场会生成这样的css动画：
> Most of the time you should return the `css` property and _not_ the `tick` property, as CSS animations run off the main thread to prevent jank where possible. Svelte 'simulates' the transition and constructs a CSS animation, then lets it run.
> For example, the `fade` transition generates a CSS animation somewhat like this:

<!-- prettier-ignore-start -->
```css
0% { opacity: 0 }
10% { opacity: 0.1 }
20% { opacity: 0.2 }
/* ... */
100% { opacity: 1 }
```
<!-- prettier-ignore-end -->

当然我们还能再有创意点。让我们做点没什么用的：
We can get a lot more creative though. Let's make something truly gratuitous:

```svelte
/// file: App.svelte
<script>
	import { fade } from 'svelte/transition';
	+++import { elasticOut } from 'svelte/easing';+++

	let visible = $state(true);

	function spin(node, { duration }) {
		return {
			duration,
			css: (t, u) => +++{
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`
			}+++
		};
	}
</script>
```

小主能力越大责任就越大哦！ 我看好你哦!
> Remember: with great power comes great responsibility.
