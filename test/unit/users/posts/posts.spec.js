var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var Posts = require('./../../../../src/users/posts/posts');
var clock = require('./../../../infra/test-clock');

describe('Posts', function() {
	it('should store posts', function() {
		var posts = Posts(clock);
		posts.create('Post message', 'username');

		var allPosts = posts.all();
		allPosts.length.should.equal(1);
		allPosts[0].should.eql({message: 'Post message', username: 'username'});
	});

	it('should retrieve posts by username', function() {
		var posts = Posts(clock);
		posts.create('Post message', 'username');
		posts.create('Another post message', 'another-username');

		var byUsername = posts.byUsername('username');
		byUsername.length.should.equal(1);
		byUsername[0].should.eql({message: 'Post message', username: 'username'});
	});
});

