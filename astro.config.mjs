import { resolve } from "node:path";

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import { shield } from "@kindspells/astro-shield";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    shield({
      sri: {
        hashesModule: modulePath,
        enableMiddleware: true,

        scriptsAllowListUrls: [
          "https://js.hs-banner.com/v2/46369129/banner.js",
          "https://js.hs-analytics.net/analytics/1717468800000/46369129.js",
          "https://js-na1.hs-scripts.com/46369129.js",
        ],
        stylesAllowListUrls: [],
      },
    }),
  ],
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
});
