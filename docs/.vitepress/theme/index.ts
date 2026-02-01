// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VersionSwitcher from "@viteplus/versions/components/version-switcher.component.vue";
import "./style.css";
import UniformLink from "../components/UniformLink.vue";
import Sampler from "../components/Sampler.vue";
import DefineDirective from "../components/DefineDirective.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("VersionSwitcher", VersionSwitcher);
    app.component("UniformLink", UniformLink);
    app.component("Sampler", Sampler);
    app.component("DefineDirective", DefineDirective);
  },
} satisfies Theme;
