// REQUIREMENTS
var express         = require('express');
var router          = express.Router();
var Book            = require('../models/book.js');
var User            = require('../models/user.js');
var authHelpers     = require('../helpers/auth.js');

// Book Show
router.get('/', function(req, res) {
  console.log("Backend Book Show")
  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json({ currentUser: user });
      console.log(user);
    });
});

// Book Create
router.post('/', function(req, res) {
  console.log("Backend Book Create")
  User.findById(req.session.currentUser._id).exec()
    .then(function(user) {
      // console.log("looking for user");
      // console.log(user);
      var newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pageCount: req.body.pageCount,
        status: req.body.status
      });
      // console.log("After new book is entered");
      // console.log(newBook);
      user.bookList.push(newBook);
      // console.log("Checking to see if it pushed");
      // console.log(user.bookList);
      user.save()
      // console.log("Logging New Book");
      // console.log(newBook);
      // console.log("Logging User Object");
      // console.log(user);
      res.json({ user });
    })
    .catch(function(err) {
      res.json(err)
    });
});


// Book Update

// Book Delete


// EXPORTS
module.exports = router;
