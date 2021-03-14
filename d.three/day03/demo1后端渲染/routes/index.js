var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    // 连接数据库，获取数据
    const data = [{
            title: '是谁在敲打我窗',
            day: '2020/11/25'
        },
        {
            title: '是谁把完整的镜子打碎',
            day: '2020/11/25'
        },
        {
            title: '是谁送你来到我身边',
            day: '2020/11/25'
        },
        {
            title: '是谁带来远古的呼唤',
            day: '2020/11/25'
        },
        {
            title: '是谁在唱歌',
            day: '2020/11/25'
        },
        {
            title: '是我，是我，就是我',
            day: '2020/11/25'
        },
    ]

    res.render('index', { data: data });
    //res.render('指向views文件'，传个变量对象)
});

module.exports = router;