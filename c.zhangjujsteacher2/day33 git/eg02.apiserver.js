// api 应用程序接口
// express可以非常简单的完成api的搭建
// 给前端页面提供数据支持
// 前端都是如何发送请求的
// form get/post
// ajax get/post
// href get
// jsonp get

const express = require('express');

const conf = {
    port: 8888,
    host: 'localhost'
};

let app = express();

// app.get(url,callback)
// callback 参数
// req 请求
// res 响应
// next 函数 下一步 交出中间件的控制权 将这个请求交给下一个中间件

app.get('/users', (req, res, next) => {
    // console.log('我收到了一个get请求');

    // res.send() 发送一个字符串作为数据 自动终止中间件
    // res.send('数据测试'); 
    // res.send({ username: 'zhangsan', age: 20 });

    // res.json() 发送一个JSON数据 自动终止中间件
    res.json({ username: 'zhangsan', age: 20 });
});

app.get('/getuser', (req, res, next) => {
    res.json({ username: 'lisi', age: 25 });
});

app.post('/users', (req, res, next) => {
    res.json({ username: 'zhangsan', age: 20, method: 'post' });
});



app.listen(conf.port, conf.host, () => {
    console.log(`apiserver is running`);
});