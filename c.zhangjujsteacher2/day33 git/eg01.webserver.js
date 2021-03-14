const express = require('express');
///ɪkˈspres/表达；快递

const path = require('path');

const app = express(); // 启动一个express应用


// 搭建web静态服务

let conf = {
    port: 8888,
    host: 'localhost'
};

// 配置静态目录为web服务
// public 设置为 前端页面的根目录
app.use(express.static(path.join(__dirname, 'public')));



app.listen(conf.port, conf.host, () => {
    console.log(`webserver is running on http://${conf.host}:${conf.port}`);
});