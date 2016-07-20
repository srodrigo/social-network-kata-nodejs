var express = require('express');
var bodyParser = require('body-parser');
var PostMessage = require('./actions/post-message');
var GetTimeline = require('./actions/get-timeline');
var Posts = require('./infra/users/posts/posts');
var TimelineFormatter = require('./model/users/posts/timeline-formatter');

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
