const http = require('https');

http.get('https://nodejs.org/dist/index.json', (res) => {
    const { statusCode } = res; // 解构获得http状态码
    const contentType = res.headers['content-type']; // 获得contenttype

    let error; // 错误
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) { // 如果http状态码不等于200 就新建错误
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) { // 检测获得的内容是不是json
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
        try {
            const parsedData = JSON.parse(rawData); // 转对象
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => { // 错误事件
    console.error(`Got error: ${e.message}`);
});