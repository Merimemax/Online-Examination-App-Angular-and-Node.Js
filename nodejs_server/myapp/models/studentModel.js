var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var studentSchema = new Schema({
	'fristname' : String,
	'lastname' : String,
	'email' : String,
	'status' : String,
	'isAnswered' : Boolean,
	'result' : Boolean
});

module.exports = mongoose.model('student', studentSchema);
