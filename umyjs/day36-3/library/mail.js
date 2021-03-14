const nodemailer = require('nodemailer')
const user = {
    name: '2433507235@qq.com',
    pass: 'hlfjsagjwatceagi'
}

let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: user.name, // generated ethereal user
        pass: user.pass, // generated ethereal password
    },
});

// send mail with defined transport object


function sendMail(tomail) {
    let code = getCode()
    let mailobj = {
        from: '"baba" <2433507235@qq.com>', // sender address
        to: tomail, // list of receivers
        subject: "我是你爸爸", // Subject line

        html: '<h1>验证码' + code + '</h1>', // html body
    }
    transporter.sendMail(mailobj);
    return code
}

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
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