var orm = require('../config/orm.js');

var eat = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(result){
			cb(result);
		});
	},
	insertOne: function(req, cb) {
		orm.insertOne('burgers', 'burger_name', req, function(result){
			cb(result);
		});
	},
	updateOne: function(req, cb) {
		orm.updateOne('burgers','devoured', req, function(result){
			cb(result);
		});
	},
};

module.exports = eat;
