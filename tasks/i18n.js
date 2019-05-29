var child = require('child_process');
var gulp   = require('gulp');

var fileName = 'HELLO.test'

/*Список файлов для переводов */
const langs = ['ru_RU','en_GB','fr_FR'];

gulp.task('i18n',function(done) {
	child.spawn('sh',['tasks/sh/make-php-list.sh']);
	langs.map(function(fileName) {
	   child.spawn('sh',[ 'tasks/sh/get-msgs.sh', 'app/resources/languages/' + fileName + '.po' ]);
	});
	done();
 });
