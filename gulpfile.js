/*
 * @Author: Dengzh 
 * @Date: 2018-09-04 23:18:18 
 * @Last Modified by: Dengzh
 * @Last Modified time: 2018-09-05 11:54:57
 */

// gulpfile.js主文件

'use strict';

// 此处代码都是有node执行

// 载入gulp模块
var gulp = require('gulp');
// 载入gulp-less
var less = require('gulp-less');
// 载入gulp-clean-css
let cleanCSS = require('gulp-clean-css');

// 注册任务
gulp.task('copy', function () {
    // 将你的默认的任务代码放在这
    // console.log('hello');
    // 合并 压缩之类的操作
    // 复制文件
    // gulp.src方法，取一个文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});

// 注册任务
gulp.task('dist', function () {
    gulp.watch('src/index.html', ['copy']);
    gulp.watch('src/styles/*.less', ['style']);
});

// gulp-less任务
gulp.task('style', function () {
    return gulp.src('src/styles/*.less')      // less文件目录
        .pipe(less())                           // 编译Less文件为css
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))                                  // 压缩css
        .pipe(gulp.dest('dist/css'));       // 输出到指定目录
});
