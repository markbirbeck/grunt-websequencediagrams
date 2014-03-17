/*
 * grunt-websequencediagrams
 * https://github.com/markbirbeck/grunt-websequencediagrams
 *
 * Copyright (c) 2014 Mark Birbeck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    websequencediagrams: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default.png': ['test/fixtures/sequence.uml'],
        },
      },
      style_napkin_options: {
        options: {
          style: 'napkin'
        },
        files: {
          'tmp/default-napkin.png': ['test/fixtures/sequence.uml'],
        },
      },
      outputType_svg_options: {
        options: {
          outputType: 'svg'
        },
        files: {
          'tmp/default.svg': ['test/fixtures/sequence.uml'],
        },
      },
      outputType_pdf_options: {
        options: {
          outputType: 'pdf'
        },
        files: {
          'tmp/default.pdf': ['test/fixtures/sequence.uml'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'websequencediagrams', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
