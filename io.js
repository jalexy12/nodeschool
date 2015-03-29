var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var bufferedfile = file.toString();
var splitBufferedFile = bufferedfile.split('\n');
var count = splitBufferedFile.length - 1;

console.log(count);