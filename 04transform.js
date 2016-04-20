// Convert data from 'process.stdin' to upper-case data on 'process.stdout'
// using the 'through2' module

// A transform stream takes input data and applies an operation to
// the data to produce the output data.
var through = require('through2');

// Example: Create a through stream with a 'write' and 'end' function
//var stream = through(write, end);

// // The write function is called for every buffer of available input:
// function write (buffer, encoding, next) {
//   // call this.push() to produce output data and call next() when ready to receive
//   // the next chunk
//   this.push('I got some data: ' + buffer + '\n');
//   next();
// }
//
// // and the 'end' function is called when there is no more data
// function end () {
//   // call done() to finish the output
//   done();
// }

// if write is not specified, the default implementation passes the input data
// to the output unmodified

// End example:

var tr = through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

process.stdin.pipe(tr).pipe(process.stdout);
