// 引入自定义模块，写相对路径
const obj = require('./a');
const { obj2: obj2 } = require('./b');

console.log(obj.name);
console.log(obj.age);
console.log(obj.sayName());

console.log(obj2.name);