module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SETSUNA-WANG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Xinxing Li 的个人主页' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
    ** Global CSS
    */
   css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

