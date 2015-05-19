'use strict';

var Readable = require('stream').Readable;

function ArrayStream(arr) {
  Readable.call(this, { objectMode: true });
  this.arr = arr;
}

function _read(size) {
  while (true) {
    if (this.arr.length === 0) {
      this.push(null);
      break;
    } else {
      if (!this.push(this.arr.shift())) break;
    }
  }
}

var properties = {
  constructor: {
    value: ArrayStream,
    writable: true,
    configurable: true,
    enumerable: false
  }
}
ArrayStream.prototype = Object.create(Readable.prototype, properties);
ArrayStream.prototype._read = _read;
module.exports = ArrayStream;
