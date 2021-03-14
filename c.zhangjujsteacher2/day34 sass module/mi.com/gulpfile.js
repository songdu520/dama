const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sprite = require('gulp.spritesmith');
const less = require('gulp-less');
const path = require('path');

// 1. 压缩html  
// gulp-htmlmin
// $ npm i gulp-htmlmin -D
gulp.task('htmlmin', () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});


// 2. 压缩css
// gulp-cssmin
// $ npm i gulp-cssmin -D
gulp.task('cssmin', function() {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
});


// 3. 压缩js
// gulp-uglify
// $ npm i gulp-uglify -D
gulp.task('jsmin', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});


// 4. 图片压缩
// gulp-imagemin
// $ npm i gulp-imagemin -D

gulp.task('imagemin', () => {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

// 5. 合并文件
// gulp-concat
// $ npm i gulp-concat -D
gulp.task('concat', () => {
    return gulp.src(['./src/js/jquery.js', './src/js/qs.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'));
});

// 6. 精灵图
// gulp.spritesmith
// $ npm i gulp.spritesmith
gulp.task('sprite', () => {
    return gulp.src('./src/img/*')
        .pipe(
            sprite({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            })
        )
        .pipe(gulp.dest('./src/img'));
});

// 7. less编译
// gulp-less
// $ npm i gulp-less -D
gulp.task('less', () => {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        })).pipe(gulp.dest('./src/styles'));
});

// 8. 文件监听
gulp.task('watchless', () => {
    // 监听less文件 发生改变
    // 自动运行less任务
    gulp.watch('./src/styles/*.less', gulp.series('less'));
});

// 9. 自动构建
gulp.task('dev', () => {
    gulp.watch(['./src/styles/*.less', './src/html/*.html', 'src/js/*.js'], gulp.series('htmlmin', 'concat', 'less', 'cssmin', 'jsmin'));
})