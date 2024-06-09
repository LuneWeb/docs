/* eslint-disable @typescript-eslint/no-unused-vars */

import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { lua } from "svelte-highlight/languages";

const bundler_rs = "https://github.com/LuneWeb/LuneWeb-template/blob/main/src-luneweb/src/bundle.rs"

export default [
    h("LuneWeb"),
    p("Similar to Tauri, we provide our users with a Rust backend to manage their application, this allows you the developer, to have as much control as you need over your application"),
    p(`for example: the application in our <a href='${bundler_rs}'>template repo</a>, bundles scripts and assets using the include_dir! macro`),
    p("and then provides the Lua instance with an API for accessing them"),
    code(lua, [
        'local assets = require("@local/assets")',
        'local image = assets.readFile("astolfo.png") -- 😏'
    ]),
    p("although, our Rust API is not perfect right now, because most of the things that are related to windowing and webviews are locked behind the Lua API so you cannot manage those through Rust"),
]