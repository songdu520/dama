const http = require('http');
const fs = require('fs');
const path = require('path');

let port = 8888;

let server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return;

    // 输出请求地址和请求方式
    console.log(`${req.method} ${req.headers.host}${req.url}`);
    //             /ˈmeθəd/  方法

    // 设置响应头
    // res.writeHead(200, { "content-type": "text/html;charset=utf-8" });

    // 不同的请求设置不同的响应头
    switch (path.extname(req.url)) { //path.extname()方法会返回 path 的扩展名，
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
            fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            })
            break;
        case '/news':
            fs.readFile(path.join(__dirname, 'public', 'html', 'news.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/index.js':
            fs.readFile(path.join(__dirname, 'public', 'js', 'index.js'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/index.css':
            // res.writeHead(200, { "content-type": "text/css;charset=utf-8" });
            fs.readFile(path.join(__dirname, 'public', 'css', 'index.css'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        default:
            fs.readFile(path.join(__dirname, 'public', 'html', '404.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
    }

});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});