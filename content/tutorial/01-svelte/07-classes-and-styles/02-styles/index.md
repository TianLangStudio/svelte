---
title: 样式指令
---

除了`class`, 小主还可以设置`style`：
> As with `class`, you can write your inline `style` attributes literally, because Svelte is really just HTML with fancy bits:

```svelte
/// file: App.svelte
<button
	class="card"
	+++style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"+++
	onclick={() => flipped = !flipped}
>
```
如果样式比较多，看起来是不是很难看，毕竟字符串不是🦵越长越好看, 贴心的爱美的Svelte当然不能坐视不管，小主请试下`style:`指令:
> When you have a lot of styles, it can start to look a bit wacky. We can tidy things up by using the `style:` directive:

```svelte
/// file: App.svelte
<button
	class="card"
+++	style:transform={flipped ? 'rotateY(0)' : ''}
	style:--bg-1="palegoldenrod"
	style:--bg-2="black"
	style:--bg-3="goldenrod"+++
	onclick={() => flipped = !flipped}
>
```
这样是不是就好看多了，欧！这看脸的时代！好看还是挺重要的。