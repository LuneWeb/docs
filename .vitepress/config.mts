import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LuneWeb",
  description: "create applications with lune and tauri",
  lang: "en-US",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      { text: "Install", link: "src" },
      {
        text: "Luau",
        items: [
          { text: "Setup", link: "src/luau/setup" },
          {
            text: "Globals",
            items: [
              { text: "WindowBuilder", link: "src/luau/window_builder" },
              { text: "AudioBuilder", link: "src/luau/audio_builder" },
            ],
          },
          {
            text: "Classes",
            items: [
              { text: "Window", link: "src/luau/window" },
              { text: "WebView", link: "src/luau/webview" },
              { text: "Message", link: "src/luau/message" },
              { text: "AudioSource", link: "src/luau/audio_source" },
            ],
          },
        ],
      },
      {
        text: "Typescript",
        link: "src/typescript",
        items: [
          { text: "Install", link: "src/typescript/install" },
          {
            text: "Libraries",
            items: [{ text: "Message API", link: "src/typescript/message" }],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/luneweb/docs" }],
  },
});
