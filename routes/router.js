var express = require('express');
var router = express.Router();
var User = require('../model/userSchema');


router.get('/auth', function (req, res, next) {
  console.log('someone knok in "/"');
});


router.post('/auth', function (req, res, next) {
  let user = req.body;
  console.log('someone knok in post"/auth"');
  console.log(user.password);
  console.log(user.username);
  // confirm that user typed same password twice
  if (user.password !== user.passwordConf) {
    console.log('Passwords do not match.');
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (user.email &&
    user.username &&
    user.password &&
    user.passwordConf) {

    var userData = {
      email: user.email,
      username: user.username,
      password: user.password,
      passwordConf: user.passwordConf,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {

        req.session.userId = user._id;
        return res.redirect('/');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
          console.log('xdvsdv');
        return next(err);
      } else {
        console.log('asc');
        req.session.userId = user._id;
        return res.send(user._id);
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

router.get('/logout', function (req, res, next) {
  console.log('in logout');
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
