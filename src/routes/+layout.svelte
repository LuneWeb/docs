<script>
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar>
	<a href="/docs/backend/Info">Backend</a>
	<a href="/docs/frontend/Info">Frontend</a>

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

<style>
	:global(body) {
		background-color: white;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
