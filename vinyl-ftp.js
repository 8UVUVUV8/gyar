var fs = require( 'vinyl-fs' );
var ftp = require( 'vinyl-ftp' );
 
var conn = new ftp( {
    host: 'ftpupload.net',
    user: 'epiz_33705804',
    password: '...............',
    parallel: 10,
    secure: true,
    secureOptions: {rejectUnauthorized: false}
});
 
fs.src( [ './dist/**' ], { buffer: false } )
    .pipe( conn.dest( '/htdocs' ) );