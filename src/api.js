var express = require('express');
var bodyParser = require('body-parser');
var PostMessage = require('./users/post-message');
var GetTimeline = require('./users/get-timeline');
var Posts = require('./users/posts/posts');
var TimelineFormatter = require('./users/posts/timeline-formatter');

function api(clock) {
	var app = express();
	app.use(bodyParser.json());

	var posts = Posts(clock)
	var postMessage = PostMessage(posts);
	var timelineFormatter = TimelineFormatter(clock);
	var getTimeline = GetTimeline(posts, timelineFormatter);

	app.post('/users/:username/post', function(req, res) {
		postMessage.execute(req.params.username, req.body.message);
	});

	app.get('/users/:username/timeline', function(req, res) {
		var timeline = getTimeline.execute(req.params.username);

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(timeline));
	});

	return {
		app: app
	}
}

module.exports = api
