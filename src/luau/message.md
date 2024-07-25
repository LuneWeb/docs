---
prev: false
next: false
---

# Message

This class is used for transfering messages between Luau and WebView

## send <Badge text="Method"/>

`send` sends a message to the `WebView`

```luau
function send(self, channel: string, message: any): ()
```

## listen <Badge text="Method"/>

`listen` returns a function which can be used to listen to messages sent by `WebView`

```luau
function listen(self): (callback: (message: any) -> ()) -> () 
```

::: tip Example

```luau
local task = require("@lune/task")

local window = WindowBuilder.new("Window", "about:blank")
local listen = window.message:listen()

-- listener runs in a loop, so it's recommend to use it inside its own thread
task.spawn(listen, function(message)
    if message == "loaded" then
        print("Page loaded")
    end
end)
```

:::
