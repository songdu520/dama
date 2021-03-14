// path 模块提供了一些实用工具，用于处理文件和目录的路径。
const path = require('path');

// path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
// 一般会配合__dirname, 当前的路径
// console.log(__dirname);
// console.log(path.join(__dirname, '../'));

// path.resolve() 给定的路径序列会从右到左进行处理，后面的每个 path 会被追加到前面，直到构造出绝对路径
// 默认从项目的当前位置开始
// 加斜杠小心，斜杠表示根目录
// console.log(path.resolve('./a', 'b'));

// path.extname(path) path.extname() 方法会返回 path 的扩展名，即 path 的最后一部分中从最后一次出现 .（句点）字符直到字符串结束。 如果在 path 的最后一部分中没有 .，或者如果 path 的基本名称（参见 path.basename()）除了第一个字符以外没有 .，则返回空字符串。
path.extname('index.html');
// 返回: '.html'
path.extname('index.coffee.md');
// 返回: '.md'
path.extname('index.');
// 返回: '.'
path.extname('index');
// 返回: ''
path.extname('.index');
// 返回: ''
path.extname('.index.md');
// 返回: '.md'