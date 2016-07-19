
function posts(clock) {
	var posts = new Array();

	return {
		create: function(message, username) {
			posts.push({message: message, username: username});
		},
		all: function all() {
			return posts.slice();
		}
	}
}

module.exports = posts;
