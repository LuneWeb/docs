<script>
	import { base } from '$app/paths';
	import Navbar from '$lib/components/navbar.svelte';
	import { documents } from '$lib/docs';
</script>

<Navbar>
	{#each Object.entries(documents) as [docName, doc]}
		<a href="{base}/docs/{docName}/{Object.keys(doc.Pages)[0]}">{docName}</a>
	{/each}

	<style>
		nav a {
			color: blue;
			background-color: transparent;
			border-radius: 0rem;
			transition: 250ms;
			font-size: 2rem;
			margin: 0.15rem;
			margin-right: 2rem;
		}

		nav a:hover {
			transform: rotate(-2.5deg);
			background-color: rgba(0, 0, 255, 0.2);
			border-radius: 0.15rem;
			font-size: 2rem;
		}
	</style>
</Navbar>

<slot></slot>

<style>
	:global(body) {
		background-color: white;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
