var express   = require('express');
var mongoose  = require('mongoose');

//var todos     = mongoose.model ('todos');

var Token     = require('../config/token');

var TaskModel = require('../models/TaskModel.js');

var router    = express.Router();



router.get('/:id', Token.verify, function(req, res, next){
	console.log("");
	console.log("=====================");
	console.log("GET request to todos/");

	console.log(req. params)

	console.log(req.params.id);


	TaskModel.find({ 
		'userId': req.params.id
	}, function(err, tasks){
		if(err){
			return next(err);
		} else {
			res.json(tasks);
		}
	});
});

router.post('/:id', Token.verify, function(req, res, next){
	console.log("");
	console.log("======================");
	console.log("POST request to todos/");
	console.log(req.body);

	var obj = req.body;
	obj['userId'] = req.params.id;



	TaskModel.create(obj, function(err, post) {

		if(err){
			return next(err);
		} else {

			console.log("Entry created, here's what it looks like:");
			console.log(post);
			
			res.json(post);
		}

	});
});

router.put('/:id', function(req, res, next){
	console.log("");
	console.log("======================");
	console.log("POST request to todos/");
	console.log(req.body);

	TaskModel.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err){
			return next(err);
		} else {

			console.log("Entry updated, here's what it used to look like:");
			console.log(post);

			res.json(post);
		}
	});
});

router.delete('/:id', function(req, res, next){
	console.log("");
	console.log("======================");
	console.log("delete request to todos/");
	console.log(req.body);

	TaskModel.findOneAndRemove({'_id': req.params.id}, req.body, function(err, post){
		if(err){
			return next(err);
		} else {
			console.log("Entry updated, here's what it used to look like:");
		
			res.json(post);
		}
	});
});



module.exports = router;