const NOW = 1000000;
const MILLIS_IN_SECOND = 1000;
const MILLIS_IN_MINUTE = 60 * MILLIS_IN_SECOND;

var dates = new Array();

var now = function() {
	return dates.shift();
}

var append = function() {
	for (var i = 0; i < arguments.length; i++) {
		dates.push(arguments[i]);
	}
}

var minutesAgo = function (minutes) {
	return NOW - minutes * MILLIS_IN_MINUTE;
}

var constNow = function() {
	return NOW;
}

module.exports = {
	now: now,
	append: append,
	minutesAgo: minutesAgo,
	constNow: constNow
}
