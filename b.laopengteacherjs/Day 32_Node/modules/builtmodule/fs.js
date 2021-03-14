const fs = require('fs'); //内置模块，不需要安装，直接使用，文件模块。

//内置模块使用：创建文件
let str = '我是文件里面的内容';
fs.writeFile('index.html', str, (err) => {
    if (err) throw err;
    console.log('创建成功');
});