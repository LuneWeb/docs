---
prev: false
next:
    text: "Message API"
    link: "src/luau/message"
---

# Luau

Luneweb adds a variable called `app` with the type of `App`
into the globals environment

```luau
app:onLoad(function()
  print("Page loaded!")
end)

app:run()
```

## LuneWeb Types

The `setup` command will install the type definition files in your home directory
under `.luneweb/`

::: code-group

```shell
luneweb setup
```

```shell [output]
Installed Luau type definition files at: "/home/<username>/.luneweb/.type_defs-<version>.d.luau"
```

:::

Now to get autocomplete while using `luau-lsp` we'll put this into `.vscode/settings.json`

```json
{
  "luau-lsp.platform.type": "standard",
  "luau-lsp.require.mode": "relativeToFile",
  "luau-lsp.types.definitionFiles": [
    "/home/<username>/.luneweb/.type_defs-<version>.d.luau"
  ]
}
```

## Lune Types (optional)

LuneWeb supports lune's standard libraries
so if you've already used `lune setup` to install it's type definition files
you can add them to your lsp's settings aswell

```json
"luau-lsp.require.directoryAliases": {
  "@lune/": "~/.lune/.typedefs/<version>/"
}
```
