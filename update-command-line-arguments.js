'use strict';
var fs = require('fs');
var path = require('path');
var commandLineArguments = require(path.join(__dirname, 'command-line-arguments')).commandLineArguments;

var updateGenerators = function() {
	var generators = fs.readdirSync(path.join(__dirname, 'generators'));
	for(var i = 0; i < generators.length; i++) {
		var generator = generators[i];
		var fileType = generator.substring(generator.indexOf('-') + 1, generator.indexOf('.'));
		commandLineArguments.push({name: fileType, type: Boolean, alias: fileType});
	}
};

module.exports = updateGenerators;
