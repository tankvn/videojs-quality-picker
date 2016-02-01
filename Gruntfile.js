module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'lib/vjs-quality-picker.js',
                dest: 'debug/vjs-quality-picker.js',
                options:  {
                   transform: ['babelify'],
                   browserifyOptions: {
                       debug: true
                   },
                   watch: true,
                   keepAlive: true
               }
            }
        }
    });
};
