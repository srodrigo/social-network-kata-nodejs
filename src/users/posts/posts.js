function posts(clock) {
	var posts = new Array();

	return {
		create: function(message, username) {
			posts.push({message: message, username: username, date: clock.now()});
		},
		all: function() {
			return posts.slice();
		},
		byUsername: function(username) {
			return posts.filter(p => p.username === username).slice();
		}
	}
}

module.exports = posts;
