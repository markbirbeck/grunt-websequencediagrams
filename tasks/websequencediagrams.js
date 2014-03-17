/*
 * grunt-websequencediagrams
 * https://github.com/markbirbeck/grunt-websequencediagrams
 *
 * Copyright (c) 2014 Mark Birbeck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('websequencediagrams', 'Grunt plugin to allow UML sequence diagrams to be created, using WebSequenceDiagram.com.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({ });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
