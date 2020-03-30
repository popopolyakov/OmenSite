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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese' }
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/main.sass', lang: 'sass'} 
  ],
  /*
  ** ШРИФТ
  */
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,700','Open+Sans+Condensed:300'] //Loads Lato font with weights 400 and 700 
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv', '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/axios',
  /*   '@nuxtjs/auth', */
  ],
  /*
  **NUXT AUTH
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  },

/*   auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' }
        }, 
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      }
    }
  },*/
  /*
  **  VUETIFY FOR ADMIN
  */
 vuetify: {
  /* module options */
    defaultAssets: {
      font: true,
      icons: 'md'
    },
    icons: {
      iconfont: 'md',
    }
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend (config, ctx) {
    config.module.rules.push({
      test: /\.(vtk)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    })
  }
  }
}
