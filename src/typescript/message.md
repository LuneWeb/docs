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

listen to messages shared from luau to webview

```ts
message.listen(message => {
    console.log(`Message shared from Luau: ${JSON.Stringifiy(message)}`);
});
```

## createChannel <Badge text="Function"/>

create a channel for receiving messages and sending back results to luau

```ts
message.createChannel("Channel1", message => {
    return `Hello, ${message}!`;
});
```

::: warning
using `createChannel` on the same channel name twice will remove the previous listener
:::
