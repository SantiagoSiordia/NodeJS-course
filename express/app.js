const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://Santiago:test1234@nodejs-learning.6olpu.mongodb.net/NodeJS?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((result) => app.listen(3000) /* Listen for requests in port 3000*/)
   .catch((e) => console.log(e));

//Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'THE NAME OF MY VIEWS'); --------> To set a different folder as default for views

// Middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// Mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//    const blog = new Blog({
//       title: 'New blog 2',
//       snippet: 'About my new blog',
//       body: 'More about my new blog'
//    });
//    blog.save()
//       .then((result) => {
//          res.send(result);
//       }).catch(e => console.log(e));
// });

// app.get('/all-blogs', (req, res) => {
//    Blog.find()
//       .then((result) => {
//          res.send(result);
//       }).catch(e => console.log(e));
// })

// app.get('/single-blog', (req, res) => {
//    Blog.findById("5f3b3c4d6589744ecc6f442e")
//       .then((result) => {
//          res.send(result);
//       }).catch(e => console.log(e));
// })

// Routes

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

   // const blogs = [
   //    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
   //    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
   //    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicin' },
   // ]
   // res.render('index', { title: 'Home', blogs });

   res.redirect('/blogs');
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

// Blog routes
app.use('/blogs', blogRoutes);

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