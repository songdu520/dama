const http = require('https');
const path = require('path');
const fs = require('fs');

http.get('https://www.jd.com', (res) => {
    const { statusCode } = res; // 解构获得http状态码
    const contentType = res.headers['content-type']; // 获得contenttype

    let error; // 错误
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) { // 如果http状态码不等于200 就新建错误
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) { // 检测获得的内容是不是html
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    if (error) { // 如果有错误 
        console.error(error.message); // 打印错误
        // Consume response data to free up memory
        res.resume(); // 清除缓存
        return; // 结束
    }

    res.setEncoding('utf8'); // 设置字符集
    let rawData = ''; // 数据
    res.on('data', (chunk) => { rawData += chunk; }); // 如果有数据就拼接数据
    res.on('end', () => { // 数据响应结束
        fs.writeFile(path.join(__dirname, 'public', 'html', 'jd.html'), rawData, err => {
            if (err) console.log(err);
            console.log('文件保存成功');
        });
    });


});