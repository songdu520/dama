// dns 模块用于启用名称解析。 例如，使用它来查找主机名的 IP 地址。

const dns = require('dns');
// dns是内置模块，所以不需要安装
// 模块名一定要加引号，不加就变成变量了

dns.resolve4('www.baidu.com', (err, address) => {
    // resolve4    ipv4
    // 错误优先的回调函数
    if (err) throw err;
    console.log(address);
});



// crypto 模块提供了加密功能，包括对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .digest('hex');
console.log(hash);



// process 进程

console.log(process);