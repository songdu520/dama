//

define([], function() {
    return {
        // 顶部悬浮
        rightnav: ! function() {
            $(' .goTop').on('click', function() {

                $('html').animate({
                    scrollTop: 0
                })
            })
        }(),
        movenav: ! function() {
            $(window).on('scroll', function() {

                if ($(window).scrollTop() >= 600) {
                    $('.movenav2').css({
                        top: 0
                    })
                } else {
                    $('.movenav2').css({
                        top: -75
                    })
                }
            })
        }(),
        //  搜索条
        search: ! function() {
            $('.icon1').on('click', function() {
                $(".nav2 ul ").hide()
                $('button').show()
                $('.icon2').show()
                $(".searchF input").stop(true).animate({
                    width: 854
                })


            })
            $('.searchF button').on('click', function() {

                $(".nav2 ul").show()
                $(this).hide()
                $('.icon2').hide()
                $(".searchF input").stop(true).animate({
                    width: 0
                })

            })
        }(),


        // 轮播图
        lunbo: ! function() {
            var lunbo = $('.lunbo')
            var leftarrow = $('#left');
            var rightarrow = $('#right');
            var bntlist = $('.banner ol li')
            var piclist = $('.banner ul li')
            var index = 0
            var timer = null

            function init() {
                timer = window.setInterval(function() {
                    clickRight()
                }, 2000)

                lunbo.hover(function() {
                    leftarrow.show();
                    rightarrow.show()
                    clearInterval(timer)

                }, function() {
                    leftarrow.hide();
                    rightarrow.hide();
                    timer = window.setInterval(function() {
                        clickRight()
                    }, 2000)

                })
                bntlist.on('click', function() {
                    index = $(this).index()
                    tabswitch()
                })
                rightarrow.on('click', function() {
                    clickRight()
                })
                leftarrow.on('click', function() {
                    clickLeft()
                })

            }

            function tabswitch() {
                piclist.eq(index).stop(true).animate({
                    opacity: 1
                }).siblings().stop(true).animate({
                    opacity: 0
                })
                bntlist.eq(index).addClass('active').siblings().removeClass('active')
            }

            function clickLeft() {
                index--;
                if (index < 0) {
                    index = bntlist.size() - 1
                }
                tabswitch()
            }

            function clickRight() {
                index++;
                if (index > bntlist.size() - 1) {
                    index = 0
                }
                tabswitch()
            }
            init()



        }(),
        // 渲染
        render: ! function() {
            $.ajax({
                url: "http://10.31.162.24/h5/umyjs/taobaoitem_test/php/list.php",
                //  http://10.31.163.220/h5/umyjs/taobaoitem_test/php/list.php
                //http://10.31.162.24/h5/umyjs/taobaoitem_test/php/list.php
                //http://10.31.162.24//h5/umyjs/taobaoitem_test/php/listdata.php
                dataType: 'json'
            }).done(function(data) {

                var strhtml = ''
                $.each(data, function(index, value) {
                    strhtml += ' <li><a href="javascript:;"><img class="lazy" data-original=" ' + value.url + '" alt=" "><h5>' + value.title + '</h5><p class="item"> 活动价3099元爆款热销中 </p><p class="price">' + value.price + '</p></a></li>'
                    if (index >= 3) {
                        return false
                    }
                })
                $('.fool-3 ul').html(strhtml)
                $(window).on('scroll', function() {

                    $("img.lazy").lazyload({
                        placeholder: "./images/load.jpg",
                        effect: "fadeIn",
                    })
                })
            })

            $("img.lazy").lazyload({
                placeholder: "./images/load.jpg",
                effect: "fadeIn",
            })

        }()

    }
})