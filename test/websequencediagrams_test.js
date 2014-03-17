'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.websequencediagrams = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.png');
    var expected = grunt.file.read('test/expected/default.png');
    test.equal(actual, expected, 'should generate a PNG by default.');

    test.done();
  },
  style_napkin_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default-napkin.png');
    var expected = grunt.file.read('test/expected/default-napkin.png');
    test.equal(actual, expected, 'should generate a PNG using the \'napkin\' style.');

    test.done();
  },
  outputType_svg_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.svg');
    var expected = grunt.file.read('test/expected/default.svg');
    test.equal(actual, expected, 'should generate an SVG.');

    test.done();
  },
  outputType_pdf_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.pdf');
    var expected = grunt.file.read('test/expected/default.pdf');
    test.equal(actual, expected, 'should generate an PDF.');

    test.done();
  },
};
