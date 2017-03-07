// PACKAGES
var express             = require('express');
var bodyParser          = require('body-parser');
var session             = require('express-session');
var logger              = require('morgan');
var mongoose            = require('mongoose');

// CONTROLLERS
var booksController     = require('./controllers/books.js');
var sessionsController  = require('./controllers/books.js');
var usersController     = require('./controllers/users.js');

// MIDDLEWARE
var app                 = express();

app.use(express.static('public'));

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/bookshelf-app'
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(session({
  secret: "dogesermahgerd",
  resave: true,
  maxAge: 24 * 60 * 60 * 1000,
  saveUninitialized: false
}));

app.use('/users/:id/books', booksController);
app.use('/sessions', sessionsController);
app.use('/users', usersController);

// LISTENERS
app.listen(process.env.PORT || 3000, function() {
  console.log("**********************");
  console.log("Server Initialized");
  console.log("Listening on Port 3000")
  console.log("**********************");
});
