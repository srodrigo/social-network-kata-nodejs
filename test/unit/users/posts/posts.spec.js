var chai = require('chai');
var expect = chai.expect;
var should = require('should');

var postsMod = require('./../../../../src/users/posts/posts');
var clock = require('./../../../infra/test-clock');

describe('Posts', function() {
	it('should store posts', function() {
		var posts = postsMod(clock);
		posts.create('Post message', 'username');

		var allPosts = posts.all();
		allPosts.length.should.equal(1);
		allPosts[0].should.eql({message: 'Post message', username: 'username'});
	});
});

