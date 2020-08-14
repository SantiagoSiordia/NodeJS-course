const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const { getegid } = require('process');

const server = http.createServer((req, res) => {

   //lodash
   const num = _.random(0, 20);
   console.log(num);

   const greet = _.once(() => {
      console.log('Hello');
   });

   greet();
   greet();


   // Set header content type
   res.setHeader('Content-Type', 'text/html');

   let path = './views/';
   switch (req.url) {
      case '/':
         path += 'index.html';
         res.statusCode = 200;
         break;
      case '/about':
         path += 'about.html';
         res.statusCode = 200;
         break;
      case '/about-us':
         res.statusCode = 301;
         res.setHeader('Location', '/about');
         res.end();
         break;
      default:
         path += '404.html';
         res.statusCode = 404;
         break;
   }

   // Send html file
   fs.readFile(path, (err, data) => {
      if (err) console.log(err);
      else {
         // res.write(data);
         res.end(data);
      }
   })

   // res.write('<head><link rel="stylesheet" href="#"/></head>');
   // res.write('<p>Hello world</p>');
   // res.write('<p>Hello again</p>');
   // res.end();
});

server.listen(3000, 'localhost', () => {
   console.log('Listening for requests on port 3000');
});