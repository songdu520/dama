// Node.js文件， CommonJs规范
// 插件需要引入的，转换器不需要
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // webpack基本配置

  // 配置环境  development 或者 production
  mode: 'production', 

  // 入口文件配置
  entry: path.join(__dirname, './src/main.js'),

  // 出口文件配置
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js'
  },

  // loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
  // loader配置
  module: {
    rules: [
      // 每一个对象就是一个转换器的规则
      {
        test: /\.css$/,
        // 转换器顺序是相反的 转回css ，转成js
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/public/index.html'),
      filename: './index.html',
      hash: true, // 解决缓存
      minify: {
        removeAttributeQuotes: true // 压缩，去掉引号
      }
    })
  ],

  // 配置写在最外层
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000, // 端口号
    open: true // 自动打开
  }
};