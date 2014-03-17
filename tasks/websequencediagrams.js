/*
 * grunt-websequencediagrams
 * https://github.com/markbirbeck/grunt-websequencediagrams
 *
 * Copyright (c) 2014 Mark Birbeck
 * Licensed under the MIT license.
 */

'use strict';

var wsd = require('websequencediagrams');
var fs = require('fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('websequencediagrams', 'Grunt plugin to allow UML sequence diagrams to be created, using WebSequenceDiagram.com.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      outputType: 'png',
      style: 'modern-blue'
    });

    // Get a handle to the "done" function.
    var done = this.async();

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

      wsd.diagram(
        src,
        options.style,
        options.outputType,
        function(err, buf/*, typ*/){
          if (err){
            console.error(err);
            done(false);
          } else {
            // Write the destination file.
            grunt.file.write(f.dest, buf);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
            done(true);
          }
        });
    });
  });

};
