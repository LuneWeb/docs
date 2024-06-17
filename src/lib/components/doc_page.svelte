<script lang="ts">
	import { langs, type Element } from '$lib/docs';
	import theme from 'svelte-highlight/styles/solarized-light';
	import Highlight from 'svelte-highlight';

	export let elements: Element[];
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<main>
	{#each elements as element}
		{#if element.tag === 'codeblock'}
			<Highlight language={langs[element.lang]} code={element.code} />
			<style>
				pre {
					width: 100%;
					margin-bottom: 3rem;
					animation: popup 600ms ease-out;
				}

				.hljs {
					background-color: rgb(210, 210, 210);
					font-size: 1.5rem;
				}

				@media (max-width: 600px) {
					.hljs {
						font-size: 0.8rem;
					}
				}
			</style>
		{:else if element.tag as string === "h2"}
			<h2>{@html element.innerHTML}</h2>
		{:else if element.tag as string === "h3"}
			<h3>{@html element.innerHTML}</h3>
		{:else if element.tag as string === "p"}
			<p>{@html element.innerHTML}</p>
		{:else}
			<p>{element.tag} is not allowed</p>
		{/if}

		<style>
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
				margin-bottom: 1.5rem;
				animation: popup 300ms ease-out;
				text-wrap: balance;
			}

			@media (max-width: 600px) {
				h2 {
					font-size: 2rem;
				}

				p {
					font-size: 1rem;
				}
			}
		</style>
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

	@media (max-width: 600px) {
		main {
			padding: 1rem;
			width: 100%;
		}
	}
</style>
