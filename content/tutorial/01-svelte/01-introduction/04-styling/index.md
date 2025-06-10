---
title: 样式
---

跟使用HTML一样嘞，你也管在组件里使用`<style>`标签. 啥？你没见过`<style>`标签？！亲，你需要先学点CSS，不是CS。
来给`<p>`添加上样式:
> Just like in HTML, you can add a `<style>` tag to your component. Let's add some styles to the `<p>` element:

```svelte
/// file: App.svelte
<p>This is a paragraph.</p>

<style>
+++	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}+++
</style>
```

另外添加的CSS样式 _只对当前组件_ 有效，这样你就不用担心影响其它组件中的`<p>`元素样式了。下个练习我们验证下。
> Importantly, these rules are _scoped to the component_. You won't accidentally change the style of `<p>` elements elsewhere in your app, as we'll see in the next step.
