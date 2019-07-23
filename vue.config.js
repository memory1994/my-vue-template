const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias.set('$mock', resolve('mock'))
  },
  devServer: {
    port: 9000,
    // proxy: {
    //   '/api/test': {
    //     target: 'https://a.com',
    //     changeOrigin: true
    //   }
    // }
  }
}