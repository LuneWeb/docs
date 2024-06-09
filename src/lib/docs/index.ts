import type { Element } from '$lib';
import frontendInfo from './frontend/Info';
import backendInfo from './backend/Info';
import lune from './backend/Lune';
import setup from './backend/Setup';

export const documents: {
	[document: string]: {
		[page: string]: Element[];
	};
} = {
	backend: {
		Info: backendInfo,
		['Our Lune fork']: lune,
		['Basic Setup']: setup
	},
	frontend: {
		Info: frontendInfo
	}
};
