const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/main.js',
      template: 'public/index.html',
      title: 'Artists E-commerce',

    },
    success: {
      entry: 'src/pages/success.js',
      template: 'public/index.html',
      title: 'Thanks For Shopping!',
      
    },
    failure: {
      entry: 'src/pages/failure.js',
      template: 'public/index.html',
      title: 'Stripe Error',
      
    }
  }
})
