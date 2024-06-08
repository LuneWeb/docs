<script lang="ts">
	import type { Element } from '$lib';
	import theme from 'svelte-highlight/styles/panda-syntax-light';
	import Highlight from 'svelte-highlight';
	import document from '../../docs/Intro.confing';
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<h1>Intro</h1>

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
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		padding: 2rem;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 3rem;
		font-weight: lighter;
		margin: 1rem;
		margin-top: 3rem;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.05);
	}

	h3 {
		font-size: 1.5rem;
		text-decoration: underline;
		font-weight: lighter;
		margin: 1rem;
		margin-top: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.05);
	}

	p {
		font-size: 1.5rem;
		width: 100%;
		margin-top: 0;
		margin-bottom: 0;
	}

	@media (max-width: 600px) {
		main {
			padding: 1rem;
		}

		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
