import './library/jquery.js';

$('#getcode').on('click', function() {
    $.ajax({
        type: "get",
        url: "../users/getcode",
        data: {
            email: $('#email').val()
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
});


$('#submit').on('click', function() {
    $.ajax({
        type: "get",
        url: "../users/checkcode",
        data: {
            email: $('#email').val(),
            code: $('#checkcode').val()
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
});