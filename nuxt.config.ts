// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-primevue",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  css: ["@/assets/css/index.css"],
  primevue: {
    options: {
      unstyled: true,
    },
    components: {
      include: [
        "InputText",
        "DataTable",
        "Column",
        "Dropdown",
        "Button",
        "Checkbox",
        "Tag",
        "Password",
        "Textarea",
        "Sidebar",
        "OverlayPanel",
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
