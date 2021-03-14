const fs = require('fs');
const path = require('path');

let oldPath = path.join(__dirname, 'hello.html');
let newPath = path.join(__dirname, 'world.html');

fs.rename(oldPath, newPath, err => {
    if (err) throw err;
    console.log('修改成功');
});