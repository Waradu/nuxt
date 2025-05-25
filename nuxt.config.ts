// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "motion-v/nuxt",
    "@nuxt/fonts",
    "nuxt-lucide-icons",
    "@nuxtjs/plausible",
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

  plausible: {
    ignoredHostnames: ["localhost", "127.0.0.1"],
    domain: ".",
    apiHost: "https://plausible.wireway.ch",
    autoOutboundTracking: true,
    proxy: true,
  },

  svgo: {
    autoImportPath: false,
    defaultImport: "component",
    dts: true,
  },
});
