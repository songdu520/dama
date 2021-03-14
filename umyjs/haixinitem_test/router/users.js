const express = require('express');
const conn = require('../dao/conn');
// const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const router = express.Router(); // 获得路由对象



router.route('/reg')
    .post((req, res, next) => {
        // 判断用户名是否存在

        let searchUser = `select * from  registry   where username='${req.body.username}'`;

        conn.query(searchUser, (err, results) => {
            if (err) console.log(err);
            // console.log(results)
            if (results.length) {
                res.json({ msg: '用户名已存在', username: req.body.username, error: 1 });
            } else {
                // let md5 = crypto.createHash('md5'); // 创建一个哈希加密
                // let passResult = md5.update(req.body.password).digest('hex'); // 加密内容获得16进制结果

                let sql = `insert into registry (username, password,email ) 
                            values('${req.body.username}','${req.body.password}','${req.body.email}')`;
                conn.query(sql, (err, result) => {
                    if (err) console.log(err);

                    if (result.insertId) {
                        res.cookie('username', req.body.username);
                        res.cookie('isLogined', true);
                        res.json({
                            msg: "注册成功",
                            username: req.body.username,
                            error: 0
                        });
                    }
                });
            }
        });




    });

router.route('/login')
    .post((req, res, next) => {

        let searchUser = `select * from  registry   where username='${req.body.user}'`;
        conn.query(searchUser, (err, results) => {
            if (err) console.log(err);
            console.log(results)
        });
    })
    // router.route('/getcode')
    //     .post((req, res, next) => {
    //         console.log(req.body);
    //         fs.writeFile(path.join(__dirname, '..', 'temp', req.body.email), sendMail(req.body), 'utf8', (err) => {
    //             if (err) console.log(err);
    //             res.json({
    //                 msg: '验证码已发送，请到邮箱查收'
    //             });
    //         });
    //     });





module.exports = router; // 路由导出