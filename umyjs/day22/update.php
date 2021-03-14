<?php
include('conn.php');
$id = $_REQUEST['id'];
$password = $_REQUEST['password'];
$email = $_REQUEST['email'];
$conn->query("update user set password='$password',email='$email' where sid=$id");

// echo '<script>location.href="admin.php"</script>';echo '<script>location.href="../eg02.admin.php"</script>';