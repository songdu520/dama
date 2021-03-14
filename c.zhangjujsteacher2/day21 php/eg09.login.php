<?php
    header('content-type:text/html;charset=utf-8');

    // $_GET[]  函数 接收前端发送的GET数据
    // $username = $_GET['username'];
    // $password = $_GET['password'];

    // $_POST[] 函数 接收前端发送的POST数据
    $username = $_POST['username'];
    $password = $_POST['password'];


    // GET和POST的区别
    // 1. GET请求的数据(search)会在地址栏显示 POST不显示
    // 2. GET请求可传输的数据量有限 传输速度快
    // 3. POST请求可传输的数据量没有限制 传输速度慢
    // 4. GET数据随请求头(header)发送，POST数据随请求体(body)发送

    // 安全性 没有区别


    // echo "用户名是$username";
    // echo "密码是$password";

    // 数据库数据查询操作
    // 假设已经拿到查询的结果  结果的用户名为 root  密码为 123456

    if($username === 'root'&& $password==='123456'){
        // echo '登陆成功';

        echo '<script>alert("登陆成功"); location.href="index.html";</script>';
    }else{
        // echo '用户名或密码错误';

        echo '<script>alert("用户名或密码错误"); location.href="eg09.login.html";</script>';
    }

?>