module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'lib/vjs-quality-picker.js',
                dest: 'debug/vjs-quality-picker.js'
            }
        },
        watch: {
            files: 'lib/vjs-quality-picker.js',
            tasks: ['browserify']
        }
    });
}
