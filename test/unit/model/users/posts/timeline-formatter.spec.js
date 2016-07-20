var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var TimelineFormatter = require('../../../../../src/model/users/posts/timeline-formatter');
var Post = require('../../../../../src/model/users/posts/post');
var clock = require('../../../../infra/test-clock');
var secondsAgo = clock.secondsAgo;
var constNow = clock.constNow;

describe('Timeline Formatter', function() {
	it('should format posts crated a one seconds ago', function() {
		clock.append(constNow());
		var timelineFormatter = TimelineFormatter(clock);

		var format = timelineFormatter.format(Post('Post message', 'username', secondsAgo(1)));

		format.should.eql('Post message (1 second ago)');
	});

	it('should format posts crated a few seconds ago', function() {
		clock.append(constNow());
		var timelineFormatter = TimelineFormatter(clock);

		var format = timelineFormatter.format(Post('Post message', 'username', secondsAgo(59)));

		format.should.eql('Post message (59 seconds ago)');
	});

	it('should format posts crated a one minute ago', function() {
		clock.append(constNow());
		var timelineFormatter = TimelineFormatter(clock);

		var format = timelineFormatter.format(Post('Post message', 'username', secondsAgo(100)));

		format.should.eql('Post message (1 minute ago)');
	});

	it('should format posts crated a few minutes ago', function() {
		clock.append(constNow());
		var timelineFormatter = TimelineFormatter(clock);

		var format = timelineFormatter.format(Post('Post message', 'username', secondsAgo(150)));

		format.should.eql('Post message (2 minutes ago)');
	});
});
