import type { RouteParams } from './$types';

export function load({ params }: { params: RouteParams }) {
	return {
		doc: params.doc
	};
}
