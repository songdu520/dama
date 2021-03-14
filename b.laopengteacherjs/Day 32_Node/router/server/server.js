const http = require('http'); //设置web服务器。 前端采用go live插件实现(vscode)
const url = require('url');
const fs = require('fs');
const host = 'localhost';
const port = '5000';
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    res.write('<a href="?page=index">首页</a>');
    res.write('<a href="?page=login">登录</a>');
    res.write('<a href="?page=registry">注册</a>');

    // console.log(url.parse(req.url, true).query.page); //获取服务器的地址
    let hash = url.parse(req.url, true).query.page;
    switch (hash) {
        case 'index':
            fs.readFile('../index.html', 'utf8', (err, docs) => {
                res.write(docs);
                res.end();
            });
            break;
        case 'login':
            fs.readFile('../login.html', 'utf8', (err, docs) => {
                res.write(docs);
                res.end();
            });
            break;
        case 'registry':
            fs.readFile('../registry.html', 'utf8', (err, docs) => {
                res.write(docs);
                res.end();
            });
            break;
    }

}).listen(port, host, () => {
    console.log(`The server is running at http://${host}:${port}`);
});