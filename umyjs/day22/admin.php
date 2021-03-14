
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="./cookie.js"></script>
<script src="./Z.js"></script>



    <body>
        <div class="container">
            <a href="xiugia.php">1111111</a>
        
            <div class="text-right h5">欢迎回来,<a id="loginout">退出</a></div>
            <div class="h1 text-center">用户信息管理</div>
            <table class="table table-bordered table-hover text-center">
                <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>password</td>
                    <td>email</td>
                    <td>more</td>
                </tr>
                
                <?php
                include('conn.php');
                $sql = "select * from registry"; //查询语句
                $result = $conn->query($sql); // 执行查询
               
                while($row = $result->fetch_assoc()){
                    echo "<tr>";
                    echo "<td>$row[sid]</td>";
                    echo "<td>$row[username]</td>";
                    echo "<td>$row[password]</td>";
                    echo "<td>$row[email]</td>";
                    echo "<td><a  class='btn btn-info' >删除</a><a href='xiugai.html?sid=$row[sid]'  class='btn btn-danger'>修改</a></td> ";
                    // echo "<td><a class='btn btn-info' href='./eg04.update.html?id=$row[sid]&username=$row[username]'>修改</a>&nbsp;<a class='btn btn-danger' href='./interface/removeitem.php?id=$row[sid]'>删除</a></td>";
                    echo "</tr>";
                };

                ?>

   <a href="xiugai.php"></a>
            </table>
        </div>
    </body>
    <script>
    if(!(cookie.get('isLogined')&&cookie.get('username')==='songdu'))
    </script>

</html>