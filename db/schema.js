// REQUIREMENTS
var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

mongoose.Promise  = global.Promise;

var BookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  pageCount: Number,
  status: {type: String, statusValues: ["Read/Keep", "Read/Donate", "In Progress", "Haven't Read", "Won't Read"]},
  created_at: Date,
  updated_at: Date
});

var UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password_digest: String,
  bookList: [BookSchema],
  created_at: Date,
  updated_at: Date
});

BookSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var BookModel = mongoose.model('Book', BookSchema);

module.exports = {
  User: UserModel,
  Book: BookModel
}
