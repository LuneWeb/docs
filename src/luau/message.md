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

`listen` calls the provided callback function whenever
it receives a message from `WebView`

```luau
function listen(self, callback: (message: any) -> ()): () 
```

::: tip Example

```luau
local window = WindowBuilder.new("Window", "about:blank")

-- listener runs in a loop, so it's recommend to use it inside its own thread
window.message:listen(function(message)
    if message == "loaded" then
        print("Page loaded")
    end
end)
```

:::
