// Url模块：帮助我们对提交上来的url进行解析处理
// url.parse(url)--将一个URL字符串转换成对象并返回。
// url.format(obj)--parse逆运算。
//      /ˈfɔːrmæt/ 格式
// 浏览器url组成：http://www.baidu.com/project/src/index.html?sid=1&name=zhangsan#hehe
// 协议+域名+路径+数据+hash值。

const url = require('url');
const strurl = 'http://www.baidu.com/project/src/index.html?a=1&b=2&c=3#hehe';
console.log(url.parse(strurl));
console.log(url.parse(strurl, true).query); //a=1&b=2&c=3 =>{ a: '1', b: '2', c: '3' }
//                        true 转对象
/*                        
{
  protocol: 'http:',//协议
  slashes: true, //是否有//
  auth: null, //作者
  host: 'www.baidu.com',//主机域名
  port: null,//端口
  hostname: 'www.baidu.com',//域名
  hash: '#hehe',//哈希值
  search: '?a=1&b=2&c=3',//数据
  query: 'a=1&b=2&c=3',//单纯的数据
  pathname: '/project/src/index.html',//路径
  path: '/project/src/index.html?a=1&b=2&c=3',//路径
  href:'http://www.baidu.com/project/src/index.html?a=1&b=2&c=3#hehe' 
}
*/

// url.format(obj)--parse逆运算。
let urlobj = {
    protocol: 'http:', //协议
    slashes: true, //是否有//
    auth: null, //作者
    host: 'www.baidu.com', //主机域名
    port: null, //端口
    hostname: 'www.baidu.com', //域名
    hash: '#hehe', //哈希值
    search: '?a=1&b=2&c=3', //数据
    query: 'a=1&b=2&c=3', //单纯的数据
    pathname: '/project/src/index.html', //路径
    path: '/project/src/index.html?a=1&b=2&c=3', //路径
    href: 'http://www.baidu.com/project/src/index.html?a=1&b=2&c=3#hehe'
};

console.log(url.format(urlobj)); //http://www.baidu.com/project/src/index.html?a=1&b=2&c=3#hehe