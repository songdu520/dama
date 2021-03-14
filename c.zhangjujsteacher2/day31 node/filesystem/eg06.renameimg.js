const fs = require('fs');
const path = require('path');
const { threadId } = require('worker_threads');

// 提取文件后缀名
// path.extname(path)

// 读取文件夹
// fs.readdir(path[, options], callback)
fs.readdir(path.join(__dirname, 'img'), (err, files) => {
    if (err) throw err;
    files.forEach((elm, i) => {
        let oldPath = path.join(__dirname, 'img', elm);         
        let extName = path.extname(oldPath);
        let newPath = path.join(__dirname, 'img', `img-${i+1}${extName}`);

        fs.rename(oldPath, newPath, err => {
            if (err) throw err;
            console.log('修改成功');
        })
    });
});