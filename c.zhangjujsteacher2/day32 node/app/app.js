const http = require('http');
const path = require('path');
const querystring = require('querystring');
const { readFile } = require('./library/readfile');
const mysql = require('./dao/conn');

console.log(mysql);

let port = 8088;

let server = http.createServer(async(req, res) => {
    if (req.url == '/favicon.ico') return;
    console.log(`${req.method} ${req.headers.host}${req.url}`);

    if (req.method === 'GET') {
        let fileData;
        switch (path.extname(req.url)) {
            case '.css':
                res.writeHead(200, { 'content-type': 'text/css;charset=utf-8;' });
                break;
            case '.js':
                res.writeHead(200, { 'content-type': 'text/javascript;charset=utf-8;' });
                break;
            default:
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8;' });
        }

        switch (req.url) {
            case '/':
                fileData = await readFile('public', 'html', 'index.html');
                break;
            case '/reg':
                fileData = await readFile('public', 'html', 'reg.html');
                break;
            case '/js/jquery.js':
                fileData = await readFile('public', 'js', 'jquery.js');
                break;
        }

        res.end(fileData);

    } else if (req.method === 'POST') {
        switch (req.url) { // POST路由
            case '/getUsers':
                let sql = 'select * from users';
                mysql.query(sql, (err, results) => {
                    if (err) console.log(err);
                    // console.log(results);
                    res.end(JSON.stringify(results));
                });
                break;
            case '/reg':
                let data = '';
                let o = null; // 数据对象
                req.on('data', chunk => data += chunk); // 拼接数据
                req.on('end', () => { // 获得数据后开始处理
                    o = querystring.parse(data);
                    // console.log(o);
                    let sql = `select * from users where username='${o.username}' and password='${o.password}'`;
                    mysql.query(sql, (err, result) => {
                        if (err) console.log(err);



                        if (result.length) {
                            res.end('{"msg":"登陆成功","isLogined":true,"username":"' + o.username + '"}');
                        } else {
                            res.end('{"msg":"用户名或密码错误","isLogined":false,"username":"' + o.username + '"}');
                        }
                    });
                });
        }
    }
});


server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});