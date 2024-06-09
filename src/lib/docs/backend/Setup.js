import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";
import { json, lua, rust } from "svelte-highlight/languages";

const mlua = 'https://docs.rs/mlua/latest/mlua/'
const sandboxing = 'https://luau-lang.org/sandbox'
const scheduler = 'https://crates.io/crates/mlua-luau-scheduler'

export default [
    h("Example"),
    p("Caution: this example is not tested"),
    th("Dependencies"),
    code(json, [
        `[dependencies.luneweb]
git = "https://github.com/LuneWeb/LuneWeb-rs"
rev = "da5f2a65ab8ac53b759729da45098e0e6d41646c"

[dependencies.lune-std]
git = "https://github.com/LuneWeb/Lune"
rev = "96570554fd6bb5ae6f483fea29337822ca10b0c2"
package = "lune-std"

[dependencies.mlua-luau-scheduler]
git = "https://github.com/LuneWeb/Lune"
rev = "e1d5448e9ad01a65afe5c702e4ca0af420edd0b3"
package = "mlua-luau-scheduler"

[dependencies]
mlua = { version = "0.9.8", features = ["luau"] }
tokio = { version = "1.37.0", features = ["macros"] }`
    ]),
    p("We will define our main function like this"),
    code(rust, [
        `#[tokio::main]`,
        `async fn main() -> mlua::Result<()> {\n\n}`
    ]),
    p(`We'll first make a Lua instance using <a href="${mlua}">mlua</a>, and we'll wrap it in an Rc which will be used by LuneWeb and Lune to create weak references`),
    code(rust, [
        `let lua = Rc::new(mlua::Lua::new());`,
    ]),
    p("Now we'll use the `patch_lua` function from LuneWeb on our Lua instance"),
    p("this function creates a weak reference to our Lua instance which will be used by both Lune and LuneWeb later on"),
    code(rust, [
        `luneweb::lua::patch_lua(&lua);`
    ]),
    p("This step is totally optional, but we'll go ahead and sandbox our Lua instance, this feature is Luau specific and does some optimizations which could make our code go faster"),
    p(`want to know more about sandboxing? then click here -> <a href="${sandboxing}">luau-lang.org/sandbox</a>`),
    code(rust, [
        `lua.sandbox(true)?;`
    ]),
    p("Now we'll create a GlobalsContextBuilder using our fork of lune-std"),
    code(rust, [
        `let mut builder = GlobalsContextBuilder::default();`
    ]),
    p("We'll use that to inject Lune and LuneWeb libraries to our Lua instance"),
    code(rust, [
        `luneweb::lua::inject_globals(&mut builder)?;`,
        `lune_std::inject_libraries(&mut builder)?;`,
    ]),
    p("Then we'll inject all the globals from lune (e.g. require, print, _G)"),
    code(rust, [
        `lune_std::inject_globals(&lua, &builder.build())?;`
    ]),
    p("<hr \\>"),
    p(`Alright, our Lua instance is ready to be used, all we have to do now is create a scheduler using <a href="${scheduler}">mlua-luau-scheduler</a>, and then load our scripts`),
    code(rust, [
        `let sched = Scheduler::new(&lua);\n`,
        `let path = PathBuf::from("src/init.luau"); // path to our luau script`,
        `let src = fs::read(path).unwrap(); // our luau script's content`
    ]),
    p("Now let's give our script to our Lua instance and create a Chunk"),
    code(rust, [
        `// THIS WON'T WORK`,
        `let chunk = lua.load(src);`
    ]),
    p("Lune's require function needs to know where our script is located, to do that we need to set our Chunk's name to our script's path"),
    code(rust, [
        `// THIS WILL WORK`,
        `let name = current_dir().unwrap().join(path).to_string_lossy();`,
        `let chunk = lua.load(src).set_name(name);`
    ]),
    p("Now we'll push our Chunk into the scheduler and run it 😀"),
    code(rust, [
        `sched.push_thread_back(chunk, ())?;`,
        `sched.run().await;`,
        `Ok(())`
    ]),
    th("Full code"),
    code(rust, [
        `#[tokio::main]
async fn main() -> mlua::Result<()> {
    let lua = Rc::new(mlua::Lua::new());
    luneweb::lua::patch_lua(&lua);
    lua.sandbox(true)?;

    let mut builder = GlobalsContextBuilder::default();
    luneweb::lua::inject_globals(&mut builder)?;
    lune_std::inject_libraries(&mut builder)?;
    lune_std::inject_globals(&lua, &builder.build())?;

    let sched = Scheduler::new(&lua);

    let path = PathBuf::from("src/init.luau"); // path to our luau script
    let src = fs::read(path).unwrap(); // our luau script's content

    let name = current_dir().unwrap().join(path).to_string_lossy();
    let chunk = lua.load(src).set_name(name);

    sched.push_thread_back(chunk, ())?;
    sched.run().await;
    Ok(())
}`
    ]),
    p("<hr \\>"),
    h("Luau code"),
    p("LuneWeb has injected a few libraries to our Lua instance, let's make a webview with them"),
    code(lua, [
        `local eventLoop = require("@luneweb/event_loop")\n`,
        `local window = require("@luneweb/window").new()`,
        `local webviewBuilder = require("@luneweb/webview").new()\n`,
        `webviewBuilder:with_url("https://roblox.com")`,
        `webviewBuilder:with_initialization_script("console.log('Page loaded')")\n`,
        `local webview = webviewBuilder:build(window)`,
        `webview:evaluate_script("console.log('Window created')")\n`,
        `eventLoop.subscribe(window.id, function(event)`,
        `   if event == "CloseRequested" then`,
        `       window:close()`,
        `   end`,
        `end)`
    ]),
]   