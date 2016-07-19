var express = require('express');
var bodyParser = require('body-parser');
var PostMessage = require('./users/post-message');
var GetTimeline = require('./users/get-timeline');
var Posts = require('./users/posts/posts');

function api(clock) {
	var app = express();
	app.use(bodyParser.json());

	var posts = Posts(clock)
	var postMessage = PostMessage(posts);
	var getTimeline = GetTimeline(posts);

	app.post('/users/:username/post', function(req, res) {
		postMessage.execute(req.params.username, req.body.message);
	});

	app.get('/users/:username/timeline', function(req, res) {
		getTimeline.execute(req.params.username);
	});

	return {
		app: app
	}
}

module.exports = api
