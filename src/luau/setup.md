---
prev: false
next: false
---

# Setup

This page will help you go through the process of setting up luneweb

## Libraries

The `setup` command will install libraries that are written in plain luau
at project directory under `.luneweb/`.

it's recommended to add this directory to .gitignore since its generated automatically

::: code-group

```shell
luneweb setup
```

```shell [output]
Installed Luau type definition files at: "path/to/cwd/.luneweb/.libraries-<version>"
```

:::

now since these libraries are written in plain Luau, you have to
create a file with the name of `.luaurc` and add these libraries
as an `alias` like this:

::: code-group

```json [.luaurc]
{
  "aliases": {
    "luneweb": ".luneweb/.libraries-<version>/"
  }
}
```

:::

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

::: code-group

```json [.vscode/settings.json]
{
  "luau-lsp.platform.type": "standard",
  "luau-lsp.require.mode": "relativeToFile",
  "luau-lsp.types.definitionFiles": [
    "~/.luneweb/.type_defs-<version>.d.luau"
  ],
  "luau-lsp.require.directoryAliases": {
    "@luneweb/": ".luneweb/.libraries-<version>/"
  }
}
```

:::

## Lune Types (optional)

LuneWeb supports lune's standard libraries
so if you've already used `lune setup` to install it's type definition files
you can add them to your lsp's settings aswell

::: code-group

```json [.vscode/settings.json]
"luau-lsp.require.directoryAliases": {
  "@lune/": "~/.lune/.typedefs/<version>/"
}
```

:::
