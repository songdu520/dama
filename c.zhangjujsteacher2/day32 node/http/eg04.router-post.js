const http = require('http');
// const fs = require('fs');
const path = require('path');
const { readFile } = require('./library/readfile');
const querystring = require('querystring');


let port = 8888;

let server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return;

    // 输出请求地址和请求方式
    console.log(`${req.method} ${req.headers.host}${req.url}`);

    if (req.method === 'GET') {
        (async() => {
            let data = null;

            // 不同的请求设置不同的响应头
            switch (path.extname(req.url)) {
                case '.css':
                    res.writeHead(200, { "content-type": "text/css;charset=utf-8" });
                    break;
                case '.js':
                    res.writeHead(200, { "content-type": "text/javascript;charset=utf-8" });
                    break;
                default:
                    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
            }


            // 分支用于判断请求的路径
            switch (req.url) {
                case '/':
                    data = await readFile('public', 'index.html');
                    break;
                case '/news':
                    data = await readFile('public', 'html', 'news.html');
                    break;
                case '/index.js':
                    data = await readFile('public', 'js', 'index.js');
                    break;
                case '/index.css':
                    data = await readFile('public', 'css', 'index.css')
                    break;
                default:
                    data = await readFile('public', 'html', '404.html');
            }

            res.end(data);
        })();
    } else if (req.method === 'POST') {
        let data = '';

        // req.on() 事件绑定
        // data事件指的是接收到数据时触发的事件
        // chunk数据块
        req.on('data', chunk => data += chunk);
        // end事件 数据响应结束
        req.on('end', () => {
            console.log(querystring.parse(data));
            //querystring.parse()查询字符串 'foo=bar&abc=xyz&abc=123' 会被解析为对象
        });

        switch (req.url) {
            case '/users':
                console.log('假装查询用户');
                break;
            case '/adduser':
                console.log('注册用户');
                break;
        }
    }





});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});