import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { luau } from "$lib/luau";
import { rust } from "svelte-highlight/languages";

export default [
    h("Lune"),
    p("We've forked Lune and added an struct with the name of GlobalsContext to it"),
    p("this struct allows us to add custom libraries, and add modules without having to add them to the filesystem"),
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