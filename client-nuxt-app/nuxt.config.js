
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'mdbvue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {
    baseURL: 'https://127.0.0.1:8000/api',
    headers: {
      'Content-Type': 'application/ld+json; charset=utf-8',
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login_check', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: `/users/7`, method: 'get', propertyName: 'user' },
        },
        // tokenRequired: true,
         tokenType: 'bearer'
        // autoFetchUser: true
      }
    }
  }

}
