function getTimeline(posts) {
	return {
		execute: function(username) {
			posts.byUsername(username);
		}
	}
}

module.exports = getTimeline
