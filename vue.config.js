const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
   // 配置代理服务器
   devServer: {
    proxy: {
      '/api': {
        // 目标服务器
        target:'http://127.0.0.1:8082',
        // 路径重写
        // pathRewrite: {'api/':''}
      },
      '/admin':{
        target:'http://127.0.0.1:8082'
      }
    },
  },
})
