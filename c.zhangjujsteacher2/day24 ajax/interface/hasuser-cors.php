<?php
    include('./library/conn.php');

    header('Access-Control-Allow-Origin:*');  // 开发ajax跨域权限

    // $_GET[] $_POST[] $_REQUEST[]  只能接收表单数据
    $username = $_REQUEST['username'];

    $sql = "select * from users where username='$username'";

    $result = $mysqli->query($sql);

    $mysqli->close();

    // 结果不条跳转页面 而是发送一个 JSON字符串
    if($result->num_rows>0){
        echo '{"has":true,"status":200,"msg":"用户名已存在"}';
    }else{
        echo '{"has":false,"status":200,"msg":"用户名可以使用"}';
    }
?>