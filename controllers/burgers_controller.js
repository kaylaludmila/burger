var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var eat = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	eat.selectAll(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

// router.post('/cats/create', function(req,res) {
// 	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function(data){
// 		res.redirect('/cats')
// 	});
// });

// router.put('/cats/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	cat.update({'sleepy' : req.body.sleepy}, condition, function(data){
// 		res.redirect('/cats');
// 	});
// });

// router.delete('/cats/delete/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	cat.delete(condition, function(data){
// 		res.redirect('/cats');
// 	});
// });

module.exports = router;