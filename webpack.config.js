const path = require('path')
module.exports = {
  // 入口
  entry: {
    entry: './src/entery.js',
    entry2: './src/entry2.js'
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // 出口和入口文件名一样
  },
  // 模块，解读
  module: {},
  // 配置插件
  plugins: [],
  // 配置服务
  devServer: {
    // https://www.webpackjs.com/configuration/dev-server/#devserver
    contentBase: path.resolve(__dirname, 'dist'),
    host: '192.168.2.220',
    compress: true, // 服务器压缩
    port: 7777 // 端口
  },
}