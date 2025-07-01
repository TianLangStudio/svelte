<script>
	let y = $state(0);
</script>

<svelte:window />

<span>depth: {y}px</span>

<style>
	:global(body) {
		height: 400vw;
		background-size: cover;
	}

	span {
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	}
</style>
