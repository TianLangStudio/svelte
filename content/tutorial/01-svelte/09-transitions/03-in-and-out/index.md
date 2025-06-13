---
title: 转入和转出指令
---

聪明的小主是不是想给Dom元素设置不同的转入和传出动画? 转入用一个，转出用另一个?! 贴心的Svelte满足你：
这次我们把`fade`和`fly` 都引入。
> Instead of the `transition` directive, an element can have an `in` or an `out` directive, or both together. Import `fade` alongside `fly`...

```js
/// file: App.svelte
import { +++fade+++, fly } from 'svelte/transition';
```

把`transition`换成`in`和`out`指令
> ...then replace the `transition` directive with separate `in` and `out` directives:

```svelte
/// file: App.svelte
<p +++in+++:fly={{ y: 200, duration: 2000 }} +++out:fade+++>
	Flies in, +++fades out+++
</p>
```

现在转场就 _不是可反转_ 的了啊——转入和转出使用了不同的转场动画
> In this case, the transitions are _not_ reversed.
