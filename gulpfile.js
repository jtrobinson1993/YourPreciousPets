const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minifyJS = require('gulp-uglifyjs');
const minifyCSS = require('gulp-clean-css');
const pug = require('gulp-pug');
const minifyHTML = require('gulp-cleanhtml');
const wrap = require('gulp-wrap');
const extReplace = require('gulp-ext-replace');
const autoPrefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('default', ['sass', 'js', 'html']);

gulp.task('sass', () => {
  return gulp
    .src('./web/src/**/*.scss')
    .pipe(
      sass({
        paths: [path.join(__dirname, 'styles', 'includes')]
      })
    )
    .pipe(
      autoPrefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(minifyCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./web/build/styles'));
});

gulp.task('js', () => {
  return gulp
    .src('./web/src/**/*.js')
    .pipe(
      babel({
        presets: ['es2015', 'es2016']
      })
    )
    .pipe(minifyJS())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./web/build/js'));
});

gulp.task('html', () => {
  return gulp
    .src('./web/src/**/*.pug')
    .pipe(pug())
    .pipe(minifyHTML())
    .pipe(wrap('<?php require_once( "couch/cms.php" ); ?><%= contents %><?php COUCH::invoke(); ?>'))
    .pipe(extReplace('.php'))
    .pipe(gulp.dest('./web/build'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('./web/src/**/*.js', ['js']);
  gulp.watch('./web/src/**/*.sass', ['sass']);
  gulp.watch('./web/src/**/*.php', ['html']);
});