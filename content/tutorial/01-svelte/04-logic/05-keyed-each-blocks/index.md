---
title: 有键的each代码块
---

小主，在使用each代码块时还有个秘诀需要了解下，用好了能让界面渲染更流畅哦。
默认情况下，就是像我们先前的用法，当`each`代码块结束的时候如果元素的个数有变化我们也会相应的增减Dom元素。这可能不是你想要的效果。
举个🌰更好理解: 在`Thing.svelte`里, `name`是个动态属性,就是它可能会变, 而`emoji`是个常量不会变.
单击`Remove first thing`(删除第一个)按钮几次, 注意观察有什么变化:
> By default, updating the value of an `each` block will add or remove DOM nodes at the _end_ of the block if the size changes, and update the remaining DOM. That might not be what you want.
> It's easier to show why than to explain. Inside `Thing.svelte`, `name` is a dynamic prop but `emoji` is a constant.
> Click the 'Remove first thing' button a few times, and notice what happens:

是不是发现名称和符号不对应了, 这是因为它是这样运行的:
1. 删除了最后一个组件
2. 然后更新剩下的Dom节点的`name`属性值 (原来文本中包含`doughnut`的现在包含`egg`,以此类推). 但是emoji没变
> 1. It removes the last component.
> 2. It then updates the `name` value in the remaining DOM nodes (the text node containing 'doughnut' now contains 'egg', and so on), but not the emoji.

[!NOTE] 如果小主先前修炼过React,可能觉得这样很奇怪, 不应该整个组件一起更新吗?! 但Svelte采用了不同的更新方式: 一旦组件的符文(rune)执行了,接下来的更新都会采用微调的方式. 这样更快, 也让你可以掌控更多.有没有因为我的特别喜欢上我啊💕小主

> [!NOTE] If you're coming from React, this might seem strange, because you're used to the entire component re-rendering when state changes. Svelte works differently: the component 'runs' once, and subsequent updates are 'fine-grained'. This makes things faster and gives you more control.

一种解决方法是把`emoji`做成[`衍生状态`](derived-state). 但杀🐓焉用🐂刀?
解决这个问题只需要为每次迭代指定一个唯一的 _键(key)_ 就可以了:
> One way to fix it would be to make `emoji` a [`$derived`](derived-state) value. But it makes more sense to remove the first `<Thing>` component altogether rather than remove the _last_ one and update all the others.
To do that, we specify a unique _key_ for each iteration of the `each` block:

```svelte
/// file: App.svelte
{#each things as thing (+++thing.id+++)}
	<Thing name={thing.name}/>
{/each}
```
是不是很简单. 聪明如你一学就会.

> [!NOTE] 理论上可以用任意对象做键(key), 因为贴心的Svelte内部用的`Map` --也就是说你可以使用 `(thing)` 取代 `(thing.id)`. 但通常我们使用字符串或数字做为键(key), 这样更安全, 即使在使用来自 API 服务器的新数据进行更新时，标识也能保持不变，而无需考虑引用相等性.小主如果觉得这句不好理解可以回顾下JavaScript相关知识,有助于突破哦!

> [!NOTE] You can use any object as the key, as Svelte uses a `Map` internally — in other words you could do `(thing)` instead of `(thing.id)`. Using a string or number is generally safer, however, since it means identity persists without referential equality, for example when updating with fresh data from an API server.
