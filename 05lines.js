'use strict';
var split = require('split'); // split input by newlines
var through = require('through2');
var count = 0;

var tr = through(function (buf, enc, callback) {
  var line = buf.toString();
  this.push(count % 2 === 0
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'
  );
  count++;
  callback();
});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
