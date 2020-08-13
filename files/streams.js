const fs = require('fs');

const readStream = fs.createReadStream('./files/docs/largeFile.txt', { encoding: 'utf8' });
const writeStrean = fs.createWriteStream('./files/docs/newLargeFile.txt');

// This Stream is piping the information from the readable largeFile to newLargeFile
// readStream.on('data', (chunk) => {
//    console.log('----------------------');
//    console.log(chunk);
//    writeStrean.write('\nNew Chunk\n');
//    writeStrean.write(chunk);
// })

// Actual piping (does sort of the same from above)
// This piping method doesn't write the New chunk message
readStream.pipe(writeStrean);