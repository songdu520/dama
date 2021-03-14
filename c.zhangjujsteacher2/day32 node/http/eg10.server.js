const http = require('http');
const querystring = require('querystring');
const { readFile } = require('./library/readfile');
const path = require('path');


http.createServer(async(req, res) => {
    let fileData; // 文件数据

    if (req.url == '/favicon.ico') return;

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

    console.log(`${req.method} ${req.headers.host}${req.url}`);

    // 设置路由 根据不同的请求路径 读取不同的文件
    if (req.method === 'GET') {
        switch (req.url) {
            case '/':
                fileData = await readFile('public', 'index.html');
                break;
            case '/jquery.js':
                fileData = await readFile('public', 'js', 'jquery.js');
                break;
        }

        res.end(fileData);
    } else if (req.method === 'POST') {
        // post请求作为后端的数据接口
        switch (req.url) {
            case '/weather':
                weather(res);
                break;
        }
    }
}).listen(8888);


function weather(res1) {
    const postData = querystring.stringify({
        'app': 'weather.future',
        'weaid': 'hangzhou',
        'appkey': '38926',
        'sign': 'f8b4121c2d581be2623569b24f798dee',
        'format': 'json'
    });

    const options = {
        hostname: 'api.k780.com',
        port: 80,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        let data = '';
        res.on('data', (chunk) => {
            // console.log(`BODY: ${chunk}`);
            // console.log('-----------');
            data += chunk;
        });
        res.on('end', () => {
            // console.log('No more data in response.');
            res1.end(data); // 将获得的数据响应发送出去
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // Write data to request body
    req.write(postData);
    req.end();
}