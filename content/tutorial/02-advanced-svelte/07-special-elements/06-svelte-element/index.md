---
title: <svelte:element>
---

有时候，有时候，你并不指定具体要渲染哪个元素, 与其写个长长的`{#if...}`：
> Sometimes you don't know in advance which element needs to be rendered. Rather than having a long list of `{#if ...}` blocks...

```svelte
/// file: App.svelte
{#if selected === 'h1'}
	<h1>I'm a <code>&lt;h1&gt;</code> element</h1>
{:else}
	<p>TODO others</p>
{/if}
```

不如索性来个`<svelte:element>`：
> ...we can use `<svelte:element>`:

```svelte
/// file: App.svelte
+++<svelte:element this={selected}>
	I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>+++
```
`this`的值可以是任意的字符串，如果是个`false`那就不渲染了。
> The `this` value can be any string, or a falsy value — if it's falsy, no element is rendered.
