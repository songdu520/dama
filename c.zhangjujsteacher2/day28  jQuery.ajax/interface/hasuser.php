<?php
    include('./library/conn.php');

    // 接收前端发送的用户名
    $username = $_REQUEST['username'];

    $sql = "select * from users where username='$username'";

    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        echo '{"has":true,"msg":"用户名以存在"}';
    }else{
        echo '{"has":false,"msg":"用户名可以使用"}';
    }
?>