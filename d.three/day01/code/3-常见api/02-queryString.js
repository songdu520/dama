// querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具

const qs = require('querystring');
const url = require('url');

const str = 'https://item.taobao.com/item.htm?id=628278692720&ali_refid=a3_430673_1006:1150354519:N:emtiAWsF8%2Bzhhxaiwzc0Aw%3D%3D:9e8a8612bd6a3360dd69455e2057a050&ali_trackid=1_9e8a8612bd6a3360dd69455e2057a050&spm=a2e1放方法516002.3';

const query = url.parse(str).query;

// querystring.parse()方法是将url的query转成对象
// const obj = qs.parse(query);
// querystrin.stringify() 方法将query对象转成字符串
// console.log(qs.stringify(obj));

// querystring.escape() 方法以对 URL 查询字符串的特定要求进行了优化的方式对给定的 str 执行 URL 百分比编码。
//         /ɪˈskeɪp/ 逃避，避开 
const str1 = qs.escape(query);
console.log(qs.unescape(str1));