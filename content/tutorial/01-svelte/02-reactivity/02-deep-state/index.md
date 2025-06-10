---
title: 深度状态Deep state
---

在上一个例子中我们看到状态对 _重新赋值_ 做出了响应，状态也可以对 _修改_ 做出响应，我们称之为 _深度响应_
> As we saw in the previous exercise, state reacts to _reassignments_. But it also reacts to _mutations_ — we call this _deep reactivity_.

接下来是一个深度响应的例子，首先定义个变量`numbers`并使用`$state`符文（rune）定义它的值为响应数组。
> Make `numbers` a reactive array:

```js
/// file: App.svelte
let numbers = +++$state([1, 2, 3, 4])+++;
```
现在我们改变下数组...
> Now, when we change the array...

```js
/// file: App.svelte
function addNumber() {
	+++numbers[numbers.length] = numbers.length + 1;+++
}
```

你可以看到组件也更新了。更🐂X的是使用数组的`push`方法修改数组，响应依然有效。
> ...the component updates. Or better still, we can `push` to the array instead:

```js
/// file: App.svelte
function addNumber() {
	+++numbers.push(numbers.length + 1);+++
}
```

> [!NOTE] 深度状态响应使用[proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)实现.

> [!NOTE] Deep reactivity is implemented using [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), and mutations to the proxy do not affect the original object.
