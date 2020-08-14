const express = require('express');

// express app
const app = express();

//Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'THE NAME OF MY VIEWS'); --------> To set a different folder as default for views

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   // res.sendFile('./views/index.html', { root: __dirname });
   res.render('index');
});

app.get('/about', (req, res) => {
   // res.send('<p>About Page</p>');
   // res.sendFile('./views/about.html', { root: __dirname });
   res.render('about');
});

app.get('/blogs/create', (req, res) => {
   res.render('create');
});

// Redirect
// app.get('/about-us', (req, res) => {
//    res.redirect('/about')
// });

// 404 page
app.use((req, res) => {
   // res.status(404).sendFile('./views/404.html', { root: __dirname });
   res.status(404).render('404')
})