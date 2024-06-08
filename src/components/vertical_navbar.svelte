<ul>
	<slot></slot>
</ul>

<style>
	ul {
		align-items: start;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		width: 10rem;
		background-color: rgba(0, 0, 0, 0.1);
		border-top-left-radius: 0.5rem;
		overflow: hidden;
	}

	@media (max-width: 600px) {
		ul {
			width: 100%;
		}
	}
</style>
