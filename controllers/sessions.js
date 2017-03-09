// REQUIREMENTS
var express         = require('express');
var router          = express.Router();
var User            = require('../models/user.js');
var authHelpers     = require('../helpers/auth.js');

// Login
router.post('/login', authHelpers.loginUser, function(req, res) {
  // console.log("User Logged In");
  // console.log(req.session.currentUser);
  res.json({ status: 200, data: req.session.currentUser});
});

// Logout
router.delete('/', function(req, res) {
  // console.log("User Logged Out");
  req.session.destroy(function() {
    res.json({ status: 204, message: "Session Destroyed" });
  });
});

// EXPORTS
module.exports = router;
