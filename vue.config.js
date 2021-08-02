module.exports = {
  lintOnSave: false,
  // 映入全局SCSS变量
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/common/variables.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/With_the_notes/dist'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '随手记 ᶘ ᵒᴥᵒᶅ '
        return args
      })
  }
}
