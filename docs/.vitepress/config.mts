import { defineVersionedConfig } from "@viteplus/versions";
import { latest, sidebars } from "./versions.mts";

// https://vitepress.dev/reference/site-config
export default defineVersionedConfig({
  title: "Vanilla Shader Docs",
  description: "Unoffical documentation for Minecraft Java Edition resourcepack shaders",

  // Version configuration
  versionsConfig: {
    current: latest,
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

    sidebar: sidebars,

    socialLinks: [
      { icon: "github", ariaLabel: "github repository", link: "https://github.com/Enchanted-Games/shaders.enchanted.games" },
      {
        icon: {
          svg: `
          <svg width="32" height="32" viewBox="0 0 32 32">
            <image width="32" height="32" xlink:href="https://enchanted.games/favicon.ico"/>
          </svg>
          `,
        },
        ariaLabel: "enchanted games' website",
        link: "https://enchanted.games",
      },
    ],
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
