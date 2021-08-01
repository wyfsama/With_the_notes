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
    : '/'
}
