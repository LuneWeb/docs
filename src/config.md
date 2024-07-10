# Config

LuneWeb will try to read `luneweb.toml` from the path given
to the `luneweb run` command

## Reference

```toml
# luneweb.toml

[dev]
url = "http://localhost:5173/" # Defaults to "http://localhost:5173/"

[app]
name = "Window Title" # Defaults to "LuneWeb"
luau = "src/init.luau" # ** REQUIRED **

```
