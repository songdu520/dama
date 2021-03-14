const http = require('http');
// const fs = require('fs');
const path = require('path');
const { readFile } = require('./library/readfile');


let port = 8888;

let server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return;

    // 输出请求地址和请求方式
    console.log(`${req.method} ${req.headers.host}${req.url}`);


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

});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});