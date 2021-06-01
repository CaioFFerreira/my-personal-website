export default {
  target: 'static',
  ssr: true,

  server: {
    host: '0.0.0.0',
  },
  router: {
    // base: '/app/',
    // routeNameSplitter: '/',
    // mode: 'hash',
    trailingSlash: true,
  },

  head: {
    title: 'CaioFFerreira',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap',
      },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    jit: true,
  },

  styleResources: {
    scss: './assets/scss/*.scss',
  },

  modules: ['nuxt-i18n', '@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          home: {
            button: 'See Leads',
          },
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://www.caiofferreira.com/',
    routes: ['/blog/'],
  },
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  build: {},
}
