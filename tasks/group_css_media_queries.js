/*
 * grunt-group-css-media-queries
 * https://github.com/Se7enSky/grunt-group-css-media-queries
 *
 * Copyright (c) 2013 Ivan Kravchenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('group_css_media_queries', 'Grunt task for grouping CSS media queries. Useful for postprocessing preprocessed CSS files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      // ...
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var data = f.src.filter(function(filepath) {
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
      }).join();

      // Process with group-css-media-queries
      data = require("group-css-media-queries")(data);

      // Write the destination file.
      grunt.file.write(f.dest, data);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
