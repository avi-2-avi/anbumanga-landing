import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
});
