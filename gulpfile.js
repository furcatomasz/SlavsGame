var gulp = require('gulp');
var ts = require('gulp-typescript');
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

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("dist/slavs.js").on("change", reload);
});