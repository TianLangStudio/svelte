---
title: 散播props
---

在`App.svelte`里我们忘了，当然是故意的，给`PackageInfo`设置`name`属性，也就意味着把`<code>`元素整空了，npm链接也不起作用了。
当然我们 _可以_ 通过添加属性修复它...
> In this exercise, in `App.svelte` we've forgotten to pass the `name` prop expected by `PackageInfo.svelte`, meaning the `<code>` element is empty and the npm link is broken.
> We _could_ fix it by adding the prop...

```svelte
/// file: App.svelte
<PackageInfo
	+++name={pkg.name}+++
	version={pkg.version}
	description={pkg.description}
	website={pkg.website}
/>
```

但是，可但是啊小主，`pkg`的属性刚好是组件需要的。如此这般不如就散播了它吧:
> ...but since the properties of `pkg` correspond to the component's expected props, we can 'spread' them onto the component instead:

```svelte
/// file: App.svelte
<PackageInfo +++{...pkg}+++ />
```

这样就不用一个一个属性写了，像虎妞好的坏的一股脑全给了祥子。

[!NOTE] 另外你也可以在`PackageInfo.svelte`使用`...`获取所有其余属性对象

> [!NOTE] Conversely, in `PackageInfo.svelte` you can get an object containing all the props that were passed into a component using a rest property...
>
> ```js
> let { name, ...stuff } = $props();
> ```
>

也可以使用解引用[destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) altogether:
> ...or by skipping [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) altogether:
>
> ```js
> let stuff = $props();
> ```
这样就可以使用对象路径获取具体属性了:
> ...in which case you can access the properties by their object paths:
>
> ```js
> console.log(stuff.name, stuff.version, stuff.description, stuff.website);
> ```
