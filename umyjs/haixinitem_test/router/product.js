const express = require('express');
const conn = require('../dao/conn');

const router = express.Router();


router.route('/getProducts')
    .get((req, res, next) => {
        let sql = 'select * from taobao';
        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            console.log(result)
            res.json(result);
        });
    });
// router.route('/getProductslist')
//     .get((req, res, next) => {
//             let sql = 'select * from taobao';
//             conn.query(sql, (err, result) => {
//                     if (err) console.log(err);
//                     // console.log(result)
//                     // res.json(result);
//                     let pagesize = 10;
//                     $pagenum = ceil(result.lenght / pagesize)
//                     if (req.page){ //判断前端传入的页面是否存在，
//                     $pagevalue = $_GET['page']; //获取页面
//                 } else {
//                     $pagevalue = 1; //默认为1
//                 }
//             });
// });


router.route('/getItem')
    .get((req, res, next) => {
        let sql = `select * from product where id=${req.query.id}`;

        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            res.json(result);
        });
    });


router.route('/getItems')
    .get((req, res, next) => {
        let sql = `select * from product where id in (${req.query.idList})`;

        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            res.json(result);
        })
    });

module.exports = router;