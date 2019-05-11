const path = require("path")
// const webpack = require("webpack")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"))

    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
        },
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    // host: 'localhost',
    host: "0.0.0.0",
    port: 9101,
    // proxy: {
    //   '/api': {
    //     target: domain_dev,
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     ws: false,
    //     changeOrigin: true,
    //     secure: false
    //   }
    // },
    open: true, // 配置自动启动浏览器
    https: false, // https:{type:Boolean}
    hotOnly: true, // 热更新
  },
}
