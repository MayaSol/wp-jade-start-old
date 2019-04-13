import gulp from 'gulp';
import del from 'del';

gulp.task('clean', function() {
  return del(['dist/*'],{force:true});
});


gulp.task('clean:remote', function() {
  return del(['/var/www/wp-jade-start/wp-content/themes/wp-jade-start/**','!/var/www/wp-jade-start/wp-content/themes/wp-jade-start'],{force:true});
});
