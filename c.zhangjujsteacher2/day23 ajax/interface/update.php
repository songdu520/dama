<?php
    include('./library/conn.php');

    $id = $_REQUEST['id'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $address = $_REQUEST['address'];

    $sql = "update users set password='$password',email='$email',phone='$phone',address='$address' where id=$id";
//          更新
    $mysqli->query($sql);

    $mysqli->close();

    echo '<script>location.href="../eg02.admin.php"</script>';
?>