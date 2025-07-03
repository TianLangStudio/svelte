---
title: SvelteKit是什么?
---

嗨，小主，这就是Svelte给您的神兵， 功能：
- 路由(Routing)
- 服务端渲染
- 数据获取(Data fetching)
- 服务工作者（Service workers）
- TypeScript支持
- 预渲染（Prerendering）
- 但页面应用（Single-page apps）
- 库打包（Library packaging）
- 生产环境构建优化（Optimised production builds）
- 多种部署方式支持
- 等等

可以说Svelte是个 _组件框架_, 神兵SvelteKit是个 _应用框架_ (或者元框架)。   
SvelteKit应用默认采用服务端渲染（类似于传统的“多页应用”或 MPA），具有出色的首次加载性能和 SEO 特性，但随后可以过渡到客户端导航（类似于现代的“单页应用”或 SPA），以避免用户导航时重新加载所有内容（包括第三方分析代码等）的卡顿问题。它们可以在任何支持 JavaScript 的环境中运行——不过，正如我们将看到的——您的用户可能根本不需要运行任何 JavaScript。    
刚开始没什么感觉也正常，小主不用为此担心，跟神兵待的时间长了自然会有感觉的。
先了解下项目结构：   

在右侧的文件树查看器中，您会看到 SvelteKit 期望在项目中找到的一些文件。

- `package.json` 对于熟悉 Node.js 的人来说并不陌生。它列出了项目的依赖项——包括 `svelte` 和 `@sveltejs/kit`——以及与 SvelteKit CLI 交互的各种 `scripts` 脚本。（我们目前在底部窗口运行 `npm run dev`。）

> [!NOTE] 请注意，它还指定了 `"type": "module"`，这意味着 `.js` 文件默认被视为原生 JavaScript 模块，而不是传统的 CommonJS 格式。

- `svelte.config.js` 包含您的项目配置。目前我们无需关注此文件，但如果您好奇，可以[访问文档](/docs/kit/configuration)。

- `vite.config.js` 包含 [Vite](https://vitejs.dev/) 配置。因为 SvelteKit 使用 Vite，您可以使用 [Vite 功能](https://vitejs.dev/guide/features.html)，如热模块替换、TypeScript 支持、静态资源处理等。

- `src` 是您应用源代码的存放位置。`src/app.html` 是您的页面模板（SvelteKit 会适当地替换 `%sveltekit.head%` 和 `%sveltekit.body%`），而 `src/routes` 定义了您应用的[路由](/tutorial/kit/pages)。

- 最后，`static` 包含部署应用时应包含的任何静态资源（例如 `favicon.png` 或 `robots.txt`）。

以下为英语原文：    

Whereas Svelte is a _component framework_, SvelteKit is an _app framework_ (or 'metaframework', depending on who you ask) that solves the tricky problems of building something production-ready:

- Routing
- Server-side rendering
- Data fetching
- Service workers
- TypeScript integration
- Prerendering
- Single-page apps
- Library packaging
- Optimised production builds
- Deploying to different hosting providers
- ...and so on

SvelteKit apps are server-rendered by default (like traditional 'multi-page apps' or MPAs) for excellent first load performance and SEO characteristics, but can then transition to client-side navigation (like modern 'single-page apps' or SPAs) to avoid jankily reloading everything (including things like third-party analytics code) when the user navigates. They can run anywhere JavaScript runs, though — as we'll see — your users may not need to run any JavaScript at all.

If that sounds complicated, worry not: SvelteKit is the framework that grows with you! Start simple and add new features as you need them.

## Project structure

On the right, in the file tree viewer, you'll see a handful of files that SvelteKit expects to find in a project.

`package.json` will be familiar if you've worked with Node.js before. It lists the project's dependencies — including `svelte` and `@sveltejs/kit` — and a variety of `scripts` for interacting with the SvelteKit CLI. (We're currently running `npm run dev` in the bottom window.)

> [!NOTE] Note that it also specifies `"type": "module"`, which means that `.js` files are treated as native JavaScript modules by default, rather than the legacy CommonJS format.

`svelte.config.js` contains your project configuration. We don't need to worry about this file for now, but if you're curious, [visit the documentation](/docs/kit/configuration).

`vite.config.js` contains the [Vite](https://vitejs.dev/) configuration. Because SvelteKit uses Vite, you can use [Vite features](https://vitejs.dev/guide/features.html) like hot module replacement, TypeScript support, static asset handling and so on.

`src` is where your app's source code goes. `src/app.html` is your page template (SvelteKit replaces the `%sveltekit.head%` and `%sveltekit.body%` as appropriate), and `src/routes` defines the [routes](/tutorial/kit/pages) of your app.

Finally, `static` contains any assets (like a `favicon.png` or a `robots.txt`) that should be included when your app is deployed.
