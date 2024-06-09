<script lang="ts">
	import Document from './document.svelte';
	import VerticalNavbar from './vertical_navbar.svelte';
	import type { Element } from '$lib';

	interface DocumentPage {
		name: string;
		elements: Element[];
		href: string;
	}

	let { docs, currentPage }: { docs: DocumentPage[]; currentPage: DocumentPage } = $props();

	let document = $derived(currentPage.elements);
</script>

<main>
	<VerticalNavbar>
		{#each docs as page, pageIndex}
			<a class="section" href="{page.href}/{pageIndex}">{page.name}</a>
			<!-- <button
				onclick={() => {
					currentPage = page;
				}}>{page.name}</button
			> -->
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

			.section:hover {
				background-color: rgba(0, 0, 255, 0.2);
				transform: translateX(-1.5px);
			}
		</style>
	</VerticalNavbar>

	<Document {document}></Document>
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
