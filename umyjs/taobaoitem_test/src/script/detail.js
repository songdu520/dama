define([

], function() {
    return {

        detailStyle: ! function() {
            var sid = location.search.substring(1).split('=')[1]
            if (!sid) {
                sid = 1
            }
            $.ajax({
                    url: 'http://10.31.163.220/h5/umyjs/taobaoitem_test/php/list.php',
                    dataType: 'json'
                }).done(function(data) {

                    var picsmallpic = $('#smallpic')
                    var p_name = $('.p-name a')

                    $.each(data, function(index, value) {

                        if (value.sid == sid) {

                            picsmallpic.attr('src', value.url)
                            p_name.html(value.title)
                            $('.p-price i').html(value.price)
                        }
                    })
                })
                //获取cookie
            arrsid = []
            arrnum = []

            $('.p-btn a').on('click', function() {
                if ($.cookie('cookieid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookieid').split(',')
                    arrnum = $.cookie('cookienum').split(',')
                }
                if ($.inArray(sid, arrsid) === -1) {
                    arrsid.push(sid)
                    $.cookie('cookieid', arrsid, { expires: 10, path: '/' })
                    arrnum.push($('#count').val())
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' })

                } else {
                    var index = $.inArray(sid, arrsid)
                    var num = parseInt(arrnum[index])

                    arrnum[index] = num + parseInt($('#count').val())
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' })
                }

            })

        }()
    }

});