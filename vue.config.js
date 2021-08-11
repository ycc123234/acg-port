module.exports = {
  devServer: {
    proxy: 'http://localhost:8888',
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/_variable.scss"`
      }
    }
  },
  chainWebpack: config => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
      config.module.rule('scss').oneOf(match).use('sass-loader')
        .tap(opt => Object.assign(opt, { data: `@import '~@/_variable.scss';` }))
    })
  }  
}