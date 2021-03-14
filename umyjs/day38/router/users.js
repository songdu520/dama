const express = require('express')
const router = express.Router()
router.get('/', (req, res, next) => {
    console.log(req.query)
    res.json({
        username: req.query.username,
        msg: '用户名可以使用'
    })
})
router.post('/getuser', (req, res, next) => {
    // post数据 获得方式 req.body
    // 需要在服务中配置中间件分析表单数据
    //app.use(express.json()); // for parsing application/json
    //app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    console.log(req.body);
    res.send(req.body);
});
module.exports = router