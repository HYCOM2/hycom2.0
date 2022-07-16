module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/HYCOM/r2.2/' : '/',
  outputDir: './dist/HYCOM/r2.2/',
  pwa: {
    name: 'HYCOM'
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess(config) {
        config.plugins.delete('workbox')
        config.plugins.delete('pwa')
      },
      builderOptions: {
        appId: "com.github.hycom2",
        directories: {
          output: './dist_electron'
        },
        afterSign: "./build/notarize.js",
        win: {
          icon: './public/favicon.ico',
          target: "nsis"
        },
        nsis: {
          "oneClick": false
        }
      }
    }
  }
}