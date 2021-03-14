const fs = require('fs')
fs.mkdir('./hehe', (err) => {
    if (err) throw err;
    console.log('建功')
})
let str = 'hello'
fs.writeFile('./hehe/index.html', str, (err) => {
    if (err) throw err;
    console.log('文件创建成功');
})