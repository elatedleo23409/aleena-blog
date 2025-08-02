// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://elatedleo23409.github.io",
  output: "static",
  base: "/aleena-blog",
  integrations: [mdx(), sitemap()],
});
