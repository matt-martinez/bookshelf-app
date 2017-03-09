// REQUIREMENTS
var express         = require('express');
var router          = express.Router();
var User            = require('../models/user.js');
var authHelpers     = require('../helpers/auth.js');

// User Index
router.get('/', function(req, res) {
  // console.log("Backend User Index");
  User.find({})
  .exec(function(err, users) {
    if (err) { console.log(err); }
    res.json({
      users: users,
      currentUser: req.session.currentUser
    })
  });

})

// Get Current User
router.get('/:id', authHelpers.authorize, function(req, res) {
  // console.log("Backend Get User");
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) { console.log(err); }
    res.json({ user });
    // console.log(user);
  })
})

// User Create
router.post('/', authHelpers.createSecure, function(req, res) {
  // console.log("Backend User Create")
  var user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password_digest: req.hashedPassword
  });

  user.save(function(err, user) {
    if (err) { console.log(err); }
    // console.log("New User Saved");
    // console.log(user);
    res.json({ status: 201, message: "User Created" });
  });

});

// EXPORTS
module.exports = router;
