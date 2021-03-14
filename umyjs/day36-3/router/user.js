const express = require('express')
const fs = require('fs')
const path = require('path')
const { sendMail } = require('../library/mail')
const { query } = require('express')
const router = express.Router()
router.route('/')
    .get((req, res, next) => {
        console.log(req.query)
        let code = sendMail(req.query.mail)
        fs.writeFile(path.join(__dirname, '..', 'temp', req.query.mail), sendMail(req.query.mail), 'utf8', (err) => {
            if (err) console.log(err);
            res.json({
                msg: '邮件已发送，请到邮箱查收'
            });
        });

    })
module.exports = router