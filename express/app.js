const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://Santiago:test1234@nodejs-learning.6olpu.mongodb.net/<dbname>?retryWrites=true&w=majority';

//Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'THE NAME OF MY VIEWS'); --------> To set a different folder as default for views

// Listen for requests
app.listen(3000);

// Middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// app.use((req, res, next) => {
//    console.log('New request made');
//    console.log('Host: ', req.hostname);
//    console.log('Path: ', req.path);
//    console.log('Method: ', req.method);
//    next();
// });

app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   // res.sendFile('./views/index.html', { root: __dirname });
   const blogs = [
      { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
      { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
      { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
   ]
   res.render('index', { title: 'Home', blogs });
});

// app.use((req, res, next) => {
//    console.log('In the next middleware');
//    next();
// });

app.get('/about', (req, res) => {
   // res.send('<p>About Page</p>');
   // res.sendFile('./views/about.html', { root: __dirname });
   res.render('about', { title: 'about' });
});

app.get('/blogs/create', (req, res) => {
   res.render('create', { title: 'Create' });
});

// Redirect
// app.get('/about-us', (req, res) => {
//    res.redirect('/about')
// });

// 404 page
app.use((req, res) => {
   // res.status(404).sendFile('./views/404.html', { root: __dirname });
   res.status(404).render('404', { title: '404' })
})

// Adding some changes to not lose github streak