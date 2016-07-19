var self = this;

var execute = function(username, message) {
	self.posts.create(message, username);
}

module.exports = {
	createPostMessage: function(posts) {
		self.posts = posts;
		return self;
	},
	execute: execute
}
