---
title: <svelte:boundary>
---

人非圣贤孰能无过？！谁还不偶尔犯点小错误？！犯了错要尽量减少损失，就像贴心的Svelte提供的`<svelte:boundary>`一样把错误控制在特定范围内，不要由着它蔓延。    
举个例子🌰: `<FlakyComponent>`里就有Bug——当点击按钮的时候会把`mouse`的值设置为`null`, 那`{mouse.x}`和`{mouse.y}`还不报错。当然如果能修复Bug最好，但有些时候我们还不能改人家的代码，这时候可以把`<FlakyComponent>`放到`<svelte:boundary>`里：   
> To prevent errors from leaving your app in a broken state, you can contain them inside an _error boundary_ using the `<svelte:boundary>` element.
> In this example, `<FlakyComponent>` contains a bug — clicking the button will set `mouse` to `null`, meaning that the `{mouse.x}` and `{mouse.y}` expressions in the template will fail to render.
> In an ideal world we'd simply fix the bug. But that's not always an option — sometimes the component belongs to someone else, and sometimes you just need to guard against the unexpected. Begin by wrapping `<FlakyComponent />` with `<svelte:boundary>`:

```svelte
<!--- file: App.svelte --->
+++<svelte:boundary>+++
	<FlakyComponent />
+++</svelte:boundary>+++
```

还看不到什么效果是不？别急!添加个`failed`[代码片段](snippets-and-render-tags)为错误信息展示个UI：    
> So far, nothing has changed, because the boundary doesn't specify a handler. Add a `failed` [snippet](snippets-and-render-tags) to provide some UI to show when an error occurs:

```svelte
<!--- file: App.svelte --->
<svelte:boundary>
	<FlakyComponent />

+++	{#snippet failed(error)}
		<p>Oops! {error.message}</p>
	{/snippet}+++
</svelte:boundary>
```

现在当点击按钮的时候`boundary`里的内容就会被代码片段取代。我们还可以通过`failed`的第二个参数重置：    
> Now, when we click the button, the contents of the boundary are replaced with the snippet. We can attempt to reset things by making use of the second argument passed to `failed`:

```svelte
<!--- file: App.svelte --->
<svelte:boundary>
	<FlakyComponent />

	{#snippet failed(error+++, reset+++)}
		<p>Oops! {error.message}</p>
		+++<button onclick={reset}>Reset</button>+++
	{/snippet}
</svelte:boundary>
```

我们还可以添加一个`onerror`处理函数，它的参数跟`failed`一样:
> We can also specify an `onerror` handler, which is called with the same arguments passed to the `failed` snippet:

```svelte
<!--- file: App.svelte --->
<svelte:boundary +++onerror={(e) => console.error(e)}+++>
	<FlakyComponent />

	{#snippet failed(error, reset)}
		<p>Oops! {error.message}</p>
		<button onclick={reset}>Reset</button>
	{/snippet}
</svelte:boundary>
```

可以通过它报告下错误信息或者显示些其它的UI。
> This is useful for sending information about the error to a reporting service, or adding UI outside the error boundary itself.
