/* eslint-disable @typescript-eslint/no-unused-vars */

import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { luau } from "$lib/luau";

const bundler_rs = "https://github.com/LuneWeb/LuneWeb-template/blob/main/src-luneweb/src/bundle.rs"

export default [
    h("LuneWeb"),
    p("Similar to Tauri, we provide our users with a Rust backend to manage their application, this allows you the developer, to have as much control as you need over your application"),
    p(`<br>for example: the application in our <a href='${bundler_rs}'>template repo</a>, bundles scripts and assets using the include_dir! macro`),
    p("and then provides the Lua instance with an API for accessing them"),
    code(luau, [
        'local assets = require("@local/assets")',
        'local image = assets.readFile("astolfo.png") -- 😏'
    ]),
]