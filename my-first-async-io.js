const fs = require('fs');
let file = process.argv[2];
fs.readFile(process.argv[2], function(err, callback) {
    if (err) {
        console.log('This is the error of ReadFile:', err)
    }
    let array = callback.toString().split('\n');
    let bufferLength = array.length - 1;
    console.log(bufferLength);
});
