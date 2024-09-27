---
prev: false
next: false
---

# AudioBuilder

`AudioBuilder?` is injected into the globals environment by luneweb

::: warning

the application will check for audio devices on start, if none is found
`AudioBuilder` will be nil

:::

## fromBuffer <Badge text="Function"/>

Creates and returns an `AudioSource` from the provided buffer's content

```luau
function AudioBuilder.fromBuffer(content: buffer): AudioSource
```

### Supported formats

- MP3
- WAV
- Vorbis
- Flac
