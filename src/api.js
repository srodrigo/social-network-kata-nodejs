var express = require('express');
var bodyParser = require('body-parser');
var postMessage = require('./users/post-message');
var posts = require('./users/posts/posts');

var app = express();
app.use(bodyParser.json());

var self = this;

app.post('/users/:username/post', function(req, res) {
	self.postMessage.execute(req.params.username, req.body.message);
})

module.exports = {
	app: function(clock) {
		self.postMessage = postMessage.createPostMessage(posts(clock));
		return app;
	}
}
