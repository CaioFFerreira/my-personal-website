export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'Vough Leads',
    htmlAttrs: {
      lang: 'en',
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

  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],

  styleResources: {
    scss: './assets/scss/*.scss',
  },

  modules: ['nuxt-i18n'],
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
          leads: {
            noResults: 'No results...',
            errorNetwork: 'Contact the Vought support team: (12) 1231-1231',
            searchText: 'Search',
          },
          page404: {
            text: 'Error 404 - Not found',
            buttonBack: 'Back home',
          },
          modal: {
            profile: 'Profile',
            name: 'Name',
            userName: 'Username',
            email: 'E-mail',
            address: 'Address',
            phone: 'Phone',
            website: 'Website',
            company: 'Company',
            catchPhrase: 'Catch Phrase',
            category: 'Category',
          },
        },
      },
    },
  },
  build: {},
}
