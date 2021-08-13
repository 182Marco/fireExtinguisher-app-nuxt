export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtPlayground",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
        integrity:
          "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // "bulma",
    // CSS file in the project
    "@/assets/css/main.css",
    // SCSS file in the project
    "@/assets/css/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-calendar.js",
      mode: "client" //need to specify in which side the component is used
      // mode: 'server' // to do the opposite
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "nuxt-fontawesome"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
