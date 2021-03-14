<?php
    // 连接数据库
    include('./library/conn.php');

    // 注册的流程 (业务逻辑)
    // 1. 接收表单发送的数据
    // 2. 验证用户名是否存在
    // 3. 如果用户名存在 返回结果 提示注册失败
    //    如果用户名不存在 将接收到的表单数据写入数据库 提示注册成功

    // 接收表单数据的方法
    // $_GET[]        接收get数据
    // $_POST[]       接收post数据
    // $_REQUEST[]    接收get/post数据

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $address = $_REQUEST['address'];

    // echo $username.' '.$password.' '.$email.' '.$phone.' '.$address;

    // 2. 验证用户名是否存在
    $sql = "select * from users where username='$username'";

    // 执行查询操作
    $result = $mysqli->query($sql);

    // 判断用户名是否存在(判断有没有查询到数据)
    if($result->num_rows>0){
        // 结果行数大于0 说明有数据
        echo '<script>alert("用户名已存在")</script>';
        echo '<script>location.href="../eg03.reg.html";</script>';
        $mysqli->close(); // 关闭连接
        die();
    }

    // 3. 将数据写入数据库
    $insert = "insert into users (username,password,email,phone,address) values ('$username','$password','$email','$phone','$address')";
    
    // 执行添加操作  
    // 执行insert操作时 返回一个布尔值表示是否添加成功
    $res = $mysqli->query($insert);
    $mysqli->close(); 

    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../eg04.login.html";</script>';
    }
?>