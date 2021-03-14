const fs = require('fs');
const path = require('path');

let data = '<h1>你好世界</h1>';

// fs.writeFile(file, data[, options], callback)

fs.writeFile(path.join(__dirname, 'hello.html'), data, err => {
    if (err) throw err;
    console.log('文件写入成功');
});