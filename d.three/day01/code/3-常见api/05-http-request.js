const https = require('https');

const option = {
    hostname: 'm.maoyan.com',
    port: null,
    path: '/ajax/movieOnInfoList',
    method: 'GET'
};

// https://m.maoyan.com/ajax/movieOnInfoList
//https.request()可以get请求也可以post请求
https.request(option, res => {
    let result = '';
    res.on('data', chunk => {
        result += chunk;
    });
    res.on('end', () => {
        console.log(result)
    })
}).end()