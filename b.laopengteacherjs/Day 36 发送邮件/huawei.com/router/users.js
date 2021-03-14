const express = require('express');
const { sendMail } = require('../library/sendMail');
const fs = require('fs');
const path = require('path');

const router = express.Router(); // 获得一个路由

router.route('/getcode')
    .get((req, res, next) => {
        console.log(req.query);

        fs.writeFile(path.join(__dirname, '..', 'temp', req.query.email), sendMail(req.query), 'utf8', (err) => {
            if (err) console.log(err);
            res.json({
                msg: '邮件已发送，请到邮箱查收'
            });
        });

    });


router.route('/checkcode')
    .get((req, res, next) => {
        // 读取文件
        fs.readFile(path.join(__dirname, '..', 'temp', req.query.email), 'utf8', (err, data) => {
            if (err) console.log(err);

            if (data === req.query.code) { // 验证输入的验证码和文件的匹配
                // 删除文件
                fs.unlink(path.join(__dirname, '..', 'temp', req.query.email), (err) => {
                    if (err) console.log(err);
                    console.log('临时文件已删除');
                })
                res.json({
                    msg: '验证通过'
                });
            } else {
                res.json({
                    msg: '验证码错误请从新输入或获取'
                });
            }
        });
    });


module.exports = router;