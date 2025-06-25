---
title:  可编辑内容绑定
---

有`contenteditable`属性的元素支持 `textContent`和`innerHTML`绑定:
> Elements with a `contenteditable` attribute support `textContent` and `innerHTML` bindings:

```svelte
/// file: App.svelte
<div +++bind:innerHTML={html}+++ contenteditable></div>
```
