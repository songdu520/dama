const http = require('http')
let port = 5555
let server = http.createServer((req, res) => {

    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
    res.end('<h1>你好世界</h1>'); // 响应结束
})
server.listen(port, () => {
    console.log(`http server running on http://localhost:${port}`);
});