<script lang="ts">
	import info from '../../docs/frontend/Info.config';
	import DocumentPage from '../../components/document_page.svelte';

	let docs = [
		{
			name: 'Info',
			elements: info
		}
	];
</script>

<DocumentPage {docs}></DocumentPage>
