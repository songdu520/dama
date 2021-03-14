const request = require('request'); //第三方模块，必须安装

request('http://api.k780.com/?app=weather.realtime&weaid=1&ag=today,futureDay,lifeIndex,futureHour&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json', (a, b, c) => {
    console.log(b.body); //第二个参数输出的接口的值。
});