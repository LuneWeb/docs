---
prev: false
next:
    text: "Others"
    link: "src/luau/others"
---

# Message API

This API provides functions for sending and receiving messages between luau<->webview

## onLoad

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

## shareMessage

share a message between all the listeners that are created on the webview

```luau
function app.shareMessage(self, message: any): ()
```

> ## Example
>
> ```luau
> app:shareMessage("yap...") -- webview receives: "yap..."
> app:shareMessage({ "a", "b", "c" }) -- webview receives: [ "a", "b", "c" ]
> ```

## sendMessage <Badge type="warning">Yields</Badge>

send a message to a channel on the webview and yield until it returns a value

```luau
function app.sendMessage(self, message: any): any
```

> ## Example
>
> ```luau
> local value = app:sendMessage("Channel1", "Ashley")
> print(`Channel1 returned: {value}`) -- Hello, Ashley!
> ```

::: warning
this method will error when the webview returns `undefined`
so it is recommeneded to use `sendMessage` in a `pcall`

```luau
local success, value = pcall(app.sendMessage, app, "Channel1", "Ashley")

if success then
    print(`Channel1 returned: {value}`) -- Hello, Ashley!
end
```

:::
