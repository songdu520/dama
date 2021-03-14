# node.js

### nvm
nodejs version manager

常用命令
nvm ls 查看当前已经安装过的所有nodejs版本
nvm use 版本切换
nvm install 版本号  安装nodejs
nvm uninstall 版本号 卸载已安装的nodejs

终端 在VSCODE中的兼容
在编辑器中快速打开终端 Ctrl+`
cmd    继承了MS-DOS操作系统的指令
powershell MS-DOS升级 兼容了部分的Unix命令
gitbash   内核是Unix 支持Unix命令 Linux


### JavaScript是一个什么样的语言？
弱类型 脚本语言
解释型语言

### JavaScript运行在哪？
浏览器内核的JS引擎
JS引擎是一个单线程环境

### JavaScript可以做什么？
渲染页面(DOM操作)
数据交互(AJAX JSONP)
表单验证

### JavaScript不能做什么？
文件和文件夹操作
操作系统控制
数据库操作
进程操作

为什么不行？ 轻量 弱类型？
弱类型  === 弱？
因为安全考虑 JS的运行环境特殊

### 什么可以决定编程语言的能力
运行环境 OS(操作系统) Windows Linux Unix OSX ....

### 运行环境
计算机执行任务 主要靠程序员编写的代码(指令) 
软件(计算机的指令集合)
操作系统 控制硬件工作(basic input output system  BIOS) 提供和用户交互的界面
软件(指令集合) 运行在操作系统上 批量的向计算机(操作系统)发送指令
软件可以由各种语言编写 计算机并不认识这些语言
翻译 将编程语言的代码 翻译成计算机可以识别的代码
运行环境 
运行环境将编程语言翻译成机器语言(二进制)

编程语言 -> 机器语言   这个过程叫编译

编程语言|运行环境
---|---
JavaScript|JS引擎(V8 猴子 查克拉)
Java | Java虚拟机
C#   | .NET(Windows) Mono(Linux)

跨平台（OS）
Nodejs 它是JavaScript的运行环境
Node   运行在服务端(windows linux unix osx)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Nodejs是一个JavaScript的运行环境 建立在 Chrome的V8 JavaScript引擎上
Nodejs采用了非阻塞 I/O 模型

### JavaScript 的组成
ECMAScript      语言核心 语言的标准 ECMA-262标准
BOM             浏览器对象模型 让语言可以操作浏览器
DOM             文档对象模型   让语言可以操作文档(html/xhtml/xml)

node环境 没有DOM 和 BOM

### 没有DOM和BOM以后 JavaScript还能做什么？
ECMAScript
变量定义 函数定义 关键字 保留字 语法 语句 运算符 表达式 分支结构 循环结构 ...
内置对象
Object Array Math String Number Date RegExp Set Map Promise ....

纯粹的编程语言

其他语言能做的事情 它都能做

桌面应用开发
web后端
app后端
爬虫

### Nodejs组成
Chrome's V8
ECMAScript
Libuv

### REPL环境
Read Eval Print Loop

退出REPL
.exit

### 全局对象
浏览器环境下 全局对象是 window
node环境下   全局对象是 global

### nodejs 特点
nodejs 采用的是非阻塞I/O模型
基于谷歌的V8 JavaScript引擎

V8引擎是 单线程 环境 阻塞需要等待
nodejs使用了回调的异步方案解决 阻塞问题

阻塞操作会进入到   Event Loop

nodejs 应用场景

高并发处理
将nodejs作为中间件使用

代替nodejs称为高并发的王者的语言 来自 谷歌 golang

