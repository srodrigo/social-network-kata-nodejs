function postMessage(posts) {
	return {
		execute: function(username, message) {
			posts.create(message, username);
		}
	}
}

module.exports = postMessage
