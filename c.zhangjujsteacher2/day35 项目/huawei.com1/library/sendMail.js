const nodemailer = require("nodemailer");

const user = {
    name: '86163325@qq.com',
    pass: 'ctgfhyeckqzfbhbh'
}


let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: user.name,
        pass: user.pass
    }
});

function sendMail(opt) {
    let code = getCode();
    let mailobj = {
        from: '"root"<86163325@qq.com>',
        to: opt.email,
        subject: 'huawei-验证码',
        html: `<h1>您的验证码是:${code}</h1>`
    }

    // console.log(mailobj);
    transporter.sendMail(mailobj, (err, info) => {
        if (err) console.log(err);
        console.log('邮件已发送');
    });

    return code;
}

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getCode() {
    let code = '';

    for (let i = 0; i < 6; i++) {
        let type = random(1, 3);
        switch (type) {
            case 1:
                code += String.fromCharCode(random(48, 57));
                break;
            case 2:
                code += String.fromCharCode(random(65, 90));
                break;
            case 3:
                code += String.fromCharCode(random(97, 122));
                break;
        }
    }
    return code;
}


module.exports = {
    sendMail
}