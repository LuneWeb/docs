---
prev:
    text: "Message API"
    link: "src/luau/message"
next: false
---

# Others

## exit

Forcefully exit the application process with the provided exit code

```luau
function app.exit(self, exitCode: number): ()
```

## run <Badge type="warning">Yields</Badge>

Runs the main loop of the application which is necessary
for making the `window` and `webview` component responsible

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
