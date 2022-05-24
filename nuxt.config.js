export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-app-v2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/styles.scss",
  ],

  js: ["~/node_modules/bootstrap/dist/js/bootstrap.min.js"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http", "@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    // middleware: ["authToken"],

    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue"),
      });
    },
  },

  loading: {
    color: "blue",
    height: "2px",
  },

  env: {
    baseUrl: process.env.BASE_URL || "",
    IEEE: process.env.IEEE || "",
  },
};
