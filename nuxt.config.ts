// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: "https://finora.uz/api",
      weatherApiKey: "21793259065553cf489676668ff9f166",
    },
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
  ],

  app: {
    head: {
      title: "Weather App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Weather App - Real-time weather information at your fingertips.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/logo.png" },
        { rel: "apple-touch-icon", href: "/images/logo.png" },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  fonts: {
    provider: "local",
  },

  devServer: {
    port: 3010,
  },
});
