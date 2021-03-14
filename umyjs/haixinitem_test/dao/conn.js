const mysql = require('mysql')


var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ao'
});
module.exports = pool


// app.use(express.static(path.join(__dirname, 'src')));
// app.listen(conf.port, conf.host, () => {
//     console.log(`server is running on http://${conf.host}:${conf.port}`);
// })