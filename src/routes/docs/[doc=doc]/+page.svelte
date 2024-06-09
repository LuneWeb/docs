<script lang="ts">
	let { data } = $props();

	import DocumentPage from '$lib/components/document_page.svelte';
	import { documents } from '$lib/docs';
</script>

<DocumentPage docs={documents[data.doc]}></DocumentPage>
