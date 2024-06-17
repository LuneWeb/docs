import { lua, rust, type LanguageType } from 'svelte-highlight/languages';

export const langs: {
	[key: string]: LanguageType<string>;
} = {
	rust: rust,
	lua: lua
};

export type Element =
	| {
			tag: 'e';
			innerHTML: string;
	  }
	| {
			tag: 'codeblock';
			lang: string;
			code: string;
	  };

export type Document = {
	Path: string;
	Pages: { [key: string]: string };
};

export const documents: {
	[name: string]: Document;
} = {
	Testing: {
		Path: 'docs/Testing',
		Pages: {
			Intro: 'Intro.json',
			Decription: 'Desc.json'
		}
	}
};
