### 终端命令
```bash
$ pwd  查看当前绝对路径

$ cd 改变目录

$ ls 查看当前目录
$ ls -l 已列表形式查看目录
$ ls -a 查看所有的隐藏目录
$ ls -la 已列表形式查看所有内容
```

路径
相对路径
从当前路径开始计算的是相对路径

绝对路径
从根目录计算的是绝对路径
根目录是什么？
windows操作系统的根目录是 盘符 c:\ d:\
在类unix操作系统(linux unix osx) 根目录是  /
在类unix操作系统 用户(home)目录  ~


### nodejs模块化规范
nodejs 的完全采用模块化进行设计的
nodejs 采用的模块化规范叫做 common.js 

common.js规范的特点
每一个模块 作用域都是独立的 代码都在该模块中 不会污染全局作用域
每个模块都是一个单独的文件
模块可以多次加载 在第一次加载时会运行一次
运行结果会被缓存 如果再次加载 则从缓存中获得结果
如果向再次运行模块 需要清除缓存
模块加载顺序和代码书写顺序有关

1. 自定义模块
2. 内置模块
3. 第三方模块

定义一个模块 使用
module.exports
加载一个模块 使用
require()

### npm
官网: https://www.npmjs.com/
npm 是 nodejs的包管理工具
包 就是nodejs的模块
npm是目前全球最大的软件包管理平台 开源生态

安装任意第三方依赖前 需要进行项目初始化(项目根目录)
初始化命令
```bash
$ npm init -y
```

安装第三方包/模块/应用
```bash
$ npm install packageName[@version]
```
安装参数
--save  安装到当前项目依赖  -S
--save-dev  安装到当前项目开发依赖(工具)  -D
-g      全局安装(应用程序 命令行工具)


使用taobao镜像替代npm
1. 使用nrm工具
```bash
$ npm install nrm -g
$ nrm ls  查看所有镜像源
$ nrm use taobao  切换成淘宝镜像
```

2. 使用cnpm替代npm(mac推荐)
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
注意点:
苹果(OSX) 进行全局安装时 需要超级管理员权限
获得超级管理员权限方式
- 本次安装获得权限
$ sudo npm install cnpm -g 
- 本次终端获得权限
$ sudo -s
$ npm install cnpm -g