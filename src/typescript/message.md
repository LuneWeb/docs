---
prev: false
next: false
---

# Message API

This API provides functions for sending and receiving messages between luau<->webview

```ts
import { message } from "luneweb";
```

## listen <Badge text="Function"/>

Opens a channel and creates a listener for it

```ts
listen("ChannelName", (message) => {
    console.log(`Message shared from Luau: ${message}`)
})
```

## postMessage <Badge text="Function"/>

Provided value will be stringified into JSON before getting sent to the backend

```ts
postMessage({ a: true, b: false, c: 1000 })
```
