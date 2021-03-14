// 所有的第三方模块都在npm官网

// 要使用第三方模块，要先去安装
// npm install 包的名字 --save / --save-dev / -g
// npm i 包的名字 -S / -D

// package.json 项目依赖的记录文件
// node_modules 是项目依赖文件夹


// 引入了一个没有路径的包，有一个查找过程
// 先从当前目录的node_modules里面去查找， 找不到找上级目录

const request = require('request');
request('https://m.maoyan.com/ajax/movieOnInfoList', (err, res, body) => {
  console.log(JSON.parse(body));
});
