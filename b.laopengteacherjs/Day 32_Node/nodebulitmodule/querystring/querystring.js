// querystring 模块提供用于解析和格式化 URL 查询字符串的工具。
//查询
// const qs = require('querystring');
// parse：将一个字符串转换成对象格式。
// /pɑːrs/. 解析
// const str = 'a=1&b=2&c=3';
// console.log(qs.parse(str));//{ a: '1', b: '2', c: '3' }
// 默认找&和=

// const str1 = 'a*1&b*2&c*3';
// console.log(qs.parse(str1)); //{ 'a*1': '', 'b*2': '', 'c*3': '' }
// console.log(qs.parse(str1, '&', '*')); //{ a: '1', b: '2', c: '3' }

// const str2 = 'a!1#b!2#c!3';
// console.log(qs.parse(str2, '#', '!'));//{ a: '1', b: '2', c: '3' }

// stringify：将对象转换成字符串格式。
// console.log(qs.stringify({ a: '1', b: '2', c: '3' })); //a=1&b=2&c=3
// console.log(qs.stringify({ a: '1', b: '2', c: '3' }, '#', '%')); //a%1#b%2#c%3

// escape：将中文进行编码。
///ɪˈskeɪp/逃避
// console.log(qs.escape('my name is 张三')); //my%20name%20is%20%E5%BC%A0%E4%B8%89

// unescape：将中文进行解码。
// console.log(qs.unescape('my%20name%20is%20%E5%BC%A0%E4%B8%89')); //my name is 张三