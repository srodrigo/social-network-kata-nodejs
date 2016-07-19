
function posts(clock) {
	var posts = new Array();

	return {
		create: function(message, username) {
			posts.push({message: message, username: username});
			console.log(posts);
		},
		all: function all() {
			return posts.slice();
		}
	}
}

module.exports = posts;