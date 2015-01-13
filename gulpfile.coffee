gulp = require("gulp")
mocha = require("gulp-mocha")
env = require('gulp-env');

gulp.task "test", ->
    env vars:
        JUNIT_REPORT_PATH: "junit.xml"
    gulp
        .src("test/*.js",
            read: false
        )
        .pipe mocha(
            reporter: "mocha-jenkins-reporter"
        )
