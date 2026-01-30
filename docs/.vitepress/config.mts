import { defineVersionedConfig } from "@viteplus/versions";

// https://vitepress.dev/reference/site-config
export default defineVersionedConfig({
  title: "Vanilla Shader Docs",
  description: "Unoffical documentation for Minecraft Java Edition resourcepack shaders",

  // Version configuration
  versionsConfig: {
    current: "1.21.11",
    versionSwitcher: false,

    hooks: {
      rewritesHook: (source: string, version: string, locale: string) => {
        // Custom URL structure (version first, then locale)
        return `${version}/${source}`;
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: {
      root: [{ text: "Home", link: "/" }, { component: "VersionSwitcher" }],
    },

    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
