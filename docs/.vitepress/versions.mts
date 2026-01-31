import { SidebarType } from "@viteplus/versions";

export const latest: string = "1.21.11";

export const sidebars: SidebarType = {
  // root used for current version and default for versions without a custom navbar
  root: [
    {
      text: "Examples",
      items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
    },
  ],
};
