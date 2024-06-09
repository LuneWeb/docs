import type { Element } from '$lib';
import info from './rust/Info';
import lune from './rust/Lune';
import setup from './rust/Setup';

export const documents: {
	[document: string]: {
		[page: string]: Element[];
	};
} = {
	Rust: {
		Info: info,
		['Our Lune fork']: lune,
		['Basic Setup']: setup
	}
};
