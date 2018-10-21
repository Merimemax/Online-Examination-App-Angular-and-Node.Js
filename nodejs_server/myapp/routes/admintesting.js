var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const mongodbUri = 'mongodb://merih:me2am1@ds029630.mlab.com:29630/online_examination';

router.get('/', function (req, res, next) {
  mongoose.connect(mongodbUri)
  var conn = mongoose.connection;

  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', function () {
    console.log('connection created');
  });

  res.send('respond with a resource');
});


module.exports = router;
