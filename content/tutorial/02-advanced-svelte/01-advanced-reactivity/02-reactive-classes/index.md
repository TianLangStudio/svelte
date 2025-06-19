---
title: 响应式类
---

不但可以把变量变成响应式的，强大的Svelte还可以把类的属性变成响应式的哦，小主! 快夸我!💕
比如把`Box`类的`width`和`height`属性变成响应式的:
> It's not just variables that can be made reactive — in Svelte, we can also make properties of classes reactive.
> Let's make the `width` and `height` properties of our `Box` class reactive:

```js
/// file: App.svelte
class Box {
	width = +++$state(0);+++
	height = +++$state(0);+++
	area = 0;

	// ...
}
```
现在可以操作区间输入框或`embiggen(变大)`按钮，看下`Box(盒子)`的变化。
另外`$derived`也可以作用在类的属性上哦，来把`box.area（盒子面积）`也变成响应式的:
> Now, when we interact with the range inputs or click the 'embiggen' button, the box reacts.
> We can also use `$derived`, so that `box.area` updates reactively:

```js
/// file: App.svelte
class Box {
	width = $state(0);
	height = $state(0);
	area = +++$derived(this.width * this.height);+++

	// ...
}
```

> [!NOTE] 除了`$state`和`$derived`还有`$state.raw`和`$derived.by`也可以作用到类的属性上哦.

> [!NOTE] In addition to `$state` and `$derived`, you can use `$state.raw` and `$derived.by` to define reactive fields.
