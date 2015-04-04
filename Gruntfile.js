'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
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
    coveralls: {
      options: {},
      default: {
        src: 'coverage/lcov.info'
      }
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-coveralls');

  // Default task.
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint', 'jasmine_node']);

};