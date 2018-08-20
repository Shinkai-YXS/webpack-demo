const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
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
  module: {
    // 规则
    rules: [
      {
        // 以正则表达式的形式来表示需要处理的文件扩展名
        test: /\.css$/,
        // 使用哪些 loader
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // 配置插件
  plugins: [
    // new uglify()
    new htmlPlugin({
      // 压缩
      minify: {
        removeAttributeQuotes: true //压缩 去掉引号
      },
      hash: true, //防止缓存
      template: './src/index.html'// 要打包的html模版路径和文件名称
    })
  ],
  // 配置服务
  devServer: {
    // https://www.webpackjs.com/configuration/dev-server/#devserver
    contentBase: path.resolve(__dirname, 'dist'),
    host: '192.168.2.220',
    compress: true, // 服务器压缩
    port: 7777 // 端口
  },
}