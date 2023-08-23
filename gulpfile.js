const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const GulpUglify = require('gulp-uglify');

//Compiling SCSS, Autoprefixer and Refreshing page upon change
function compileSass() {
    return gulp.src('scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('CSS/'))
        .pipe(browserSync.stream());
}

//SCSS Task
gulp.task('sass', compileSass);

//Concat function
function gulpJS() {
    return gulp.src('js/scripts/*js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(GulpUglify())
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream())
}

//Concat task
gulp.task('alljs', gulpJS)

//CSS Plugins function
/*function pluginsCss() {
    return gulp.src('CSS/lib/*.css')
        .pipe(concat('plugins.css'))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream())
}*/

//CSS Plugins Task
//gulp.task('pluginCss', pluginsCss);

//JS Plugins function
/*function pluginsJS() {
    return gulp
        .src(['JS/lib/aos.min.js', 'JS/lib/swiper.min.js'])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('JS/'))
        .pipe(browserSync.stream())
}*/

//JS Plugins task
//gulp.task('pluginJs', pluginsJS);

//BrowserSync Function
function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}

//BrowserSync Task
gulp.task('browser-sync', browser);

//Watch Function (When changes happen in SCSS and HTML)
function watch() {
    gulp.watch('scss/*.scss', compileSass);
    //gulp.watch('css/lib/*.css', pluginsCss)
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/scripts/*.js', gulpJS);
    //gulp.watch('js/lib/*.js', pluginsJS)
}

//Watch Task
gulp.task('watch', watch);

//Default Tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'alljs'));