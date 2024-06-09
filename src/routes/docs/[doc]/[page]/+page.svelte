<script lang="ts">
	import { base } from '$app/paths';
	import Document from '$lib/components/document.svelte';
	import VerticalNavbar from '$lib/components/vertical_navbar.svelte';

	let { data } = $props();

	import { documents } from '$lib/docs';
	let document = $derived(documents[data.doc]);
	let page = $derived(document[data.page]);
	let pages = $derived(Object.entries(document));
</script>

<main>
	<VerticalNavbar>
		{#each pages as [pageName, currentPage]}
			{#if currentPage === page}
				<a class="section current" href="{base}/docs/{data.doc}/{pageName}">>{pageName}</a>
			{:else}
				<a class="section" href="{base}/docs/{data.doc}/{pageName}">{pageName}</a>
			{/if}
		{/each}

		<style>
			.section {
				text-align: start;
				font-weight: bolder;
				padding: 0.1rem;
				transition: 200ms;
				width: 100%;
				color: blue;
				background-color: rgba(0, 0, 0, 0.1);
				text-decoration: underline;
				border-color: transparent;
				cursor: pointer;
			}

			.section.current {
				background-color: rgba(0, 0, 0, 0.2);
				cursor: default;
			}

			.section:hover {
				background-color: rgba(0, 0, 255, 0.2);
				transform: translateX(-1.5px);
			}
		</style>
	</VerticalNavbar>

	<Document document={page}></Document>
</main>

<style>
	main {
		display: flex;
	}

	@media (max-width: 600px) {
		main {
			display: block;
		}
	}

	@keyframes -global-popup {
		0% {
			transform: translateY(5px);
			opacity: 0;
		}

		80% {
			transform: translateY(-1px);
		}
	}
</style>
