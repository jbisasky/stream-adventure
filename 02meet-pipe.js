/* http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
* fs -> file system
*/
var fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
