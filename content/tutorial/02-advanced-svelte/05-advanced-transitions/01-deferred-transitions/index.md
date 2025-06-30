---
title: 延迟转场
---

Svelte转场引擎还有个特别强大的功能 —— _延迟_ 转场，可以在多个元素之间协调转场效果。
以这个成对的待办事项列表为例，在其中切换一个待办事项会将其发送到另一个列表。在现实世界中，物体不会突然消失并在另一个地方重新出现，而是会经过一系列中间位置。使用运动效果可以大大帮助用户理解你的应用程序中发生了什么。
我们可以使用 `crossfade` 函数来实现这种效果，如 `transition.js` 中所示，该函数创建了一对名为 `send` 和 `receive` 的转场。当一个元素被“发送”时，它会寻找一个正在被“接收”的对应元素，并生成一个转场效果，将该元素变换到其对应元素的位置并淡出。当一个元素被“接收”时，会发生相反的过程。如果没有对应的元素，则使用 `fallback`。
打开 `TodoList.svelte`。首先，从 `transition.js` 中导入 `send` 和 `receive` 转场：
> A particularly powerful feature of Svelte's transition engine is the ability to _defer_ transitions, so that they can be coordinated between multiple elements.
> Take this pair of todo lists, in which toggling a todo sends it to the opposite list. In the real world, objects don't behave like that — instead of disappearing and reappearing in another place, they move through a series of intermediate positions. Using motion can go a long way towards helping users understand what's happening in your app.
> We can achieve this effect using the `crossfade` function, as seen in `transition.js`, which creates a pair of transitions called `send` and `receive`. When an element is 'sent', it looks for a corresponding element being 'received', and generates a transition that transforms the element to its counterpart's position and fades it out. When an element is 'received', the reverse happens. If there is no counterpart, the `fallback` transition is used.
> Open `TodoList.svelte`. First, import the `send` and `receive` transitions from transition.js:

```svelte
/// file: TodoList.svelte
<script>
	+++import { send, receive } from './transition.js';+++

	let { todos, remove } = $props();
</script>
```
然后，将它们添加到 `<li>` 元素并使用`todo.id` 作为键来匹配元素：
> Then, add them to the `<li>` element, using the `todo.id` property as a key to match the elements:

```svelte
/// file: TodoList.svelte
<li
	class={{ done: todo.done }}
	+++in:receive={{ key: todo.id }}+++
	+++out:send={{ key: todo.id }}+++
>
```

> 现在，当你切换项目时，它们会平滑地移动到新的位置。没有添加转场效果的元素看起来还有些生硬——我们将在下一个练习中修复这个问题。
> Now, when you toggle items, they move smoothly to their new location. The non-transitioning items still jump around awkwardly — we can fix that in the next exercise.
