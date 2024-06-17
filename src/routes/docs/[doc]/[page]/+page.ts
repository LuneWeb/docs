import type { PageLoad } from './$types';
import { documents } from '$lib/docs';
import { base } from '$app/paths';

export const load: PageLoad = async ({ params, fetch }) => {
	const document = documents[params.doc];
	const page = await fetch(`${base}/${document.Path}/${document.Pages[params.page]}`);

	return {
		docName: params.doc,
		pageName: params.page,
		document,
		page
	};
};
