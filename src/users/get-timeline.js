function getTimeline(posts, formatter) {
	return {
		execute: function(username) {
			return posts.byUsername(username)
				.sort((p1, p2) => p1.date < p2.date)
				.map(p => formatter.format(p));
		}
	}
}

module.exports = getTimeline
