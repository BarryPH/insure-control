// var gulp = require('gulp');
// var watch = require('gulp-watch');
// var shell = require('gulp-shell');
// var sass = require('gulp-sass');
// 
// 
// var paths = {
// 	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
// 
// ,
// 	'style': {
// 		all: './public/styles/**/*.scss',
// 		output: './public/styles/'
// 	}
// 
// };
// 
// 
// gulp.task('watch:sass', function () {
// 	gulp.watch(paths.style.all, ['sass']);
// });
// 
// gulp.task('sass', function(){
// 	gulp.src(paths.style.all)
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest(paths.style.output));
// });
// 
// gulp.task('runKeystone', shell.task('node keystone.js'));
// gulp.task('watch', [
// 
//   'watch:sass',
// 
// ]);
// 
// gulp.task('default', ['watch', 'runKeystone']);






// -----------------------------------------------
//   Gulpfile
//   Based on: https://github.com/drewbarontini/noise
// 	 TODO: https://markgoodyear.com/2015/06/using-es6-with-gulp/
// -----------------------------------------------

var gulp    = require( 'gulp' );
var run     = require( 'run-sequence' );
var plugins = require( 'gulp-load-plugins' )({ lazy: true });


// -----------------------------------------------
//   Options
// -----------------------------------------------

var options = {

	default : {
		tasks : [ 'build', 'watch' ]
	},

	build : {
		tasks : [ 'compile:sass']
	},

	production : {
		tasks : [ 'build', 'minify:css' ]
	},

	sass : {
		files       : './src/styles/**/*.scss',
		destination : './public/styles/'
	},
	
	css : {
		file        : './public/styles/site.css',
		destination : './public/styles/'
	},
		
	watch : {
		files : function() {
			return [
				// options.images.files,
				// options.js.files,
				options.sass.files
			]
		},
		run : function() {
			return [
				// [ 'images' ],
				// [ 'minify:js' ],
				[ 'compile:sass' ]
			]
		}
	}
}


// -----------------------------------------------
//   Tasks
// -----------------------------------------------

gulp.task( 'default', options.default.tasks );

gulp.task( 'build', function() {
	options.build.tasks.forEach( function( task ) {
		gulp.start( task );
	} );
});

gulp.task( 'production', options.production.tasks );
	
gulp.task( 'watch', function() {
	var watchFiles = options.watch.files();
	watchFiles.forEach( function( files, index ) {
		gulp.watch( files, options.watch.run()[ index ]  );
	} );
});
	
gulp.task( 'compile:sass', function() {
	gulp.src( options.sass.files )
		.pipe( plugins.plumber() )
		.pipe( plugins.sass( {
			indentedSyntax: true,
		} ) )
		.pipe( plugins.autoprefixer( {
            browsers: [
                'last 2 versions',
                'Explorer >= 9',
                'iOS >= 5',
                'Safari >= 5',
                'OperaMobile >= 11',
                'ChromeAndroid >= 9',
                'ExplorerMobile >= 9'
            ],
			cascade: false
		} ) )
		.pipe( gulp.dest( options.sass.destination ) )
		.pipe( plugins.size({title: 'styles'}) )
});

// gulp.task( 'minify:css', function () {
// 	gulp.src( options.css.file )
// 		.pipe( plugins.plumber() )
// 		.pipe( plugins.uncss ( {
//             // for Jekyll:
// 			html: [
// 				'_site/**/*.html'
// 			],
// 			uncssrc: '.uncssrc'
// 		} ) )
// 		.pipe( plugins.cssnano( { advanced: false } ) )
// 		.pipe( plugins.rename( { suffix: '.min' } ) )
// 		.pipe( gulp.dest( options.css.destination ) )
// 		.pipe( plugins.size({title: 'styles'}) )
// });
