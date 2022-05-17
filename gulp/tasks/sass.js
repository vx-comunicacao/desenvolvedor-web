const gulp = require('gulp'); 
const scss = require('gulp-sass');

gulp.task('scss', () => {
  gulp
  .src(['../src/scss/**/*.scss'])
  .pipe(scss().on('Erro', scss.logError))
  .pipe(gulp.dest('../src/css/'))
});

