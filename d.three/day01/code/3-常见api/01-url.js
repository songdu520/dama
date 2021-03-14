// url 模块用于处理与解析 URL

/*
  url的组成
    protocol: 协议  http/https/ftp/ws/wss
    auth: 权限 
    host: 
      hostname: 主机名 域名
      port: 端口号  http80 https443
    path:
      pathname: 路径名      /xxx/yyyy/zzz
      search: 查询字符串    ?a=1&b=2
    hash:
      #ssss
*/


// js 

// const str = 'https://item.taobao.com/item.htm?id=628278692720&ali_refid=a3_430673_1006:1150354519:N:emtiAWsF8%2Bzhhxaiwzc0Aw%3D%3D:9e8a8612bd6a3360dd69455e2057a050&ali_trackid=1_9e8a8612bd6a3360dd69455e2057a050&spm=a2e15.8261149.07626516002.3';

// const str1 = str.split('?')[1];
// const arr1 = str1.split('&');
// const obj = {};
// arr1.forEach(item => {
//   obj[item.split('=')[0]] = item.split('=')[1]
// });
// console.log(obj.id);

const url = require('url');

const str = 'https://item.taobao.com/item.htm?id=628278692720&ali_refid=a3_430673_1006:1150354519:N:emtiAWsF8%2Bzhhxaiwzc0Aw%3D%3D:9e8a8612bd6a3360dd69455e2057a050&ali_trackid=1_9e8a8612bd6a3360dd69455e2057a050&spm=a2e15.8261149.07626516002.3';

// url.parse()方法用于将一个url字符串转成url对象
// const obj = url.parse(str);
// console.log(obj.search);

// // url.format()方法将一个url对象转成url字符串
//         /ˈfɔːrmæt/格式；版式
// console.log(url.format(obj));

const myURL = new URL(str);
console.log(myURL.search);