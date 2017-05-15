const gulp  = require( 'gulp' );
const uncss = require('gulp-uncss');


// -----------------------------------------------
//   Options
// -----------------------------------------------

const options = {
    css : {
        file        : './www/src/styles/application.css',
        destination : './www/src/styles/',
    },
};


// -----------------------------------------------
//   Tasks
// -----------------------------------------------

gulp.task( 'uncss', function () {
    gulp.src( options.css.file )
        .pipe( uncss ( {
            html: [
                'www/index.html'
            ],
        } ) )
        .pipe( gulp.dest( options.css.destination ) )
});
