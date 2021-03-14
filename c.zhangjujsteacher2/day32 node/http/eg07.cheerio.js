const cheerio = require('cheerio');

let data = `<div class="box">
    <ul>
        <li>1</li>
        <li>2  aaa</li>
        <li>3 bbb</li>
        <li>4 ccc</li>
    </ul>
</div>`;

const $ = cheerio.load(data); // 加载文档

// console.log($('.box>ul>li').eq(2).text());

$('.box>ul>li').each((i, el) => {
    console.log(i, $(el).text());
});