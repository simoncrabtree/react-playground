var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var paths = {
	app_js: ['./src/js/app.jsx']
}

gulp.task('js', function () {
	browserify(paths.app_js)
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('copyfiles', function () {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'copyfiles']);