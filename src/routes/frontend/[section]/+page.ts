import type { RouteParams } from './$types';

export function load({ params }: { params: RouteParams }) {
	return {
		index: Number(params.section)
	};
}
