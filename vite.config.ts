import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    "guess-a-number": resolve(import.meta.dirname, "guess-a-number/index.html"),
  },
  base: "/style/",
});
