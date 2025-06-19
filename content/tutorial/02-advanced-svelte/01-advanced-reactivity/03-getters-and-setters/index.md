---
title: Getters和setters
---

在需要做些校验时特别适合使用Class。 比如Class `Box`, 我们需要限制它能被放大到的最大值。可以通过把`width`和`height`属性替换为对应的 _get_ 和 _set_ 方法, 这些方法也被称为存取器。首先我们需要先把属性变为[私有的]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties):

> Classes are particularly useful when you need to validate data. In the case of this `Box` class, it shouldn't be possible to keep embiggening past the maximum allowed by the sliders, but that's exactly what happens.
> We can fix that by replacing `width` and `height` with _getters_ and _setters_, otherwise known as _accessors_. First, convert them to [private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties):

```js
/// file: App.svelte
class Box {
	+++#width+++ = $state(0);
	+++#height+++ = $state(0);
	area = $derived(this.+++#width+++ * this.+++#height+++);

	constructor(width, height) {
		this.+++#width+++ = width;
		this.+++#height+++ = height;
	}

	// ...
}
```
然后添加对应的set和get方法:
> Then, create some getters and setters:

```js
/// file: App.svelte
class Box {
	// ...

+++	get width() {
		return this.#width;
	}

	get height() {
		return this.#height;
	}

	set width(value) {
		this.#width = value;
	}

	set height(value) {
		this.#height = value;
	}+++

	embiggen(amount) {
		this.width += amount;
		this.height += amount;
	}
}
```
最后在set方法中添加校验代码:
> Finally, add the validation to the setters:

```js
/// file: App.svelte
set width(value) {
	this.#width = +++Math.max(0, Math.min(MAX_SIZE, value));+++
}

set height(value) {
	this.#height = +++Math.max(0, Math.min(MAX_SIZE, value));+++
}
```

现在盒子的大小被限制在了安全范围，无论通过`bind:value`绑定的区间输入框还是`embiggen`都不会让它大到超出安全范围，即使使出吃奶的劲点击按钮也不行。
> It's now impossible to increase the box size past safe limits, whether through the `bind:value` on the range inputs, or the `embiggen` method, no matter how hard you press the button.
