---
title: 声明props
---

小主，不得不说至此我们都在跟内部状态打交道,也就是说仅限于组件内部自己玩。但上了战场，在实际的项目面前，这是不够的，我们往往需要把数据从组件传递到子组件。因此我们需要知道怎么定义 _属性(properties)_ 简写为`props`。在Svelte中，我们可以使用`$props`符文(rune)获取组件的属性。上手吧，小主。先修改下`Nested.svelte`： 
> So far, we've dealt exclusively with internal state — that is to say, the values are only accessible within a given component.
> In any real application, you'll need to pass data from one component down to its children. To do that, we need to declare _properties_, generally shortened to 'props'. In Svelte, we do that with the `$props` rune. Edit the `Nested.svelte` component:

```svelte
/// file: Nested.svelte
<script>
	let { answer } = +++$props()+++;
</script>
```
