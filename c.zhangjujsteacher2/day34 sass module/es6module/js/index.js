// 入口文件
import cookie from './library/cookie.js';
import './library/jquery.js';
import { num, max, Student } from './library/test.js';


cookie.set('username', 'zhangsan', 1);
// console.log(cookie);

console.log($('div').text());

console.log(num);

let s = new Student('zhangsan');
console.log(s);