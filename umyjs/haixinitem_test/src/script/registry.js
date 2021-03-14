define([], function() {
    return {
        zhuche: ! function() {
            $('#submit').on('click', function() {
                // 省略2万字的表单验证环节
                // let password = $.md5($('[name=password]').val());
                $.ajax({
                    type: "post",
                    url: "http://localhost:8888/users/reg",
                    data: {
                        username: $('[name=username]').val(),
                        password: $('[name=password]').val(),
                        email: $('[name=email]').val(),
                    },
                    dataType: "json",
                    success: function(response) {
                        if (result) {
                            location.href = "/";
                            localStorage.setItem('username', $('.username').val());
                        } else {
                            $('.password').val('');
                            alert('用户名或者密码错误');
                        }
                    }
                });
            });
            var registry = document.querySelector('#registry');
            var username = document.querySelector('.username');

            var email = document.querySelector('.email');

            var password = document.querySelector('.password');
            var message = document.querySelectorAll('#registry span'); //5

            //每一个表单添加一个标记，验证是否成功。
            var userflag = true;

            var emailflag = true;

            var passflag = true;

            //1.用户名的匹配
            //获得焦点
            username.onfocus = function() {
                message[0].innerHTML = '设置后不可更改，中英文均可，最长14个英文或7个汉字';
                message[0].style.color = '#666';
            };

            //失去焦点
            username.onblur = function() {
                if (this.value !== '') { //不为空
                    var len = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length; //获取字符串的长度
                    var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/; //中英文均可
                    if (len >= 7 && len <= 14) { //限制长度
                        if (reg.test(this.value)) { //满足正则条件
                            message[0].innerHTML = '√';
                            message[0].style.color = 'green';
                            userflag = true;
                        } else { //不满足条件
                            message[0].innerHTML = '用户名格式输入有误';
                            message[0].style.color = 'red';
                            userflag = false;
                        }
                    } else { //长度有问题
                        message[0].innerHTML = '用户名长度有问题';
                        message[0].style.color = 'red';
                        userflag = false;
                    }

                } else { //为空
                    message[0].innerHTML = '用户名不能为空';
                    message[0].style.color = 'red';
                    userflag = false;
                }
            }


            //3.电子验证
            email.onfocus = function() {
                message[1].innerHTML = '请输入正确的电子邮箱';
                message[1].style.color = '#666';
            };

            email.onblur = function() {
                if (this.value !== '') {
                    var reg = /^\w+([+.-]\w+)*@(\w+([.-]\w+)*)\.(\w+([.-]\w+)*)$/;
                    if (reg.test(this.value)) {
                        message[1].innerHTML = '√';
                        message[1].style.color = 'green';
                        emailflag = true;
                    } else {
                        message[1].innerHTML = '电子邮箱格式有误';
                        message[1].style.color = 'red';
                        emailflag = false;
                    }
                } else {
                    message[1].innerHTML = '电子邮箱不能为空';
                    message[1].style.color = 'red';
                    emailflag = false;
                }
            }

            //4.身份证号


            //5.用户密码(数字，大小写字符，特殊字符)
            //1种字符：弱
            //1种字符：中
            //3种字符：中
            //4种字符：强

            password.onfocus = function() {
                message[2].innerHTML = '请输入密码,长度为8-11个字符';
                message[2].style.color = '#666';
            };

            password.oninput = function() {
                if (this.value.length >= 8 && this.value.length <= 11) {
                    var regnum = /\d+/g;
                    var reglower = /[a-z]+/g;
                    var regupper = /[A-Z]+/g;
                    var other = /[\W\_]+/g;
                    var count = 0; //统计字符的种类
                    if (regnum.test(this.value)) {
                        count++;
                    }

                    if (reglower.test(this.value)) {
                        count++;
                    }

                    if (regupper.test(this.value)) {
                        count++;
                    }

                    if (other.test(this.value)) {
                        count++;
                    }

                    //通过种类判断输出弱中强
                    switch (count) {
                        case 1:
                            message[2].innerHTML = '弱';
                            message[2].style.color = 'red';
                            passflag = false;
                            break;

                        case 3:
                            message[2].innerHTML = '中';
                            message[2].style.color = 'orange';
                            passflag = true;
                            break;
                        case 4:
                            message[2].innerHTML = '强';
                            message[2].style.color = 'green';
                            passflag = true;
                            break;
                    }

                } else {
                    message[2].innerHTML = '密码长度有问题';
                    message[2].style.color = 'red';
                    passflag = false;
                }
            };

            password.onblur = function() {
                if (this.value !== '') {
                    if (passflag) {
                        message[2].innerHTML = '√';
                        message[2].style.color = 'green';
                    }
                } else {
                    message[2].innerHTML = '密码不能为空';
                    message[2].style.color = 'red';
                    passflag = false;
                }
            };

            //提交事件。
            registry.onsubmit = function() { //表单提交事件
                if (username.value === '') {
                    message[0].innerHTML = '用户名不能为空';
                    message[0].style.color = 'red';
                    userflag = false;
                }

                if (email.value === '') {
                    message[1].innerHTML = '电子邮箱不能为空';
                    message[1].style.color = 'red';
                    emailflag = false;
                }

                if (password.value === '') {
                    message[2].innerHTML = '密码不能为空';
                    message[2].style.color = 'red';
                    passflag = false;
                }
                //如果任何一个标记为false，都阻止提交
                if (!userflag || !emailflag || !passflag) {
                    return false; //阻止提交
                }
            }
        }()
    }

});