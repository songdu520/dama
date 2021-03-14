const express = require('express');

const path = require('path');

const app = express(); // express调用是个函数，  启动一个express应用


// 搭建web静态服务

let conf = {
    port: 8888,
    host: 'localhost'
};
//app.use()使用中间件
//express.static(路径) 配置静态目录为web服务
//       /ˈstætɪk/ 静态的
// public 设置为 前端页面的根目录

app.use(express.static(path.join(__dirname, 'public')));



app.listen(conf.port, conf.host, () => {
    console.log(`webserver is running on http://${conf.host}:${conf.port}`);
}); //服务监听