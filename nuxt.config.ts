import vsharp from "vite-plugin-vsharp";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    stripeSecret: "",
    public: {
      stripeKey: "",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  vite: {
    plugins: [vsharp()],
  },
  nitro: {
    prerender: {
      routes: ["/landing"],
    },
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/*"],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-07-06",
});
