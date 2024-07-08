---
prev: false
next:
    text: "Message API"
    link: "src/luau/message"
---

# Luau

Similar to lune, you can require luneweb libraries by using its alias

```luau
require("@luneweb/<library-name>")
```

## Types

The `setup` command will install the type definition files in your home directory
under `.luneweb/types-{version}/`

::: code-group

```shell
luneweb setup
```

```shell [output]
Installed Luau type definition files at: '"/home/<username>/.luneweb/types-<version>"'
```

:::

Now to get autocomplete while using `luau-lsp` we'll put this into `.vscode/settings.json`

```json
{
  "luau-lsp.platform.type": "standard",
  "luau-lsp.require.mode": "relativeToFile",
  "luau-lsp.require.directoryAliases": {
    "@lune/": "~/.lune/.typedefs/0.8.6/",
    "@luneweb/": "/home/<username>/.luneweb/types-<version>"
  }
}
```
