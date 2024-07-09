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
      { text: "Configuration", link: "src/luau/config" },
      {
        text: "Luau",
        link: "src/luau",
        items: [
          {
            text: "Libraries",
            items: [{ text: "Message API", link: "src/luau/message" }],
          },
        ],
      },
      {
        text: "Typescript",
        link: "src/typescript",
        items: [
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
