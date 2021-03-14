# 项目说明

前端项目结构
- 项目名
    - [node_modules] 存储第三方node模块 由npm自动生成 不需要添加git管理
    - [src]    项目源代码
        - [html]
        - [js]
        - [styles]
    - [dist]   存放工具(grunt gulp webpack ...)生成的代码
        - [html]
        - [js]
        - [css]
    - gulpfile.js    gulp的配置文件
    - .gitignore     git忽略记录
    - package.json   node依赖记录
    - README.md      项目说明

### gulp
gulp是一个基于nodejs的 流式自动化项目构建工具

项目代码分为三个部分
1. 源代码 (用于开发环境的)
2. 第三方代码 
3. 工具生成的代码(用于部署环境的)

安装gulp  推荐cnpm
```bash
$ cnpm i gulp -g      
$ cnpm i gulp-cli -g    #命名行工具


$ cnpm i gulp -D
$ cnpm i gulp --save-dev

必须在项目根目录运行
如果是项目中需要使用到的模块或文件 使用 -S
如果是项目中不需要使用的 开发过程中需要使用的  -D
```