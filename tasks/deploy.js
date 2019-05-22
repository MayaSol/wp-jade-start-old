import gulp from 'gulp';
//import ghpages from 'gulp-gh-pages';

//gulp.task('deploy', () => (
//	gulp.src(['dist/**/*', '!dist/robots.txt']).pipe(ghpages({branch: 'dist'}))
//));

gulp.task('deploy-copy', () => (
	gulp.src(['dist/**/*']).pipe(gulp.dest('/var/www/wp-jade-start/wp-content/themes/default/'))
));

