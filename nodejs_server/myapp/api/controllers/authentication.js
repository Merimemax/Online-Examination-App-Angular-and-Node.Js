var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var studentModel = require('../../models/studentModel.js');
var jwt = require('jwt-simple');
var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function (req, res) {
  

  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function (err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });

};

module.exports.login = function (req, res) {
  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function (err, user, info) {
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};



module.exports.examlink = function (req, res) {
    
 console.log(id);
 studentModel.findOne({ email: id }, function (err, student) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting student.',
                error: err
            });
        }
        if (student) {
       
var payload = { email: id };
var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')
var token = jwt.encode(payload, secret);
return res.json({
  token : token,
   student: student.toJSON()
});

       
        }
       
    });





  // passport.authenticate('local', function (err, user, info) {
  //   var token;

  //   // If Passport throws/catches an error
  //   if (err) {
  //     res.status(404).json(err);
  //     return;
  //   }

  //   // If a user is found
  //   if (user) {
  //     token = user.generateJwt();
  //     res.status(200);
  //     res.json({
  //       "token": token
  //     });
  //   } else {
  //     // If user is not found
  //     res.status(401).json(info);
  //   }
  // })(req, res);

};