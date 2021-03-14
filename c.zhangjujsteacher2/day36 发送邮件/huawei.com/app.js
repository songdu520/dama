const express = require('express');
const path = require('path');

// 引入路由
const usersRouter = require('./router/users');


const app = express(); // 开启一个应用

let conf = {
    port: 8888,
    host: 'localhost'
};


// 配置静态web服务
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 使用路由中间件
app.use('/users', usersRouter);


app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`);
});