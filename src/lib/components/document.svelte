<script lang="ts">
	import type { Element } from '$lib';
	import theme from 'svelte-highlight/styles/panda-syntax-light';
	import Highlight from 'svelte-highlight';
	export let document: Element[];
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<main>
	{#each document as element}
		{#if element.type == 'Header'}
			<h2>{@html element.text}</h2>
		{:else if element.type == 'TinyHeader'}
			<h3>{@html element.text}</h3>
		{:else if element.type == 'Paragraph'}
			<p>{@html element.text}</p>
		{:else if element.type == 'Code'}
			<Highlight language={element.language} code={element.text} />
			<style>
				pre {
					width: 100%;
					margin-bottom: 3rem;
					animation: popup 600ms ease-out;
				}

				.hljs {
					background-color: rgb(200, 200, 200);
					font-size: 1.5rem;
				}

				@media (max-width: 600px) {
					.hljs {
						font-size: 0.8rem;
					}
				}
			</style>
		{/if}
	{/each}
</main>

<style>
	main {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		display: flex;
		border-top-right-radius: 0.5rem;
		flex-direction: column;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		width: calc(100% - 10rem);
		padding: 2rem;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 3rem;
		font-weight: bold;
		margin: 1rem;
		margin-top: 1.5rem;
		width: 100%;
		animation: popup 500ms ease-out;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 1rem;
		margin-top: 0;
		width: 100%;
		animation: popup 700ms ease-out;
	}

	p {
		font-size: 1.5rem;
		width: 100%;
		margin-top: 0;
		margin-bottom: 0;
		animation: popup 300ms ease-out;
	}

	@media (max-width: 600px) {
		main {
			padding: 1rem;
			width: 100%;
		}

		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
