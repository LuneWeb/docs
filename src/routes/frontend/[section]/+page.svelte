<script lang="ts">
	let { data } = $props();

	import info from '$lib/docs/frontend/Info';
	import DocumentPage from '$lib/components/document_page.svelte';

	let docs = [
		{
			name: 'Info',
			elements: info,
			href: '/frontend'
		}
	];

	let currentPage = $derived(docs[data.index]);
</script>

<DocumentPage {docs} {currentPage}></DocumentPage>
