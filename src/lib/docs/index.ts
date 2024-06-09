import { base } from '$app/paths';
import type { DocumentPage } from '$lib/types';
import lune from './backend/Lune';
import luneweb from './backend/LuneWeb';
import info from './frontend/Info';

export const documents: {
	[document: string]: DocumentPage[];
} = {
	backend: [
		{
			name: 'luneweb',
			elements: luneweb,
			href: `${base}/docs/backend`
		},
		{
			name: 'lune',
			elements: lune,
			href: `${base}/docs/backend`
		}
	],
	frontend: [
		{
			name: 'info',
			elements: info,
			href: `${base}/docs/frontend`
		}
	]
};
