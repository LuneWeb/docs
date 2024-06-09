<script lang="ts">
	let { data } = $props();

	import luneweb from '$lib/docs/backend/LuneWeb';
	import lune from '$lib/docs/backend/Lune';
	import DocumentPage from '$lib/components/document_page.svelte';

	let docs = [
		{
			name: 'LuneWeb',
			elements: luneweb,
			href: '/backend'
		},
		{
			name: 'Lune',
			elements: lune,
			href: '/backend'
		}
	];

	let currentPage = $derived(docs[data.index]);
</script>

<DocumentPage {docs} {currentPage}></DocumentPage>
