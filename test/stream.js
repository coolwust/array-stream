'use strict';

var assert = require('assert');
var ArrayStream = require('../lib/stream.js');

describe('ArrayStream', function () {
  it('Stream should be created and readable', function (done) {
    var arr = ['apple', 'orange', 'banana'];
    var stream = new ArrayStream(arr);
    stream.on('readable', function () {
      var chunk;
      while ((chunk = stream.read()) !== null) {
        assert(typeof chunk === 'string');
      }
    });
    stream.on('end', function () {
      assert.equal(arr.length, 0);
      done();
    });
  });
});
