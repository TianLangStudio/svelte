---
title: 你的第一个组件
---
在Svelte中，应用是有一个或多个 _组件_ 组成的. 组件是写在 `.svelte` 文件里可以重用自包含的封装了相应HTML, CSS和JavaScript的代码块。
当前在编辑器中打开的`App.svelte`就是一个简单的组件。
> In Svelte, an application is composed from one or more _components_. A component is a reusable self-contained block of code that encapsulates HTML, CSS and JavaScript that belong together, written into a `.svelte` file. The `App.svelte` file, open in the code editor to the right, is a simple component. 

## 添加数据
> Adding data

一个只是显示些静态标签的组件好像少点意思，我们来给它添加点数据
> A component that just renders some static markup isn't very interesting. Let's add some data.

首先，在组件里添加一对`script`标签并在里面定义个变量`name`:
> First, add a script tag to your component and declare a `name` variable:

```svelte
/// file: App.svelte
+++<script>
	let name = 'Svelte';
</script>+++

<h1>Hello world!</h1>
```
接下来我们就可以在标签中使用`name`了：
> Then, we can refer to `name` in the markup:

```svelte
/// file: App.svelte
<h1>Hello +++{name}+++!</h1>
```
我们可以在花括号中添加任意JavaScript代码，你可以尝试把花括号里的`name`换成`name.toUpperCase()`打个不一样的招呼。
> Inside the curly braces, we can put any JavaScript we want. Try changing `name` to `name.toUpperCase()` for a shoutier greeting.

```svelte
/// file: App.svelte
<h1>Hello {name+++.toUpperCase()+++}!</h1>
```
