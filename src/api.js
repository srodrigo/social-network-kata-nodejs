var express = require('express');
var bodyParser = require('body-parser');
var postMessage = require('./users/post-message');
var posts = require('./users/posts/posts');

function api(clock) {
	var app = express();
	app.use(bodyParser.json());

	var postMessage2 = postMessage(posts(clock));

	app.post('/users/:username/post', function(req, res) {
		postMessage2.execute(req.params.username, req.body.message);
	})

	return {
		app: app
	}
}

module.exports = api
