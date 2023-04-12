const fs = require('fs');

const reaStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// event listener
// reaStream.on('data', (chunk) => {
//     console.log('----------------- NEW CHUNK -----------------');
//     console.log(chunk); 
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk)
// });

// piping
reaStream.pipe(writeStream);
