<?php
include('conn.php');
 $username=$_REQUEST ['username'];
 $password=$_REQUEST['password'];
 $result=$conn->query("select * from registry where username='$username' and password='$password'");
 if($result->num_rows>0){
     $row=$result->fetch_assoc();
     setcookie('uername',$row['username'],time()+3600*24,'/');
     setcookie('isLogined','true',time()+3600*24,'/');
     echo '<script> alert("登录成功")</script>';
     echo '<script> location.href="http://localhost/h5/umyjs/day22/main.html"</script>';
 }else{
    echo '<script>alert("用户名或密码错误");</script>';
    echo '<script>location.href="http://localhost/h5/umyjs/day22/login.html";</script>';
 };