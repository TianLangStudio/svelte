---
title: Stores
---

在Svelte 5引入符文(rune)以前，在组件外使用响应式状态通常使用`store`实现。现在已经不这么用了，但在使用`Svelte`的时候偶尔还会见到`store`(比如使用SvelteKit), 那就认识下吧.
> [!NOTE] 我们就不涉及自定义`store`了，如果想了解相关内容可以看[相关秘笈](/docs/svelte/stores).

> Prior to the introduction of runes in Svelte 5, stores were the idiomatic way to handle reactive state outside components. That's no longer the case, but you'll still encounter stores when using Svelte (including in SvelteKit, for now), so it's worth knowing how to use them.
> [!NOTE] We won't cover how to create your own custom stores — for that, [consult the documentation](/docs/svelte/stores).

我们依然使用[全局响应](universal-reactivity)的练习，但这次我们使用`store`创建一个共享状态。
在`shared.js`里我们先前导出了数字`count`。这次把它转换成可写入(writable)`store`:
> Let's revisit the example from the [universal reactivity](universal-reactivity) exercise, but this time implement the shared state using a store.
> In `shared.js` we're currently exporting `count`, which is a number. Turn it into a writable store:

```js
/// file: shared.js
+++import { writable } from 'svelte/store';+++

export const count = +++writable(0)+++;
```

可以通过在变量名称前添加`$`使用`store`. 修改下`<button>`中的文本，让它不再显示`[object Object]`:
> To reference the value of the store, we prefix it with a `$` symbol. In `Counter.svelte`, update the text inside the `<button>` so that it no longer says `[object Object]`:

```svelte
/// file: Counter.svelte
<button onclick={() => {}}>
	clicks: {+++$count+++}
</button>
```

最后添加事件处理器，因为这是一个可写入store, 所以我们可以通过编程的方法调用`set`或`update`方法更新它。
> Finally, add the event handler. Because this is a writable store, we can update the value programmatically using its `set` or `update` method...

```js
count.update((n) => n + 1);
```

鉴于在组件中，我们仍然可以使用`$`前缀:
> ...but since we're in a component we can continue using the `$` prefix:

```svelte
/// file: Counter.svelte
<button onclick={() => +++$count += 1+++}>
	clicks: {$count}
</button>
```
