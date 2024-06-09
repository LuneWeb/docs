<script>
	import { base } from '$app/paths';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar>
	<a href="/backend/0">Rust API</a>
	<a href="/frontend/0">Template</a>

	<style>
		nav a {
			background-color: transparent;
			border-radius: 0rem;
			transition: 250ms;
			font-size: 2rem;
			margin: 0.15rem;
		}

		nav a:hover {
			transform: rotate(-2.5deg);
			background-color: rgba(0, 0, 0, 0.1);
			border-radius: 0.15rem;
			font-size: 2rem;
			margin: 0.15rem;
		}
	</style>
</Navbar>

<slot></slot>
