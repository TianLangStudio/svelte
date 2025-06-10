---
title: 动态属性
---

花括号不单可以帮你控制文本还能控制标签的属性值
> Just like you can use curly braces to control text, you can use them to control element attributes.

快来看，这个image标签没有`src`属性，请施主动手给它添加下吧
> Our image is missing a `src` — let's add one:

```svelte
/// file: App.svelte
<img +++src={src}+++ />
```

看起来顺眼多了，我那处女座的小挑剔啊，现在把鼠标移动到`<img>`上，你会看到一条警告：
> That's better. But if you hover over the `<img>` in the editor, Svelte is giving us a warning:

```
 `<img>` 标签应该有个`alt`属性
 `<img>` element should have an alt attribute
```

之所以会出现这个警告，是因为可爱贴心的Svelte想帮助你编写可访问性更好的Web应用。 _可访问性_ （缩写为a11y）是确保我们的Web应用更广泛地被人们使用，包括有视力或行动障碍的人，当然还有哪些上网设备性能不好，网络也不好的人。 写个Web应用要考虑这么多人的使用体验的确不容易，所以Svelte很贴心的提醒你。💕友情提示：快把重要日期添加到日程上，以免错过了买生日礼物的时间...呕吼，错过了可能就不只是一个礼物了...
> When building web apps, it's important to make sure that they're _accessible_ to the broadest possible userbase, including people with (for example) impaired vision or motion, or people without powerful hardware or good internet connections. Accessibility (shortened to a11y) isn't always easy to get right, but Svelte will help by warning you if you write inaccessible markup.

就像现在我们忘了添加`alt`属性，这让那些使用屏幕阅读器或者网络环境差到下载个图片都费劲的使用者咋办？啥也不说了，加一个吧：
> In this case, we're missing the `alt` attribute that describes the image for people using screenreaders, or people with slow or flaky internet connections that can't download the image. Let's add one:

```svelte
/// file: App.svelte
<img src={src} +++alt="A man dances."+++ />
```

在属性值 _内_ 我们也可以使用花括号，就是这么🐂X，不信可以试下把alt的值改成 `"{name} dances"。` —— 记得在`<script>`标签里定义`name`变量。
> We can use curly braces _inside_ attributes. Try changing it to `"{name} dances."` — remember to declare a `name` variable in the `<script>` block.

## 简略属性
> Shorthand attributes

属性和值的名称一样的情况并不多见，例如：`src={src}`. 对于这种情况，贴心的Svelte也提供了方便的简略方式：
> It's not uncommon to have an attribute where the name and value are the same, like `src={src}`. Svelte gives us a convenient shorthand for these cases:

```svelte
/// file: App.svelte
<img +++{src}+++ alt="{name} dances." />
```

就是如果属性名称和其值花括号中的变量名称一样，可以省略掉属性名称和`=`