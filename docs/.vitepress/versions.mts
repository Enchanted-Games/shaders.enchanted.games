import { SidebarType } from "@viteplus/versions";

export const latest: string = "1.21.11";

export const sidebars: SidebarType = {
  // root used for latest version and default for versions without a custom navbar
  root: [
    {
      text: "Introduction",
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Useful tools", link: "/useful-tools" },
      ],
    },
    {
      text: "Shaders",
      items: [
        { text: "Core shaders", link: "/shaders/core" },
        { text: "List of core shaders", link: "/shaders/core-list" },
        { text: "Includes", link: "/shaders/include" },
        { text: "Post effects", link: "/shaders/post" },
        { text: "List of post effects", link: "/shaders/post-list" },
        { text: "Uniform blocks", link: "/shaders/uniforms" },
      ],
    },
    {
      text: "Tutorials",
      items: [{ text: "Coming soon", link: "" }],
    },
  ],
};
