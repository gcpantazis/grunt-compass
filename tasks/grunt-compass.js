module.exports = function( grunt ) {

    // Create a new multi task.
    grunt.registerMultiTask( 'compass', 'This triggers the `compass compile` command.', function() {

        var exec = require('child_process').exec,
            command = "compass compile",
            src = this.data.src,
            dest = this.data.dest,
            outputstyle = this.data.outputstyle,
            linecomments = this.data.linecomments;

        if ( src !== undefined && dest !== undefined ) {
            command += ' --sass-dir="' + src + '" --css-dir="' + dest + '"';
        }

        if ( outputstyle !== undefined ) {
            command += ' --output-style ' + outputstyle;
        }

        if ( linecomments === false ) {
            command += ' --no-line-comments';
        }

        function puts( error, stdout, stderr ) {

            grunt.log.write( '\n\nCOMPASS output:\n' );
            grunt.log.write( stdout );
            grunt.log.error( stderr );

            if ( error !== null ) {
                grunt.log.error( error );
            }
        }

        exec( command, puts );
        grunt.log.write( '`' + command + '` was initiated.' );
    });
};