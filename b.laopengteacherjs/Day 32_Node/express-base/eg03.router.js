const express = require('express');
const path = require('path');

// 导入路由模块
const usersRouter = require('./router/users');


const app = express();

let conf = {
    port: 8888,
    host: 'localhost'
};

// 配置静态web服务
app.use(express.static(path.join(__dirname, 'public')));
//需要在服务中配置中间件分析表单数据
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', usersRouter); // 使用路由中间件//以/users作为后端路由根目录调用usersRouter


// 请求到了会交给中间件 
// app.use(function(req, res, next) {
//     console.log(1); // 输出一个1  没有结束请求 请求被挂起
//     next();
// });

// app.use(function(req, res, next) {
//     console.log(2);
//     next();
// });

// app.use(function(req, res, next) {
//     console.log(3);
// });



app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`);
});