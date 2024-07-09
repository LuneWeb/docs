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
          { text: "Setup", link: "src/luau/setup" },
          {
            text: "Globals",
            items: [{ text: "App", link: "src/luau/app" }],
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
