var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AdminSchema = new Schema({
	'firstname' : String,
	'lastname' : String,
	'email' : String,
	'username' : String,
	'password' : String
});

module.exports = mongoose.model('Admin', AdminSchema);
