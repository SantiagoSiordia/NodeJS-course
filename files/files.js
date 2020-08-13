const fs = require('fs');

// Reading files
fs.readFile('./files/docs/blog1.txt', (err, data) => {
   if (err) console.log(err)
   if (data) console.log(data.toString());
})

console.log('readFile is asyncronous')

// Writing files
fs.writeFile('./files/docs/blog2.txt', 'This is the changed text', () => {
   console.log('File was created');
});
fs.writeFile('./files/docs/blog3.txt', 'Hello dear', () => {
   console.log('File was created');
});

//Directories
if (!fs.existsSync('./files/assets')) {
   fs.mkdir('./files/assets', (err) => {
      if (err) console.log(err)
      else console.log('Folder created')
   });
} else {
   fs.rmdir('./files/assets', (err) => {
      if (err) console.log(err);
      else console.log('Folder deleted')
   })
}

//Delete files
if (fs.existsSync('./files/docs/deleteme.txt')) {
   fs.unlink('./files/docs/deleteme.txt', (err) => {
      if (err) console.log(err);
      else console.log('File deleted');
   });
}