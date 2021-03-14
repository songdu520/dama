//http.get():爬取数据。
const http = require('http'); //引入http模块

//引入创建文件的模块 - fs
const fs = require('fs'); //内置模块

//清洗数据 - 第三方模块清洗数据。
const cheerio = require('cheerio'); //引入模块



//爬取数据的地址。。
//浏览器network面板 - doc - header
//general:一般信息 √
//Response Headers:响应头
//Request Headers:请求头 √

//http://oa.1000phone.net/oa.php/Index/broadcast  协议+域名+路径+数据+哈希值
const options = {
    hostname: 'oa.1000phone.net', //域名
    port: 80,
    path: '/oa.php/Index/broadcast', //路径
    method: 'get',
    headers: { //设置请求头
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'PHPSESSID=ST-226991-snMgxQIEnl4teWv8Xb2iiubrIe4-izm5ejd5j1npj2pjc7i3v4z',
        'Host': 'oa.1000phone.net',
        'Referer': 'http://oa.1000phone.net/oa.php',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': 0
    }
};


http.get(options, (res) => {
    const { statusCode } = res; //http状态码
    const contentType = res.headers['content-type']; //设置文档类型

    res.setEncoding('utf8'); //设置字符编码
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; }); //Node.js事件  chunk:数据片段。数据一段一段输出 rawData接收数据拼接
    res.on('end', () => { //结束数据拼接，输出结果。
        try { //try...catch容错，js高级语法的应用。
            // console.log(rawData);
            const $ = cheerio.load(rawData);
            let str = '';
            $('#sample-table-1 tr td').each(function() {
                // console.log($(this).text()); //输出每一个td里面的文本内容。
                str += $(this).text() + '\n';
            });
            fs.writeFile('./data.txt', str, (err) => {
                if (err) throw err;
                console.log('文件写入成功');
            });
        } catch (e) {
            console.error(e.message); //输出错误信息
        }
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`); //输出错误信息
});