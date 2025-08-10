import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "motion-v/nuxt",
    "@waradu/keyboard/nuxt",
    "nuxt-svgo",
    "@nuxtjs/seo",
    "@nuxt/eslint",
  ],

  site: {
    url: "",
    name: "",
    description: "",
    defaultLocale: "en",
  },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  fonts: {
    provider: "bunny",
    families: [
      {
        name: "Inter",
        provider: "bunny",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    ]
  },

  $production: {
    app: {
      head: {
        script: [
          {
            src: "https://analytics.epilogue.team/api/script.js",
            async: true,
            defer: true,
            "data-site-id": "0",
            "data-web-vitals": "true",
            "data-track-errors": "true",
          },
        ],
      }
    }
  },

  nitro: {
    preset: "bun"
  },

  svgo: {
    autoImportPath: false,
    defaultImport: "component",
    dts: true,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "",
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "author", content: "Noan" },
        {
          name: "description",
          content: "",
        },
        {
          property: "og:title",
          content: "",
        },
        {
          property: "og:description",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "",
        },
      ],
    },
  },
});