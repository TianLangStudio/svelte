---
title: 全局响应Universal reactivity
---

在前面的练习中我们都是在`组件`内部使用符文(rune)。其实强大如符文不必拘泥于组件, 在组件外面也是可以用滴。比如用它做全局状态分享。
> In the preceding exercises, we used runes to add reactivity inside components. But we can also use runes _outside_ components, for example to share some global state.

在这个练习中的`<Counter>`组件使用了从`shared.js`中引入的`counter`. 它现在就是个普通的对象，你点击按钮也没想要的计数效果。但是如果把它用`$state(...)`包装下，毕竟人看衣服马看鞍，那就不一样了:
> The `<Counter>` components in this exercise are all importing the `counter` object from `shared.js`. But it's a normal object, and as such nothing happens when you click the buttons. Wrap the object in `$state(...)`:

```js
/// file: shared.js
export const counter = +++$state({+++
	count: 0
+++})+++;
```

立马就给你个错误看，这是因为只能在'.svelte.js'文件中使用符文(rune). 名称还是挺重要的啊！修改下文件名，把`shard.js`改名成`shard.svelte.js`
> This causes an error, because you can't use runes in normal `.js` files, only `.svelte.js` files. Let's fix that — rename the file to `shared.svelte.js`.

另外别忘了修改引入语句，毕竟王二已经不是当初的王二小了。
> Then, update the import declaration in `Counter.svelte`:

```svelte
/// file: Counter.svelte
<script>
	import { counter } from './shared+++.svelte+++.js';
</script>
```

嘿，现在您再上眼，无论您点击哪个按钮，三个一起更新。怎一个🐂X了得。
> Now, when you click any button, all three update simultaneously.

> [!NOTE] 小主啊如果`$state`是通过重新赋值而不是就地修改的方式改变的就不要export了啊，因为引入的时候实在不知道它啥时变的。

> [!NOTE] You cannot export a `$state` declaration from a module if the declaration is reassigned (rather than just mutated), because the importers would have no way to know about it.

