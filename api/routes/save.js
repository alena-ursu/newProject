var express  = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

var UserModel = require('../models/UserModel.js');

var router = express.Router();

router.post('/', passport.authenticate('local-signup', {
	'successRedirect': '/signup/success',
	'failureRedirect': '/signup/failure'
}))

router.get('/success', function(err, res, next){
	res.status(200).json({
		"message": "User created successfully!"
	});
});

router.get('/failure', function(err, res, next){
	res.status(500).json({
		"message": "User not created.",
		"errorCode": "12309" 
	});
});


module.exports = router;