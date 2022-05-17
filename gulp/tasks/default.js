const gulp = require('gulp'); 

gulp.task('default', ['scss'], () => {
  gulp.watch('../src/scss/**/*.scss', ['scss']);
});
