// REQUIREMENTS
var express         = require('express');
var router          = express.Router();
var Book            = require('../models/book.js');
var User            = require('../models/user.js');
var authHelpers  = require('../helpers/auth.js');


// EXPORTS
module.exports = router;
