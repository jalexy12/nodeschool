var fs = require('fs');
// var file = fs.readFileSync(process.argv[2]);
// var bufferedfile = file.toString();
// var splitBufferedFile = bufferedfile.split('\n');
// var count = splitBufferedFile.length - 1;

function readFile(callback){
		var file = fs.readFile(process.argv[2], function doneReading(err, fileContents){
		var bufferedFile = fileContents.toString().split('\n');
		var count = bufferedFile.length - 1;
		countIt(count)
	});
}

function countIt(number){
	console.log(number);
}

readFile();


