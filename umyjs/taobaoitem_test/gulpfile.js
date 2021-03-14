const gulp = require('gulp');
const html = require('gulp-minify-html')
const css = require('gulp-clean-css')
const uglifyjs = require('gulp-uglify')
const watch = require('gulp-watch'); //引入监听的模块。
gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'))

})
gulp.task('css', () => {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css/'))
})
gulp.task('uglifyjs', () => {
        return gulp.src('src/script/*.js')
            .pipe(uglifyjs())
            .pipe(gulp.dest('dist/script/'))
    })
    //sass编译css并且添加.map文件
    //gulp-sass   gulp-sourcemaps    gulp-load-plugins
const sass = require('gulp-sass'); //引入编译sass的模块。
const sourcemaps = require('gulp-sourcemaps');
const plugins = require('gulp-load-plugins');


gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/sass/'))
})
gulp.task('default', function() {
    watch(['src/*.html', 'src/sass/*.scss', 'src/script/*.js'], gulp.parallel('html', 'sass', 'uglifyjs'));
    // watch(['src/*.html', 'src/sass/*.scss', 'src/script/*.js'], gulp.parallel('html', 'sass', 'uglifyjs'))
})