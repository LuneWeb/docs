<script lang="ts">
	import Document from './document.svelte';
	import VerticalNavbar from './vertical_navbar.svelte';
	import type { Element } from '$lib';

	interface DocumentPage {
		name: string;
		elements: Element[];
	}

	let { docs }: { docs: DocumentPage[] } = $props();

	let documentPage = $state(docs[0]);
	let document = $derived(documentPage.elements);
</script>

<main>
	<VerticalNavbar>
		{#each docs as page}
			<button
				onclick={() => {
					documentPage = page;
				}}>{page.name}</button
			>
		{/each}

		<style>
			button {
				text-align: start;
				font-weight: bolder;
				transition: 200ms;
				width: 100%;
				color: blue;
				background-color: rgba(0, 0, 0, 0.1);
				text-decoration: underline;
				border-color: transparent;
				cursor: pointer;
			}

			button:hover {
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
