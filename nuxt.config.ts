// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/eslint",
  ],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/*"],
      cookieRedirect: true,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-07-06",
});
