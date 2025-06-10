---
title: HTML标签
---

通常，我们把字符串当成普通的文本插入，就是`<`和`>`没有特殊的意思，既不是标签的开始标记也不是结束标记。
> Ordinarily, strings are inserted as plain text, meaning that characters like `<` and `>` have no special meaning.

有时候，有时候，你也想把HTML直接渲染到组件中。比如你现在正在看的这个教程就是把Markdown文件中的内容当成HTML渲染的。
> But sometimes you need to render HTML directly into a component. For example, the words you're reading right now exist in a markdown file that gets included on this page as a blob of HTML.

在Svelte中你可以使用`{@html}`渲染HTML。偷偷的告诉你:可以对比下使用`@html`和不使用的效果，有助理解。
> In Svelte, you do this with the special `{@html ...}` tag:

```svelte
/// file: App.svelte
<p>{+++@html+++ string}</p>
```

> [!NOTE] 注意!`+3` Svelte虽然很贴心但是也没有对`{@html ...}`中的内容做无害化处理，也就是说如果你对插入的内容足够信任，比如就是你自己写的内容，这可能不是个问题，如果这些内容是其他人写的你可能需要对它们先进行转义处理，以免引入<a href="https://owasp.org/www-community/attacks/xss/" target="_blank">XSS攻击</a>  

> [!NOTE] Important: Svelte doesn't perform any sanitization of the expression inside `{@html ...}` before it gets inserted into the DOM. This isn't an issue if the content is something you trust like an article you wrote yourself. However if it's some untrusted user content, e.g. a comment on an article, then it's critical that you manually escape it, otherwise you risk exposing your users to <a href="https://owasp.org/www-community/attacks/xss/" target="_blank">Cross-Site Scripting</a> (XSS) attacks.
