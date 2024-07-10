---
prev:
    text: "Luau"
    link: "src/luau"
next: false
---

# App

`app` is injected into the globals environment by luneweb

## exit <Badge text="Method"/>

Forcefully exit the application process with the provided exit code

```luau
function app.exit(self, exitCode: number): ()
```

---

## run <Badge text="Method"/> <Badge type="warning">Yields</Badge>

Runs the main loop of the application which is necessary
for making the `window` and `webview` component responsive

```luau
function app.run(self): ()
```

::: tip
This method runs a loop, so either call it within `task.spawn`
or at the end of your program

```luau
local task = require("@lune/task")
task.spawn(app.run, app)
```

:::

---

## onLoad <Badge text="Method"/>

Luau always runs before the webview loads even though the webview gets created first!
so make sure to use the message api only after onLoad is called

```luau
function app.onLoad(self, callback: () -> ()): ()
```

onLoad gets called everytime the page reloads, so watch out for that too!

::: tip
FYI, this method will call the provided function whenever
it receives *any* kind of message from the webview's ipc handler

This behaviour will change
when an API for listening to the ipc handler on luau gets introduced
:::

---

## shareMessage <Badge text="Method"/>

share a message between all the listeners that are created on the webview

```luau
function app.shareMessage(self, message: any): ()
```

> Example
>
> ```luau
> app:shareMessage("yap...") -- webview receives: "yap..."
> app:shareMessage({ "a", "b", "c" }) -- webview receives: [ "a", "b", "c" ]
> ```

---

## sendMessage <Badge text="Method"/> <Badge type="warning">Yields</Badge>

send a message to a channel on the webview and yield until it returns a value

```luau
function app.sendMessage(self, message: any): any
```

> Example
>
> ```luau
> local value = app:sendMessage("Channel1", "Ashley")
> print(`Channel1 returned: {value}`) -- Hello, Ashley!
> ```

::: tip

when the returned value is `undefined`, it will automatically turn into `nil`

:::
