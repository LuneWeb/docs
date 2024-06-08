import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { luau } from "$lib/luau";
import { rust } from "svelte-highlight/languages";

export default [
    h("LuneWeb"),
    p("Similar to Tauri, we manage our application with Rust and Cargo, this allows you (the developer) to have as much control as you need over how the application is built"),
    p("<br>for example: the application in our template repo, bundles scripts and assets using the include_dir! macro"),
    p("and then provides the Lua instance with an API for using them"),
    code(luau, [
        'local assets = require("@local/assets")',
        'local image = assets.readFile("astolfo.png")'
    ]),
    h("LuneWeb/Lune"),
    p("We've forked Lune and added an struct with the name of GlobalsContext to it"),
    p("this struct allows us to add custom libraries, and add modules that don't have to exist on the filesystem to the require function"),
    p("<hr \\>"),
    th("Making libraries:"),
    code(rust, [
        'let builder = GlobalsContextBuilder::new();\n',
        `builder.with_alias("luneweb", |modules| {
    modules.insert("funny_number", LuneModuleCreator::LuaValue(|lua| {
        Ok(1000)
    }))
    
    Ok(())
})?;`,
    ]),
    code(luau, [
        'local funnyNumber = require("@luneweb/funny_number")',
        'print(funnyNumber) -- prints 1000'
    ]),
    th("Adding modules:"),
    p("This is what our template repo uses to bundle scripts"),
    code(rust, [
        'let builder = GlobalsContextBuilder::new();',
        'let script = "return 6009";',
        'let absolute_path = current_dir()?.join("unfunny_number");\n',
        'builder.with_script(absolute_path, Cow::from(script.as_bytes()));'
    ]),
    code(luau, [
        'local unfunnyNumber = require("unfunny_number")',
        'print(unfunnyNumber) -- prints 6009'
    ])
]