
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
    baseURLLive: 'https://another-blog-admin.herokuapp.com/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://127.0.0.1:8000/login_check', method: 'post', propertyName: 'token' },
          logout: { url: 'https://127.0.0.1:8000/logout', method: 'get' },
          user: { url: `/users/7`, method: 'get', propertyName: 'user' },
        },
        redirect: {
          login: '/blogposts',
          logout: '/'
        },
        // tokenRequired: true,
         tokenType: 'bearer'
        // autoFetchUser: true
      },
      github: {
        client_id: '54db107e16189892c68b',
        client_secret: 'a7bf6b7a6011a8686cf7cf304151e03fe7d037e4'
      },
    },

  },
  server: {
    port: process.env.PORT || 7000
  },


}
