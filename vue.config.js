const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/grades': {
        target: 'https://quanmgx57hjiqicdxgo2vzebqq0tghim.lambda-url.ap-southeast-1.on.aws',
        changeOrigin: true,
      },
      '/api/timeout': {
        target: 'localhost:3000/timeouttest',
        changeOrigin: true,
      },
    } 
  }
})
