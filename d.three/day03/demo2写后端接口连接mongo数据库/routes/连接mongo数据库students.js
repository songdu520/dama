const express = require('express');
const router = express.Router();

const studentModel = require('../model/students');

// // 第一步, 连接数据库
// mongoose.connect('mongodb://localhost:27017/2009', 
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// // 判断是否连接成功
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('数据库连接成功');
// });



// 第二部，创建骨架, 如果没有出现在骨架里的字段是不能存到数据库的
// let StudentSchema = mongoose.Schema({
//                           /ˈskiːmə/架构
//   name: String,
//   age: Number,
//   sex: Number,
//   phone: String,
//   num: Number,
//   add: String
// });


// // 第三步， 创建模型
// // 第一个参数表示集合名, 一定要是复数
// // 第二个是骨架名
// let studentModel = mongoose.model('students', StudentSchema);

router.get('/get', (req, res, next) => {
    // 第四步， 查询， 根据模型进行查询
    studentModel.find({}, (err, doc) => {
        // console.log(doc);
        if (err) throw err;
        res.json({
            status: 0,
            result: doc
        })
    })
})


module.exports = router;