import { json, lua, rust, type LanguageType } from 'svelte-highlight/languages';

export const langs: {
	[key: string]: LanguageType<string>;
} = {
	rust: rust,
	lua: lua,
	json: json
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
	rust: {
		Path: 'docs/rust',
		Pages: {
			Info: 'info.json',
			Lune: 'lune.json'
		}
	},
	luau: {
		Path: 'docs/luau',
		Pages: {
			Types: 'types.json'
		}
	}
};
