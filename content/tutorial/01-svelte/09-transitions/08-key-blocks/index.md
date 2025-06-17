---
title: Key代码块
---

恭喜小主，贺喜小主，马上就大圆满了。
修炼完Key代码块就能突破到下个大境界了。
Key代码块会在key表达式改变时销毁和重建它所包含的小世界。有时候我们希望某个值发生变化时就重新执行转场，而不是只在所绑定元素被添加或移除时。
此时我们应该举个例子🌰：每次加载信息时，也就是`i`变化时,都播放`打字机`效果，我们可以把`<p>`元素包括在一个key代码块里：
> Key blocks destroy and recreate their contents when the value of an expression changes. This is useful if you want an element to play its transition whenever a value changes instead of only when the element enters or leaves the DOM.
> Here, for example, we'd like to play the `typewriter` transition from `transition.js` whenever the loading message, i.e. `i` changes. Wrap the `<p>` element in a key block:

```svelte
/// file: App.svelte
+++{#key i}+++
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
+++{/key}+++
```
