define([], function() {
    return {
        zhuche: ! function() {
            var userflag = true;
            var telflag = true;
            var emailflag = true;
            var cartidflag = true;
            var passflag = true;

            $('.username').on('focus', function() {
                    $(this).siblings().html('设置后不可更改，中英文均可，最长14个英文或7个汉字').css({
                        color: '#666'
                    })

                }

            )
            $('.username').on('blur', function() {
                    if ($(this).val()) {
                        var len = this.value.replace(/[\u4e00-\u9fa5]/g, 'aa').length
                        console.log(len)
                        var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/g
                        if (len >= 7 && len <= 14) {
                            if (reg.test(this.value)) {
                                $(this).siblings().html('√').css({ color: 'green' })
                            } else {
                                $(this).siblings().html('格式有误').css({
                                    color: 'red'
                                })
                            }
                        } else {
                            $(this).siblings().html('长度不对').css({
                                color: 'red'
                            })
                        }

                    } else {
                        $(this).siblings().html('用户名不能为空').css({
                            color: 'red'
                        })
                    }
                })
                //提交事件
                ('#rigistry').on('submit', function() {
                    if (username.value === '') {
                        message[0].innerHTML = '用户名不能为空';
                        message[0].style.color = 'red';
                        userflag = false;
                    }
                    if (telphone.value === '') {
                        message[1].innerHTML = '手机号码不能为空';
                        message[1].style.color = 'red';
                        telflag = false;
                    }
                    if (email.value === '') {
                        message[2].innerHTML = '电子邮箱不能为空';
                        message[2].style.color = 'red';
                        emailflag = false;
                    }

                    if (password.value === '') {
                        message[4].innerHTML = '密码不能为空';
                        message[4].style.color = 'red';
                        passflag = false;
                    }
                    //如果任何一个标记为false，都阻止提交
                    if (!userflag || !telflag || !emailflag || !cartidflag || !passflag) {
                        return false; //阻止提交
                    }
                })
        }()
    }

});