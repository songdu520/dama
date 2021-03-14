// 爬虫:只有后端渲染的网站可以爬，前后端分离的爬不了

// 获取整个页面的信息
const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.microsoftstore.com.cn', res => {
    let result = '';
    res.on('data', chunk => {
        result += chunk;
    });
    res.on('end', () => {
        // 使用cheerio对整个页面数据进行筛选
        const $ = cheerio.load(result);
        let arr = [];
        $('.recommends-swiper-container').eq(0).find('.swiper-slide').each((index, value) => {
            arr.push({
                title: $(value).find('.inner').html(),
                img: $(value).find('img').attr('src'),
                price: $(value).find('strong span').eq(0).html()
            })
        });
        console.log(arr);
    });
});