/* eslint-disable @typescript-eslint/no-unused-vars */

import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { json } from "svelte-highlight/languages";

const github = "https://github.com/LuneWeb/LuneWeb-types"

export default [
    h("Luau Types"),
    p(`This <a href="${github}">repo</a> provides types for all the luneweb libraries, all you have to do is to either clone it or add it to your repo as a submodule`),
    p("To get autocomplete, the Luau Language Server extension on VSCode is recommended, after installing the extension, go to `.vscode/settings.json` in your project directory and change it to this:"),
    code(json, [
        `{
  "luau-lsp.require.mode": "relativeToFile",
  "luau-lsp.types.roblox": false,
  "luau-lsp.require.directoryAliases": {
    "@luneweb/": "path/to/LuneWeb-types",
  }
}`
    ])
]