
const gulp = require('gulp');
const rename = require('gulp-rename');

async function md() {
    const markdown = (await import('gulp-markdown')).default;
    return gulp.src('whitepaper/whitepaper.md')
        .pipe(markdown())
        .pipe(rename('inner_whitepaper.html'))
        .pipe(gulp.dest('src/pages/'));
}

module.exports = md;