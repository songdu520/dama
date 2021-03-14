(function($) {
    $.fn.extend({
        slider: function(options) {

            let main = null, // 主函数
                init = null, // 初始化函数
                start = null, // 开始动画
                stop = null, // 停止动画
                prev = null, // 切换上一张
                next = null, // 切换下一张
                timer = null, // 计时器
                elms = {}, // 命名空间
                defaults = {
                    speed: 500, // 动画时间
                    delay: 3000 // 停留时间
                }; // 默认参数
            init = function() {

                elms.div = this.children('div'); // 需要移动的DIV元素
                elms.btns = this.children('span'); // 左右按钮
                elms.index = 1
                elms.imgWidth = elms.div.children('img').first().width();
                elms.div.children().first().clone().appendTo('.slider>div')
            }

            start = function() {
                elms.index++;
                let left = `-=${elms.imgWidth}`;
                elms.div.animate({
                    left: left
                })
                if (elms.index > 4) {
                    elms.index = 1
                    elms.div.css('left', '0px')
                }
            }
            main = function() {
                init()
                timer = setInterval(start, 1000)
            }
            main()

        }
    })
})(jQuery)