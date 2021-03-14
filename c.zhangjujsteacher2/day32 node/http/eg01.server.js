const http = require('http');

// http.createServer([options][, requestListener])

let port = 8088;

let server = http.createServer((req, res) => {
    // req request 请求
    // res response 响应

    // console.log(req.url);  //请求路径
    if (req.url === '/favicon.ico') return;

    // 设置响应头信息
    // 第一个函数是http状态码
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });

    // res.write('<h1>你好世界</h1>'); // 响应文本
    // res.write('测试');

    res.end('<h1>你好世界</h1>'); // 响应结束
});

server.listen(port, () => {
    console.log(`http server running on http://localhost:${port}`);
});