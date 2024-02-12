
const gulp = require('gulp');
const rename = require('gulp-rename');
const cheerio = require('gulp-cheerio');

async function md() {
    const markdown = (await import('gulp-markdown')).default;
    return gulp.src('whitepaper/whitepaper.md')
        .pipe(markdown())
        .pipe(cheerio({
            run: function ($, file) {
                $('table').css('margin', '0 auto');
            },
            parserOptions: { xmlMode: true }
        }))
        //.pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename('inner_whitepaper.html'))
        .pipe(gulp.dest('src/pages/'));
}

module.exports = md;