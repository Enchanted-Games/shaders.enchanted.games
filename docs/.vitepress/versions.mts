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
        { text: "Includes", link: "/shaders/include" },
        { text: "Post effects", link: "/shaders/post" },
        { text: "Uniform blocks", link: "/shaders/uniforms" },
      ],
    },
    {
      text: "Tutorials",
      items: [{ text: "Coming soon", link: "" }],
    },
  ],
};
