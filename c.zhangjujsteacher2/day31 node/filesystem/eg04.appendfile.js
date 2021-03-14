const fs = require('fs');
const path = require('path');
const { threadId } = require('worker_threads');

// fs.appendFile(path, data[, options], callback)

let data = '<h1>欢迎光临</h1>';
fs.appendFile(path.join(__dirname, 'hello.html'), data, err => {
    if (err) throw err;
    console.log('文件追加成功');
});