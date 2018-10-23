var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var examSchema = new Schema({
	'title': String,
	'question': String,
	'examnumber': Number
});

module.exports = mongoose.model('exam', examSchema);
