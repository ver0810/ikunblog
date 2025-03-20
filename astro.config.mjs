// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
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
