// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkObsidianCallout from "remark-obsidian-callout";
import remarekEmjoi from "remark-emoji";
import remarkCallout from "remark-callout";

// https://astro.build/config
export default defineConfig({
  site: 'https://ver0810.github.io/',
  base: '/verblog/',
  markdown: {
    remarkPlugins: [ [remarkCallout, { types: ['note', 'warning', 'tip', 'error'] }], [remarkMath, remarkObsidianCallout]],
    rehypePlugins: [rehypeMathjax],
    shikiConfig: {
      theme: "catppuccin-frappe",
    },
  },
  integrations: [
    icon({
      include: {
        "fa-solid": ["*"],
        lucide: ["*"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
