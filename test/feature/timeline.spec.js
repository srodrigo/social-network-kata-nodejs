var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;
var clock = require('./../infra/test-clock');
var minutesAgo = clock.minutesAgo;
var constNow = clock.constNow;

var api = require('./../../src/api');
var app = api.app(clock);

describe('Timeline', function() {
	it('should show user\'s timeline', function(done) {
		clock.append(minutesAgo(5), minutesAgo(2), minutesAgo(1));

		request(app)
			.post('/users/alice/post')
			.set('Accept', 'application/json')
			.send({'message': 'I love the weather today'});

		request(app)
			.post('/users/bob/post')
			.set('Accept', 'application/json')
			.send({'message': 'Damn! We lost!'});
		
		request(app)
			.post('/users/bob/post')
			.set('Accept', 'application/json')
			.send({'message': 'Good game though.'});

		clock.append(constNow(), constNow(), constNow());

		request(app)
			.get('/users/alice/timeline')
			.set('Accept', 'application/json')
			.expect(200, ['I love the weather today (5 minutes ago)'], done);

		request(app)
			.get('/users/bob/timeline')
			.set('Accept', 'application/json')
			.expect(200, ['Good game though. (1 minute ago)', 'Damn! We lost! (2 minutes ago)'], done);
	});
});

