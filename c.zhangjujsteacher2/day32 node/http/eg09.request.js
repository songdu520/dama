const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'app': 'weather.future',
    'weaid': 'hangzhou',
    'appkey': '38926',
    'sign': 'f8b4121c2d581be2623569b24f798dee',
    'format': 'json'
});

const options = {
    hostname: 'api.k780.com',
    port: 80,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    let data = '';
    res.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        // console.log('-----------');
        data += chunk;
    });
    res.on('end', () => {
        // console.log('No more data in response.');
        console.log(data);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();