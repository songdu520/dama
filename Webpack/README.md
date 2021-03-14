## Webpack

### 1. 市面上比较常用的前端工程化工具(自动化工具)
  - gulp 
    - 【老项目还在用】Node.js的流式操作
  - Browserify 
    - 【webpack的前生】处理AMD模块化，功能有限
  - webpack 
    - 【流行】
  - rollup 
    - 【小众】
    - 将小块代码编译成大块复杂的代码 -> 拼图
      - 分层比较多，调用链比较长时，比较耗性能
      - rollup可以将这种分层比较多的模块化给它进行组合编译成分层比较少的，节省性能  
  - parcel
    - 【小众】
    - 多线程编译，极致速度
  - FIS
    - 【小众】
    - 百度的产品

### 2. webpack的版本发展
  官网： https://www.webpackjs.com/

  - webpack1
    支持CMD和AMD，同时拥有丰富的plugin和loader，webpack逐渐得到广泛应用
    - plugin： 插件
    - loader： 转换器，将某一个类型的文件转换成其他类型的文件

  - webpack2
    支持ES Module， 分析ESModule之间的依赖关系
    - webpack1必须将ES Module转换成CommonJS模块
    - webpack2支持tree sharking

  - webpack3
    新的特性大都围绕ES Module提出，如Scope Hoisting和Magic Comment

  - webpack4
    可以解决es6的模块化（export default / export  import）
    更多的功能性plugin和loader
    在前端框架中广泛的使用： Angular Vue React的脚手架都是由webpack来进行开发和管理

### 3. webpack涉及到的前端环境问题
  1. webpack底层是由Node.js来开发的，也就是说webpack的配置文件都是Node.js文件
  
  2. webpack的模块化书写的规范是Common.js规范

  3. 环境支持Node.js 8+

  4. 前端环境

    - 开发环境 - 无法直接在服务器中去运行
    
    - 生产环境 - 将开发环境下的代码经过 打包 压缩 编译 之后的文件
    
    - 测试环境 - 将开发环境的代码经过 打包 压缩 编译 之后的文件，放在测试环境服务器中运行
      - unit test 单元测试
      - e2e 端到端测试
    
    - 预上线环境 - 将开发环境的代码经过 打包 压缩 编译 后的文件， 放到一个局域网中去运行
    
    - 上线环境 - 将开发环境的代码经过 打包 压缩 编译 后的文件， 放到云服务器或者服务器主机中，可以供任何人访问

  5. 核心关注点：

    - 开发环境
    - 生产环境

### 4. webpack的安装
  - 全局安装
    npm install webpack webpack-cli -g
    yarn add webpack webpack-cli -g

  - 局部安装
    npm install webpack webpack-cli -D
    yarn add webpack webpack-cli -D

### 5. webpack的概念
  webpack时一个现代JavaScript应用程序的静态模块打包器（module bundler）。当webpack处理应用程序时，它会递归地构建一个依赖关系图（dependency graph），其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle（分块束）

  举例：
    我们有两个模块，A模块引入B模块，我们现在使用webpack打包A模块，webpack会自动寻找A和B之间的关系，进而打包B模块

### 6. webpack的使用
  - 默认源代码开发目录： src
  - 默认的入口文件名称： src/index
  - 默认出口目录： dist
  - 默认出口打包文件名称为： main.js
  - 通过--mode来设置是哪个环境下打包使用
  - 开发环境打包： 代码不经过压缩，注释不会被删除

  #### 1. 终端命令行使用
    - 终端运行 webpack， 默认生成生产环境的包
    
    - webpack --mode development/production  开发环境/生产环境打包

  #### 2. 配置文件使用
    - 默认webpack的配置性文件名称为 webpack.config.js, 这个文件是在根目录下运行的
    
    - 运行webpack命令就会自动的去寻找这个文件
    
    - webpack.config.js文件中我们配置的就是webpack的参数
    
    - vue的webpack.config.js是在node_modules里面的，会经常删掉，所以不能去修改，所以给我们暴露了一个Vue.config.js

  #### 3. 配置webpack.config.js
    - 入口(entry)
      入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
    
      每个依赖项随即被处理，最后输出到称之为 bundles 的文件中，我们将在下一章节详细讨论这个过程。
    
      可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。
    
      module.exports = {
        entry: './path/to/my/entry/file.js'
      };


    - 出口(output)
      output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程
    
      const path = require('path');
      module.exports = {
        entry: './path/to/my/entry/file.js',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'my-first-webpack.bundle.js'
        }
      };


    - loader
      loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
    
      本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
    
      在更高层面，在 webpack 的配置中 loader 有两个目标：
        test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        use 属性，表示进行转换时，应该使用哪个 loader
    
      const path = require('path');
      const config = {
        output: {
          filename: 'my-first-webpack.bundle.js'
        },
        module: {
          rules: [
            { test: /\.txt$/, use: 'raw-loader' }
          ]
        }
      };
      module.exports = config;



    - 插件(plugins)
      loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
    
      想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例
    
      const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
      const webpack = require('webpack'); // 用于访问内置插件
      const config = {
        module: {
          rules: [
            { test: /\.txt$/, use: 'raw-loader' }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({template: './src/index.html'})
        ]
      };
      module.exports = config;
    
      比如要将webpack编译过的css文件以css外部引入的形式引入
      需要用到一个插件 extract-text-webpack-plugin@next
    
      比如要将html文件产出
      需要用到一个插件 html-webpack-plugin


    - 配置前端静态服务器
      需要用到webServer搭建前端开发服务器
      cnpm install webpack-dev-server -g | -D
    
      devServer: {
        port: 9000,
        open: true,
        contentBase: path.resolve(__dirname, './dist')
      }
      启动 webpack-dev-server


    - 图片的打包
      需要两个loader  url-loader(存base64)  file-loader(存文件)
      安装  cnpm install url-loader file-loader -D
      {
        test: /\.(png|jpg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000, // 字节少于5000使用base64  超过5000 file
            outputPath: 'images/'
          }
        }]
      }


    - 静态资源拷贝
      需要用到一个插件 copy-webpack-plugin
      cnpm install copy-webpack-plugin -D

      const CopyWebpackPlugin = require('copy-webpack-plugin');
      new CopyWebpackPlugin({
        patterns: [
        {
          from: path.resolve(__dirname, './src/public'),
          to: path.resolve(__dirname, './dist/public')
        }
      ]})
