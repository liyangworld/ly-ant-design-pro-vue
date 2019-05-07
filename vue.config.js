module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A"
        },
        javascriptEnabled: true
      }
    }
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
    hotOnly: true // 热更新
  }
}
