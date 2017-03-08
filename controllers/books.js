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
  User.findById(req.params.id).exec()
    .then(function(user) {
      var newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pageCount: req.body.pageCount,
        status: req.body.status
      });

      user.bookList.push(newBook);
      user.save();
      console.log(user);
      res.json({ user });
    });
});


// Book Update

// Book Delete


// EXPORTS
module.exports = router;
