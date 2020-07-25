// Define some plugins!
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
var rigger = require('gulp-rigger');


const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

/**
 * Compile Sass.
 */
gulp.task('sass', function() {
    return gulp.src(['./src/**/*.sass', './src/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))                    
    .pipe(gulp.dest('./dist'));         
});

// html

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./dist'))
})

// js

gulp.task('js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
})

// images

gulp.task('image', function () {
  gulp.src('./src/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

// fonts

gulp.task('fonts', function() {
    return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'))
})

// live server

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// watcher

gulp.task('watch', function() {
    gulp.watch('./src/**/*.sass', ['sass']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/images/*', ['image']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch("./src/**/*.html").on('change', browserSync.reload);
    gulp.watch("./src/**/*.sass").on('change', browserSync.reload);
    gulp.watch('./src/images/*').on('change', browserSync.reload);
    gulp.watch("./src/**/*.js").on('change', browserSync.reload);
})

gulp.task('default', ['browser-sync', 'watch', 'sass', 'html', 'image', 'fonts', 'js'])