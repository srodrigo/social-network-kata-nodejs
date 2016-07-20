const MILLIS_IN_MINUTE = 60 * 1000;

function timelineFormatter(clock) {
	function formatInSeconds(milliseconds) {
		var seconds = milliseconds / 1000;
		if (seconds == 1) {
			return "1 second ago";
		}
		return seconds + " seconds ago";
	}

	function formatInMinutes(milliseconds) {
		var minutes = milliseconds / MILLIS_IN_MINUTE;
		if (minutes == 1) {
			return "1 minute ago";
		}
		return minutes + " minutes ago";
	}

	function formatDate(date) {
		var diff = clock.now() - date;
		if (diff <  MILLIS_IN_MINUTE) {
			return formatInSeconds(diff);
		}
		return formatInMinutes(diff);
	}

	return {
		format: function(post) {
			return post.message + " (" + formatDate(post.date) + ")";
		}
	}
}

module.exports = timelineFormatter
