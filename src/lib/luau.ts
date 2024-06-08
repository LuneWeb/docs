import * as register from './languages/luau';
import type { LanguageType } from 'svelte-highlight/languages';

export const luau: LanguageType<'luau'> = { name: 'luau', register: register.default };
export default luau;
