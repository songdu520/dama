import './library/jquery.js';
import './library/jquery.lazyload.min.js';
import { baseUrl } from './library/config.js';


(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            // 获得数据后进行字符串拼接
            let tempLi = '';
            res.forEach((elm, i) => {

                let picture = JSON.parse(elm.picture);
                console.log(picture);

                tempLi += `<li class="item">
                <a href="./html/product.html?id=${elm.id}">
                    <div class="p-picture">
                        <img src="${picture[0].src}" alt="">
                    </div>
                    <div clas="p-tltle">
                        ${elm.title}
                    </div>
                    <div class="p-price">
                        <span class="yuan">￥</span>${elm.price}
                    </div>
                </a>
            </li>`;
            });

            $('.list').append(tempLi);
        }
    });
})();