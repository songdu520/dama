const mysql = require('mysql');

let pool = mysql.createPool({ // 创建连接池
    connectionLimit: 10, // 最大连接数
    host: 'localhost', // 主机名
    user: 'root', // mysql的用户名
    password: 'root', // mysql的密码
    database: 'h5_2009' // 数据库名
});

module.exports = pool; // 将连接池导出