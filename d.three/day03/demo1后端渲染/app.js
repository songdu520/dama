// 引入项目所需要的内置和第三方模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入自定义的路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 调用express方法并且赋值给app变量，app是一个对象，里面会有很多的属性和方法
var app = express();


// view engine setup
// 使用了views文件夹作为页面视图
app.set('views', path.join(__dirname, 'views'));
// 指定了视图引擎为ejs模板引擎
app.set('view engine', 'ejs');


// 使用我们引入的模块
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 指定public为静态资源目录
app.use(express.static(path.join(__dirname, 'public')));


// 使用路由模块
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 处理404错误
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 处理500错误
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
