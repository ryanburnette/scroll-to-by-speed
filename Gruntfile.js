module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dist: ['src/**'],
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "laxcomma": true,
        "globals": {
          "jQuery": true
        },
        "browser": true,
        "devel": true
      }
    }

  , uglify: {
      dist: {
        files: {
          'scrolltobyspeed.jquery.js': ['src/scrolltobyspeed.jquery.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);
};
