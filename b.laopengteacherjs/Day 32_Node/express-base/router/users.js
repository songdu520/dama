// 安装express
// 路由文件
// 1. 引入express
const express = require('express');

// 2. 使用express提供的路由函数 express.Router()创建一个路由对象
const router = express.Router();

// 路由内容
router.get('/', (req, res, next) => {
    // 接收前端发送的数据
    // get数据通过 req.query 获取
    // 获取内容是一个对象
    console.log(req.query);

    res.json({
        username: req.query.username,
        msg: '用户名可以使用'
    });

    // res.send('给一个get响应');
});

router.get('/getuser', (req, res, next) => {
    res.send('getuser');
});

router.post('/getuser', (req, res, next) => {
    // post数据 获得方式 req.body
    // 需要在服务中配置中间件分析表单数据
    //app.use(express.json()); // for parsing application/json
    //app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    console.log(req.body);
    // res.send('post getuser');
});


module.exports = router; // 将路由导出