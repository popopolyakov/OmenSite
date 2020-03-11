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
      families: ['Montserrat:400,700','Open+Sans+Condensed:300'] //Loads Lato font with weights 400 and 700 
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
  buildModules: [ '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',    
  ],
  transition: 'fade',
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

