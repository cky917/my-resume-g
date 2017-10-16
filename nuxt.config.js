const vueLoaderConfig = require('./vue-loader.conf')
const config = require('./config')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-resume-g',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `https://${config.githubUserName}.github.io/${config.githubProjectName}/dist/favicon.ico` }
    ],
    script: [
      { src: `https://${config.githubUserName}.github.io/${config.githubProjectName}/dist/js/remfix.min.js` }
    ]
  },
  css: [
    { src: '~/static/style/reset.less', lang: 'less' },
    { src: '~/static/style/font.less', lang: 'less' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://cky917.github.io/my-resume-g/dist/',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(.min.js)$/
        })
      }
    }
  }
}
