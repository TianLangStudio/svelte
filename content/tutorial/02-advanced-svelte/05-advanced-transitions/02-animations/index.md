---
title: 动画
---

嗨，小主！ [上个练习](/tutorial/svelte/deferred-transitions)我们使用延迟转场演示了把元素从一个列表转移到另一个列表。
还需要让没有转场的元素看起来不那么生硬，我们可以使用`animate`指令.    
首先在`TodoList.svelte`中从`svelte/animate`引入`flip`['First, Last, Invert, Play首字母缩写'](https://aerotwist.com/blog/flip-your-animations/) 函数:

> In the [previous chapter](/tutorial/svelte/deferred-transitions), we used deferred transitions to create the illusion of motion as elements move from one todo list to the other.
> To complete the illusion, we also need to apply motion to the elements that _aren't_ transitioning. For this, we use the `animate` directive.
> First, import the `flip` function — flip stands for ['First, Last, Invert, Play'](https://aerotwist.com/blog/flip-your-animations/) — from `svelte/animate` into `TodoList.svelte`:

```svelte
/// file: TodoList.svelte
<script>
	+++import { flip } from 'svelte/animate';+++
	import { send, receive } from './transition.js';

	let { todos, remove } = $props();
</script>
```

然后把它添加到`<li>`元素上:
> Then add it to the `<li>` elements:

```svelte
/// file: TodoList.svelte
<li
	class={{ done: todo.done }}
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	+++animate:flip+++
>
```

如果觉得动画效果有点慢还可以调整下`duration`:
> The movement is a little slow in this case, so we can add a `duration` parameter:

```svelte
/// file: TodoList.svelte
<li
	class={{ done: todo.done }}
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	animate:flip+++={{ duration: 200 }}+++
>
```

> [!NOTE] `duration` 也可以是个函数`d => milliseconds`, 其中`d`是元素经过的像素数
> [!NOTE] `duration` can also be a `d => milliseconds` function, where `d` is the number of pixels the element has to travel

偷偷的告诉你，所有的转场和动画都是使用CSS实现的, 而不是使用JavaScript, 这样就不会阻塞主线程从而减少界面卡顿。
> Note that all the transitions and animations are being applied with CSS, rather than JavaScript, meaning they won't block (or be blocked by) the main thread.
