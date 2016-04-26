'use strict';
var concat = require('concat-stream');

var reverseText = function(buf) {
  console.log(buf.reverse().toString());
}

process.stdin.pipe(concat(reverseText));
