'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});