const { resolve } = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'dist/demo',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/demo'),
        'vue-feather-icon': resolve(__dirname, 'dist/lib/library.esm.js'),
      },
    },
  }
};
