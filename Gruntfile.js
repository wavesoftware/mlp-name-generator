'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['spec/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'jasmine_node']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'jasmine_node']
      },
    },
    jasmine_node: {
      options: {
        coverage: {},
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        captureExceptions: true,
        showColors: true,
        specNameMatcher: 'spec'
      },
      src: ['**/*.js']
    },
    coveralls: {
      options: {
        // LCOV coverage file relevant to every target
        src: 'coverage/lcov.info',

        // When true, grunt-coveralls will only print a warning rather than
        // an error, to prevent CI builds from failing unnecessarily (e.g. if
        // coveralls.io is down). Optional, defaults to false.
        force: false
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-coveralls');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine_node']);

};