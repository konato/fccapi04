'use strict';
var path = process.cwd();

var db = require(path + '/app/db/database.js'),
	urls = db.urls;

var imagesSearchApi = require(path + '/app/controllers/imagesSearchApi.server.js');

module.exports = function (app) {

	var imagesSearch = new imagesSearchApi();
	
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/latest/imagesearch/').get(imagesSearch.stats);
	
	app.route('/:term?').get(imagesSearch.searchImages);
	
	
};
