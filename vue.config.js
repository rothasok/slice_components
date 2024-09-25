const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // add
  devServer:{
    // proxy:'http://172.23.129.202'
    proxy: 'https://api.tfdevs.com'
  }
})
