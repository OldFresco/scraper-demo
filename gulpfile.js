var gulp = require('gulp')
var replace = require('gulp-replace')

gulp.task('replace', function() {
    return gulp.src('argon_lite/index.html', { base: './' })
        .pipe(replace('<form action="/" method="post">', '<form action="/apply" method="get" '))
        .pipe(gulp.dest('./'))
})

gulp.task('default', ['replace'])