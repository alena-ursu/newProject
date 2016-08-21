var express  = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var UserModel = require('../models/UserModel.js');

var router = express.Router();

	router.post('/', function(req, res, next){

		passport.authenticate('local-login', function(err, user, info){

 	//handle authentication error
 	if(err){
 		res.status(500).json({
 			'message': 'User login failed.',
 			'error': '13234'
 		});
 	}

 		//write a new token
 	var token = jwt.sign(user, 'ilovemtlcollege', {
 		//expiresIn :1440 //expires in 24 hrs
 	});

 		//handle authentication success
 		res.status(200).json({
 			'message': 'User successfully logget in.',
 			'token': token,
 			'id': user._id,
 			'firstName': user.local.firstName,
 			'lastName': user.local.lastName
 		});
 		
	})(req, res, next);
	
});

module.exports = router;


//router.get('/', function(req, res, next) {
  //res.render('login', { title: 'login page' });
//});

//router.post('/', function(req, res, next){
	//passport.authenticate('local-login', function(err, user, info){
	//handle auth error
//		if (err) {
//		res.status(500).json({
//		 		'messasge': 'User login failed.',
//		 		'error': '13234'
	//	}
		//wrte a new token
//		var token = jwt.sign(user, 'ilovemtlcollege', {
//		 	expiresIn: 1440 //expires in 24 hrs
//		});

		//handle authentification success
//		res.status(200).json({
//			'message': 'User successfully logged in.',
			//'token': token,
//			'token': 'some token',
//			'id': 'some id',
//			'firstName': 'Test',
//			'lastName': 'Test',

//			'id': user._id,
//			'firstName': user.local.firstName,
//			'lastName': user.local.lastName
//		});
	




//var express  = require('express');
//var mongoose = require('mongoose');
//var passport = require('passport');

//var UserModel = require('../models/UserModel.js');

//var router = express.Router();

//first arg == string, second arg == MW
//router.post('/', passport.authenticate('local-login', {
//	'successRedirect': 'login/success',
//	'failureRedirect': 'http://localhost:3000//failure'


//



