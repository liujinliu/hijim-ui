const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://${process.env.VUE_APP_DEV_PROXY_IP}:${process.env.VUE_APP_DEV_PROXY_PORT}`,
        ws: false,
        changeOrigin: true
      }
    }
  }
})
