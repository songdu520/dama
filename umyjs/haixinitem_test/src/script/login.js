! function($) {
    $('.btn').on('click', function() {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8888/users/login',
            data: {
                user: $('.username').val(),
                pass: hex_sha1($('.password').val())
            }
        }).done(function(result) {
            if (result) {
                location.href = "/";
                localStorage.setItem('username', $('.username').val());
            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
}(jQuery);