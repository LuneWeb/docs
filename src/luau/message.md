---
prev: false
next: false
---

# Message API

This API provides functions for sending and receiving messages between luau<->webview

```luau
local message = require("@luneweb/message")
```

## onLoad

Luau always runs before the webview loads even though the webview gets created first!
so make sure to use the message api only after onLoad is called

```luau
message.onLoad(function()
    -- webview has fully loaded
end)
```

onLoad gets called everytime the page reloads, so watch out for that too!

## share

share a message between all the listeners that are created on the web

```luau
message.share("yap...") -- webview receives: "yap..."
message.share({ "a", "b", "c" }) -- webview receives: [ "a", "b", "c" ]
```

## send <Badge type="warning">Yields</Badge>

send a message to a channel on the web and yield until it returns a value

```luau
local value = message.send("Channel1", "Ashley")
print(`Channel1 returned: {value}`) -- Hello, Ashley!
```
