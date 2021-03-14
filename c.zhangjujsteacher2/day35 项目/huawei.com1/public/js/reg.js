import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

$('#getcode').on('click', function() {
    $.ajax({
        type: "post",
        url: `${baseUrl}/users/getcode`,
        data: {
            email: $('#email').val()
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
        }
    });
});


// $('#submit').on('click', function() {
//     // 省略1万字的表单验证环节
//     let password = $.md5($('[name=password]').val());
//     $.ajax({
//         type: "post",
//         url: "http://localhost:8888/users/reg",
//         data: {
//             username: $('[name=username]').val(),
//             password: password,
//             email: $('[name=email]').val(),
//             phone: $('[name=phone]').val(),
//             address: $('[name=address]').val(),
//         },
//         dataType: "json",
//         success: function(response) {
//             console.log(response);
//         }
//     });
// });