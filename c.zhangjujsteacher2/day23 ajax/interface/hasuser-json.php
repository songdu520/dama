<?php
    include('./library/conn.php');

    $data = file_get_contents('php://input');  // 用于接收json数据

    // var_dump($data);
    $obj = json_decode($data);  // 将json字符串转成php的对象
    // var_dump($obj);


    $username = $obj->username;

    
    $sql = "select * from users where username='$username'";


    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '{"has":true,"status":200,"msg":"用户名已存在"}';
    }else{
        echo '{"has":false,"status":200,"msg":"用户名可以使用"}';
    }

?>