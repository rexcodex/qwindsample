import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import { SITE } from "./src/config.mjs";

export default defineConfig(() => {
  return {
    base: SITE.basePathname,
    plugins: [
      qwikCity({
        trailingSlash: SITE.trailingSlash,
      }),
      qwikVite(),
      tsconfigPaths(),
      builderDevTools(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
