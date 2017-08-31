var gulp = require('gulp');
var ts = require('gulp-typescript');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function () {
    gulp
        .watch(['src/**/*.ts'])
        .on("change", function () {
            return gulp.src('src/**/*.ts')
                .pipe(ts({
                    noImplicitAny: true,
                    outFile: 'slavs.js'
                }))
                .pipe(gulp.dest('dist'));
        });

     exec('node server.js');

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("dist/slavs.js").on("change", reload);
});

gulp.task('server', function () {
    gulp
        .watch(['server/**/*.ts'])
        .on("change", function () {
            return gulp.src('server/**/*.ts')
                .pipe(ts({
                    noImplicitAny: true,
                    outFile: 'server.js'
                }))
                .pipe(gulp.dest('server/dist'));
        });

});