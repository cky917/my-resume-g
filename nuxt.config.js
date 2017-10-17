const vueLoaderConfig = require('./vue-loader.conf')
const config = require('./config')
const gitHubHttpUrl = `https://${config.githubUserName}.github.io/${config.githubProjectName}/`

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '我的简历',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${gitHubHttpUrl}/favicon.ico` }
    ],
    script: [
      { src: `${gitHubHttpUrl}/js/remfix.min.js` }
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
    publicPath: gitHubHttpUrl,
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
