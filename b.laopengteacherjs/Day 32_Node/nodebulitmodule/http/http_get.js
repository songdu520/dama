//http.get():获取 JSON 数据。
const http = require('http'); //引入http模块
//
const url = 'http://api.k780.com/?app=weather.realtime&weaid=1&ag=today,futureDay,lifeIndex,futureHour&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json'; //接口地址，后端不存在跨越。
http.get(url, (res) => {
    const { statusCode } = res; //http状态码
    const contentType = res.headers['content-type']; //设置文档类型
    let error;
    // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
    if (statusCode !== 200) { //请求失败报错信息
        error = new Error('请求失败\n' +
            `状态码: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) { //接口数据格式不是json报错。文档类型：application/json
        error = new Error('无效的 content-type.\n' +
            `期望的是 application/json 但接收到的是 ${contentType}`);
    }
    if (error) { //输出错误
        console.error(error.message);
        // 消费响应的数据来释放内存。
        res.resume();
        return;
    }

    res.setEncoding('utf8'); //设置字符编码
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; }); //Node.js事件  chunk:数据片段。数据一段一段输出 rawData接收数据拼接
    res.on('end', () => { //结束数据拼接，输出结果。
        try { //try...catch容错，js高级语法的应用。
            // const parsedData = JSON.parse(rawData); //将数据转对象
            // console.log(parsedData); //输出数据
            console.log(rawData);
        } catch (e) {
            console.error(e.message); //输出错误信息
        }
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`); //输出错误信息
});