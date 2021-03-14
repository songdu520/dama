const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    // ....
})

router.post('/login', (req, res, next) => {

    // 连接数据库，进行查询
    console.log(req)
    res.json({
        status: 0,
        msg: '登录成功'
    })
})

module.exports = router;