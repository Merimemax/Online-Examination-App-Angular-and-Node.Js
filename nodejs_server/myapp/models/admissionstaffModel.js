var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var admissionstaffSchema = new Schema({
	'fristname' : String,
	'lastname' : String,
	'email' : String,
	'username' : String,
	'password' : String,
	'hiredate' : Date
});

module.exports = mongoose.model('admissionstaff', admissionstaffSchema);
