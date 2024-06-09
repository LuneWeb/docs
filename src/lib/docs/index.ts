import type { Element } from '$lib';
import frontendInfo from './frontend/Info';
import lune from './backend/Lune';
import backendInfo from './backend/Info';

export const documents: {
	[document: string]: {
		[page: string]: Element[];
	};
} = {
	backend: {
		info: backendInfo,
		lune: lune
	},
	frontend: {
		info: frontendInfo
	}
};
