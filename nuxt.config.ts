// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "motion-v/nuxt",
    "@nuxt/fonts",
    "nuxt-lucide-icons",
    "nuxt-svgo",
    "@nuxt/image",
  ],

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
    viewer: true,
  },

  fonts: {
    provider: "bunny",
  },

  lucide: {
    namePrefix: "Icon",
  },

  svgo: {
    autoImportPath: false,
    defaultImport: "component",
    dts: true,
  },

  ssr: false,
  devServer: { host: process.env.TAURI_DEV_HOST || "localhost" },

  vite: {
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      strictPort: true,
    },
  },
});
