import type { LanguageType } from 'svelte-highlight/languages';

type NormalElementType = 'Header' | 'TinyHeader' | 'Paragraph';

interface NormalElement {
	type: NormalElementType;
	text: string;
}

interface CodeElement {
	type: 'Code';
	text: string;
	language: LanguageType<string>;
}

export type Element = NormalElement | CodeElement;

export function createElement(type: NormalElementType, text: string): Element {
	return {
		type,
		text
	};
}

export function createHeader(text: string): Element {
	return createElement('Header', text);
}

export function createTinyHeader(text: string): Element {
	return createElement('TinyHeader', text);
}

export function createParagraph(text: string): Element {
	return createElement('Paragraph', text);
}

export function createCode(language: LanguageType<string>, lines: string[]): Element {
	let text = lines[0];

	for (const line of lines.slice(1)) {
		text += '\n' + line;
	}

	return {
		type: 'Code',
		text,
		language
	};
}
