var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function (req, res) {
  let email;
  var jsonString = '';

  req.on('data', function (data) {
    jsonString += data;
  });
  req.on('end', function () {
    this.email = jsonString;
    console.log(jsonString);


    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abemel26@gmail.com',
        pass: 'belive1221'
      }
    });

    var mailOptions = {
      from: 'abemel26@gmail.com',
      to: this.email,
      subject: 'Sending Email using Node.js',
      text: `http://localhost:8000/api/takexam?email=${this.email}`
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });


})

module.exports = router;
