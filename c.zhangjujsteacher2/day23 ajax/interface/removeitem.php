<?php
    include('./library/conn.php');

    // 删除条件 通过id来进行删除
    $id = $_GET['id'];

    $sql = "delete from users where id=$id";

    $mysqli->query($sql);

    $mysqli->close();

    echo '<script>location.href="../eg02.admin.php"</script>';
    
?>