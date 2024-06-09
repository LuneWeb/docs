import { documents } from '$lib/docs';

export function load() {
	return {
		documents: Object.keys(documents)
	};
}
