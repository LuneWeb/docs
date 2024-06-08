<script lang="ts">
	import luneweb from '../docs/backend/LuneWeb';
	import lune from '../docs/backend/Lune';
	import DocumentPage from '../components/document_page.svelte';

	let docs = [
		{
			name: 'LuneWeb',
			elements: luneweb
		},
		{
			name: 'Lune',
			elements: lune
		}
	];
</script>

<DocumentPage {docs}></DocumentPage>
