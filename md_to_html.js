
const gulp = require('gulp');

async function md() {
    const markdown = (await import('gulp-markdown')).default;
    return gulp.src('whitepaper/whitepaper.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
}

module.exports = md;