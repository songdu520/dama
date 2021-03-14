const gulp = require('gulp'); //引入gulp模块  gulp对象
const html = require('gulp-minify-html'); //引入gulp-minify-html模块。
const css = require('gulp-clean-css'); //引入gulp-clean-css模块。

const uglifyjs = require('gulp-uglify'); //引入压缩js的模块。

//sass编译css并且添加.map文件
//gulp-sass   gulp-sourcemaps    gulp-load-plugins
const sass = require('gulp-sass'); //引入编译sass的模块。
const sourcemaps = require('gulp-sourcemaps');
const plugins = require('gulp-load-plugins');

//es6转es5
const babel = require('gulp-babel'); //es6转es5主要模块
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块


const imagemin = require('gulp-imagemin'); //压缩图片的包

//监听模块
const watch = require('gulp-watch'); //引入监听的模块。


//1.文件的复制：开发目录将文件放到线上目录。
// gulp.task('copyfile', function () {
//     return gulp.src('src/*.html')
//         .pipe(gulp.dest('dist/'));
// });

//2.html文件的压缩。
gulp.task('uglifyhtml', function() {
    return gulp.src('src/*.html')
        .pipe(html()) //执行html压缩
        .pipe(gulp.dest('dist/')) //输出,没有自动创建
});

//3.css文件的压缩。
// gulp.task('uglifycss', function() {
//     return gulp.src('src/css/*.css')
//         .pipe(css())
//         .pipe(gulp.dest('dist/css/'));
// });

//4.sass编译成css并且输出.map文件
gulp.task('runsass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })) //执行编译,compressed:压缩一行
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'));
});




//5.分开实现js代码的转码和压缩

//js的压缩 - 当前的项目，模块化不适合es6转es5,自动添加严格模式
// gulp.task('uglifyjs', function() {
//     return gulp.src('src/script/*.js')
//         .pipe(uglifyjs())
//         .pipe(gulp.dest('dist/script/'));
// });


//es6转es5
//现将es6代码转换成es5才能进行相关的压缩合并操作。
//gulp-babel@7   @后面的数字代表版本
//gulp-babel@7  babel-core   babel-preset-es2015
gulp.task('uglifyjs', function() {
    return gulp.src('src/script/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/script/'));
});




//6.png图片的压缩
//图片压缩的插件：gulp-imagemin
gulp.task('runimg', function() {
    return gulp.src('src/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});



//监听:
//如果将任务名称设置为default，执行任务的时候直接gulp。
gulp.task('default', function() {
    // /dɪˈfɔːlt,ˈdiːfɔːlt/默认值
    watch(['src/*.html', 'src/sass/*.scss', 'src/script/*.js'], gulp.parallel('uglifyhtml', 'runsass', 'uglifyjs'));
    //                                                                /ˈpærəlel/平行线
    //watch的第一个参数监听的文件的路径，第二个参数是监听运行的任务名
    //gulp.parallel() –并行运行任务 
});

//1.gulp.task(任务名称,回调函数); 默认的任务名称：default
//2.gulp.src() : 引入文件的目录,路径
//3.pipe:管道流
//4.gulp.dest() : 输出文件目录设置,如果目录不存在，自动创建。