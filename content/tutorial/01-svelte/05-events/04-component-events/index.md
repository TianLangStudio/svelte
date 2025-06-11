---
title: 组件事件
---

小主可以把事件处理函数以属性的形式传递给组件. 就像在`Stepper.svelte`中，添加`increment`和`decrement`两个属性:
> You can pass event handlers to components like any other prop. In `Stepper.svelte`, add `increment` and `decrement` props...

```svelte
/// file: Stepper.svelte
<script>
	let +++{ increment, decrement }+++ = $props();
</script>
```

然后把他们绑定到Dom节点上：
> ...and wire them up:

```svelte
/// file: Stepper.svelte
<button +++onclick={decrement}+++>-1</button>
<button +++onclick={increment}+++>+1</button>
```

在`App.svelte`中定义事件处理函数:
In `App.svelte`, define the handlers:

```svelte
/// file: App.svelte
<Stepper
	+++increment={() => value += 1}+++
	+++decrement={() => value -= 1}+++
/>
```

小主坚持住，再进阶一点就可以突破到小一阶段了.
