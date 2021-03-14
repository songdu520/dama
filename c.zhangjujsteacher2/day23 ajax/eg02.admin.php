<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="./cookie.js"></script>
    <script src="./Z.js"></script>
    <script>
        if(!(cookie.get('isLogined')&&cookie.get('username')==='root')){
            // 如果不是root用户登陆 则跳转到登陆页面
            location.href = './eg01.login.html';
        }

        $(function(){
            $('#loginout').on('click',function(){
                // 删除cookie数据
                cookie.remove('isLogined');
                cookie.remove('username');
                location.reload(); //刷新页面
            });
        });
    </script>
</head>
<body>
    <div class="container">
        <div class="text-right h5">欢迎回来,<a id="loginout">退出</a></div>
        <div class="h1 text-center">用户信息管理</div>
        <table class="table table-bordered table-hover text-center">
            <tr>
                <td>id</td>
                <td>username</td>
                <td>password</td>
                <td>email</td>
                <td>phone</td>
                <td>address</td>
                <td>more</td>
            </tr>

            <?php
                include('./interface/library/conn.php'); // 连接数据库
                $sql = "select * from users"; //查询语句
                $result = $mysqli->query($sql); // 执行查询
                $mysqli->close(); // 关闭数据库连接
                while($row = $result->fetch_assoc()){
                    echo "<tr>";
                    echo "<td>$row[id]</td>";
                    echo "<td>$row[username]</td>";
                    echo "<td>$row[password]</td>";
                    echo "<td>$row[email]</td>";
                    echo "<td>$row[phone]</td>";
                    echo "<td>$row[address]</td>";
                    echo "<td><a class='btn btn-info' href='./eg04.update.html?id=$row[id]&username=$row[username]'>修改</a>&nbsp;<a class='btn btn-danger' href='./interface/removeitem.php?id=$row[id]'>删除</a></td>";
                    echo "</tr>";
                }
            ?>
        </table>
    </div>
</body>
</html>