---
title: 欢迎来到Svelte的世界
---

欢迎来到Svelte教程！在这里你将学到怎么使用Svelte高效、低投入、轻松地创建任何规模的应用
> Welcome to the Svelte tutorial! This will teach you everything you need to know to easily build web applications of all sizes, with high performance and a small footprint.

你还可以参考[API文档](/docs)或者访问[playground](/playground)，如果你实在等不及要开始在自己电脑上编写项目了也可以使用`npx sv create`创建一个项目
> You can also consult the [API docs](/docs) and visit the [playground](/playground), or — if you're impatient to start hacking on your machine locally — create a project with `npx sv create`.

## Svelte是什么?
> What is Svelte？

简单的说Svelte是一个帮助我们创建Web应用的工具。就象其它UI框架一样，它可以让你 _声明式_ 地编写应用，通过把标签(HTML)\样式（CSS）和行为（JavaScript）组装成的组件
> Svelte is a tool for building web applications. Like other user interface frameworks, it allows you to build your app _declaratively_ out of components that combine markup, styles and behaviours.

这些组件被 _编译_ 成小而高效的JavaScript模块，消除了传统上与UI框架相关的开销。
> These components are _compiled_ into small, efficient JavaScript modules that eliminate overhead traditionally associated with UI frameworks.

您可以使用Svelte构建整个应用程序（例如，使用本教程将介绍的[SvelteKit]（/docs/kit）应用框架），也可以将其添加到现有代码库中。您还可以将组件作为可在任何地方工作的独立包。
> You can build your entire app with Svelte (for example, using an application framework like [SvelteKit](/docs/kit), which this tutorial will cover), or you can add it incrementally to an existing codebase. You can also ship components as standalone packages that work anywhere.

## 怎么使用本教程
> How to use this tutorial

> [!NOTE] 要掌握Svelte你需要具备HTML,CSS和JavaScript基础.

本教程分为四个主要部分：
> This tutorial is split into four main parts:

- [Svelte基础](/tutorial/svelte/welcome-to-svelte) (当前学的就是这个)
- [Svelte进阶](/tutorial/svelte/tweens)
- [SvelteKit基础](/tutorial/kit/introducing-sveltekit)
- [SvelteKit进阶](/tutorial/kit/optional-params)

在每一节我们都设计了一个针对当前知识点的练习。后面的练习依赖前面的知识点，因此我们建议你从头到尾按顺序一个一个学习。如果有需要也可以使用上面的导航选择相应的练习学习。
> Each section will present an exercise designed to illustrate a feature. Later exercises build on the knowledge gained in earlier ones, so it's recommended that you go from start to finish. If necessary, you can navigate via the menu above.

如果遇到不会做的练习，也可以点击右上角的 `解答` 按钮， 但尽量独立完成，最好自己找到解决方法并手动敲入完成练习，这样你会学得快一点
> If you get stuck, you can click the `solve` button in the top right of the screen. (The `solve` button is disabled on sections like this one that don't include an exercise.) Try not to rely on it too much; you will learn faster by figuring out where to put each suggested code block and manually typing it in to the editor.
