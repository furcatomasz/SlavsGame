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

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch("dist/slavs.js").on("change", reload);

    // gulp.run('server');
    // gulp.run('serverScenePreview');
});

// gulp.task('server', function () {
//     gulp
//         .watch(['server/**/*.ts'])
//         .on("change", function () {
//             return gulp.src('server/**/*.ts')
//                 .pipe(ts({
//                     noImplicitAny: true,
//                     outFile: 'server.js'
//                 }))
//                 .pipe(gulp.dest('server/dist'));
//         });
//
//     //var gameServer =  exec('node server/dist/server.js');
//     // gulp.watch("server/dist/server.js").on("change", function() {
//     //     exec('kill '+gameServer.pid);
//     //     gameServer =  exec('node server/dist/server.js');
//     // });
//
// });
//
// gulp.task('serverScenePreview', function () {
//     gulp
//         .watch(['serverScenePreview/**/*.ts'])
//         .on("change", function () {
//             return gulp.src('serverScenePreview/**/*.ts')
//                 .pipe(ts({
//                     noImplicitAny: true,
//                     outFile: 'serverScenePreview.js'
//                 }))
//                 .pipe(gulp.dest('serverScenePreview/dist'));
//         });
//     });
