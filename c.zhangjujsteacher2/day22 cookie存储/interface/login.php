<?php
    

    // 登陆的流程
    // 1. 接收表单数据
    // 2. 在数据库中查找和账号密码匹配的数据
    // 3. 返回结果

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username='$username' and password='$password'";

    // 执行查询
    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        // 登陆成功
        $row = $result->fetch_assoc(); // 获得数据

        // setcookie(name,value,expires,path) 设置cookie
        // time() php中获得当前时间对象
        setcookie('username',$row['username'],time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');

        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../index.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../eg04.login.html";</script>';
    }
?>