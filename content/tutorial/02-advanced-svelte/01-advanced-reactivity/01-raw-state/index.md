---
title: Raw状态
---

恭喜小主，开启了高级功法💕💕💕
在先前的练习中我们学到状态是[深度响应](deep-state)的——当修改一个对象的某个属性或者往数组中添加元素时都会引起UI更新。这是通过创建[代理](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)拦截读写操作实现的。
> In previous exercises, we learned that state is [deeply reactive](deep-state) — if you (for example) change a property of an object, or push to an array, it will cause the UI to update. This works by creating a [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that intercepts reads and writes.

有时候这可能不是你想要的。比如你并不想修改某个属性或者需要保持引用相等，这个时候你可以使用 _raw状态_ 。 
不愧是高阶功法，就是拗口, 没点悟性和耐心还真参悟不了。
也就是只在用新状态替换原来的状态时才更新UI，我们就不需要通过 _修改_ 原状态更新UI。
举个栗子🌰:
做一个持续显示股票价格的图表（曲线图）。只有当获取到新数据时才更新图表：
> Occasionally, that's not what you want. If you're not changing individual properties, or if it's important to maintain referential equality, then you can use _raw state_ instead.
> In this example, we have a chart of Svelte's steadily increasing stock price. We want the chart to update when new data comes in, which we could achieve by turning `data` into state...

```js
/// file: App.svelte
let data = +++$state(poll())+++;
```

虽然也能达到效果，但勤俭持家的小主是不是觉得有点浪费了, 毕竟这里使用深度响应是没有意义的，因为新数据很快就会到，原来的数据也很快会被丢弃。可以使用`$state.raw`:
> ...but there's no need to make it deeply reactive when it will be discarded a few milliseconds later. Instead, use `$state.raw`:

```js
/// file: App.svelte
let data = +++$state.raw(poll())+++;
```

> [!NOTE] 修改Raw状态是没有效应的. 通常我们也不应该不推荐修改非响应状态。

> [!NOTE] Mutating raw state will have no direct effect. In general, mutating non-reactive state is strongly discouraged.
