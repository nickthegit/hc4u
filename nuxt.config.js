
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Beauty Bar Yeovil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The beauty bar is situated upstairs within Tesco extra right in the heart of Yeovil, the perfect location for your convenience.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css?family=Bebas+Neue|Open+Sans&display=swap' },
      { rel: 'stylesheet', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/_all.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  styleResources: {
    scss: [
      './assets/scss/_variables.scss', // use underscore "_" & also file extension ".scss"
      './assets/scss/_mediaquery.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
