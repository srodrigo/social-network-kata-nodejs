var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var Posts = require('./../../../../src/infra/users/posts/posts');
var clock = require('./../../../infra/test-clock');
var constNow = clock.constNow;

describe('Posts', function() {
	it('should store posts', function() {
		var posts = Posts(clock);
		var date = constNow();
		clock.append(date);

		posts.create('Post message', 'username');

		var allPosts = posts.all();
		allPosts.length.should.equal(1);
		allPosts[0].should.eql({message: 'Post message', username: 'username', date: date});
	});

	it('should retrieve posts by username', function() {
		var posts = Posts(clock);
		var firstDate = constNow();
		var secondDate = constNow();
		clock.append(firstDate, secondDate);
		posts.create('Post message', 'username');
		posts.create('Another post message', 'another-username');

		var byUsername = posts.byUsername('username');

		byUsername.length.should.equal(1);
		byUsername[0].should.eql({message: 'Post message', username: 'username', date: firstDate});
	});
});

