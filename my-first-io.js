const fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let bufferArray = buffer.toString().split('\n');
console.log(bufferArray.length - 1);