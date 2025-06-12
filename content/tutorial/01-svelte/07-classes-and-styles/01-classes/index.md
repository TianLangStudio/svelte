---
title: class属性
---

跟其它属性一样，我们也可以使用JavaScript设置Dom元素的class属性. 
举个例子：给`button`添加`flipped` class
> Like any other attribute, you can specify classes with a JavaScript attribute. Here, we could add a `flipped` class to the card:

```svelte
/// file: App.svelte
<button
	class="card {+++flipped ? 'flipped' : ''+++}"
	onclick={() => flipped = !flipped}
>
```

是不是有效果了——当你单击的时候它会反面
Svelte的功能还不只这些哦，考虑到按条件设置Dom元素的class是个非常常见的操作，贴心的Svelte还支持使用对象和数组设置class, Svelte会使用[clsx](https://github.com/lukeed/clsx)把它们转换成字符串.
> This works as expected — if you click on the card now, it'll flip.
> We can make it nicer though. Adding or removing a class based on some condition is such a common pattern in UI development that Svelte allows you to pass an object or array that is converted to a string by [clsx](https://github.com/lukeed/clsx).

```svelte
/// file: App.svelte
<button
	+++class={["card", { flipped }]}+++
	onclick={() => flipped = !flipped}
>
``` 
实现了上面代码同样的功能，代码简洁了很多有没有？！快夸我💕, 小主!
如果想了解更多可以继续修炼[秘笈](/docs/svelte/class)

> This means 'always add the `card` class, and add the `flipped` class whenever `flipped` is truthy'.
> For more examples of how to combine conditional classes, [consult the `class` documentation](/docs/svelte/class).
