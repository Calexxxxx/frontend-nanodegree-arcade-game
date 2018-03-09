const gulp = require('gulp'), // load gulp
  deploy = require('gulp-gh-pages'), // load gulp-gh-pages for github
  browserSync = require('browser-sync').create(), // load browser-sync to autoreload browser
  babel = require('gulp-babel'),
  paths = {
    pages: ['*.html'],
    css: ['css/*.css'],
    img: ['images/*.jpg', 'images/*.png'],
    js: ['js/*.js']
  }; // set paths to file for easy reference in tasks

/*
 * Set a variable called reload to call in each task to trigger the browser reload on a
 * file save
 */
const reload = browserSync.reload;

/*
 * Watch index.html and build file in dist folder if any changes are made
 * If error browser-sync will display an error in the browser and in the terminal
 */
gulp.task('html', function() {
  return gulp
    .src(paths.pages)
    .on('error', function(err) {
      browserSync.notify(err.message, 20000);
      this.emit('end');
    })
    .pipe(gulp.dest('docs/'))
    .pipe(reload({ stream: true }));
});

/**
 * Watch all img files and build file in dist folder if any changes are made
 * If error browser-sync will display an error in the browser and in the terminal
 */
gulp.task('img', function() {
  return gulp
    .src(paths.img)
    .on('error', function(err) {
      browserSync.notify(err.message, 20000);
      this.emit('end');
    })
    .pipe(gulp.dest('docs/images/'))
    .pipe(reload({ stream: true }));
});

/*
 * Watch all js files and build file in dist folder if any changes are made
 * If error browser-sync will display an error in the browser and in the terminal
 */
gulp.task('js', function() {
  return gulp
    .src(paths.js)
    .on('error', function(err) {
      browserSync.notify(err.message, 20000);
      this.emit('end');
    })
    .pipe(babel())
    .pipe(gulp.dest('docs/js/'))
    .pipe(reload({ stream: true }));
});

/*
 * Watch all css files and build file in dist folder if any changes are made
 * If error browser-sync will display an error in the browser and in the terminal
 */
gulp.task('css', function() {
  return gulp
    .src(paths.css)
    .on('error', function(err) {
      browserSync.notify(err.message, 20000);
      this.emit('end');
    })
    .pipe(gulp.dest('docs/css/'))
    .pipe(reload({ stream: true }));
});

/*
 * set task serve to load all tasks with one command gulp serve is set to npm start in
 * package.json
 * Serve files from the dist folder
 * Set a watch on all the tasks for any changes
 */
gulp.task('serve', ['html', 'css', 'js', 'img'], function() {
  browserSync.init({
    server: './docs'
  });
  gulp.watch(['js/**/*.js'], ['js']);
  gulp.watch(['css/**/*.css'], ['css']);
  gulp.watch(['**/*.html'], ['html']);
  gulp.watch(['images/**/*jpg', 'images/*.png'], ['img']);
});
