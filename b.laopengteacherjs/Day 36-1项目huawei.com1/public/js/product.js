import './library/jquery.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';

(function() {
    let id = location.search.split('=')[1]; // 获得商品id

    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            res = res[0];
            let picture = JSON.parse(res.picture);

            let template = `
            <h1>${res.title}</h1>
            <div class="p-picture">
                <img src="../${picture[1].src}">
            </div>
            <div class="p-price">
                价格:<span>￥</span>${res.price}
            </div>
            <div class="p-num">库存数量:${res.num}</div>
            <input type="number" value="1" min="1" max="${res.num}" id="num">
            <input type="button" value="加入购物车" id="additem">
            <div>
                ${res.details}
            </div>
            `;

            // 渲染页面
            $('body').append(template).find('#additem').on('click', function() {
                addItem(res.id, $('#num').val());
            });
        }
    });

    function addItem(id, num) {
        let shop = cookie.get('shop'); // 从cookie中获得shop数据

        let product = {
            id: id,
            num: num
        }

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop); // 将取出的cookie数据转成对象

            // 判断cookie中的购物车数据 是否已存在本条数据的id
            // 如果本条数据的id已存在 修改数量
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(el => {
                    el.id === id ? el.num = num : null;
                });
            } else {
                shop.push(product);
            }

        } else { // cookie中不存在shop数据
            shop = []; // 设置一个数组
            shop.push(product); // 将当前商品存入数组
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }

})();