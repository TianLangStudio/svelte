<script>
	import { Section } from '@sveltejs/site-kit/components';
	import Hero from './_home/Hero.svelte';
	import Testimonials from './_home/Testimonials.svelte';
</script>

<svelte:head>
	<title>Svelte • 我们大家的Web开发框架文档教程中文翻译</title>
	<meta name="Description" content="Svelte开发框架文档教程中文翻译" />
</svelte:head>

<div class="home">
	<h1 class="visually-hidden">Svelte中文</h1>

	<Hero />

	<Testimonials />
</div>

<style>

	.home :global {
		@media (min-width: 800px) {
			h2 {
				font: var(--sk-font-h1);
			}
		}
	}
</style>
