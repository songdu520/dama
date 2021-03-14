<?php
    include('./library/conn.php');

    // 前端发送的是GET请求
    // 后端需要接收数据
    $username = $_REQUEST['username'];
    $cb = $_GET['cb'];

    // 判断用户名是否存在
    // 查找数据库
    $sql = "select * from users where username='$username'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        //  fn({"has":true,"msg":"用户名已存在"})
        echo $cb.'({"has":true,"msg":"用户名已存在","username":"'.$username.'"})';
    }else{
        echo $cb.'({"has":false,"msg":"用户名可以使用"})';
    }

?>