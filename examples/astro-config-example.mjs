/**
 * Example: Astro Configuration (for @vercel/analytics < 1.4.0)
 * 
 * If you're using an earlier version of @vercel/analytics, configure
 * the webAnalytics property of the Vercel adapter instead.
 */

import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});
