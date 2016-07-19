var express = require('express');
var app = express();

var self = this;

module.exports = {
	app: function(clock) {
		     self.clock = clock;
		     return app;
	     }
}
