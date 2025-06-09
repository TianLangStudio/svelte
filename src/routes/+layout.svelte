<script lang="ts">
	import '@sveltejs/site-kit/styles/index.css';
	import { page } from '$app/state';
	import { Shell, Banner } from '@sveltejs/site-kit/components';
	import { Nav } from '@sveltejs/site-kit/nav';
	import { beforeNavigate } from '$app/navigation';


	// Make all navigations between SvelteKit-tutorial and non-SvelteKit-tutorial pages (and vice versa)
	// a full page navigation to ensure webcontainers get the correct origin restriction headers while
	// ensuring those headers don't interfere with the rest of the page. These headers would have bad
	// consequences on how we have to handle integration of images etc from other domains for example.
	beforeNavigate(({ from, to, cancel }) => {
		if (!from || !to) return;

		if (
			from.url.pathname.startsWith('/tutorial/kit/') !== to.url.pathname.startsWith('/tutorial/kit')
		) {
			cancel();
			location.href = to.url.href;
		}
	});

	let { data, children: layout_children } = $props();

	const sections: Record<string, string> = {
		docs: '文档',
		playground: 'Playground',
		tutorial: '教程',
		search: 'Search'
	};
</script>
<Shell nav_visible={page.route.id !== '/(authed)/playground/[id]/embed'}>
	{#snippet top_nav()}
		<Nav title={sections[page.url.pathname.split('/')[1]!] ?? ''} links={data.nav_links} />
	{/snippet}

	{#snippet children()}
		{@render layout_children()}
	{/snippet}

	{#snippet banner()}
		{#if data.banner}
			<Banner banner={data.banner} />
		{/if}
	{/snippet}
</Shell>

