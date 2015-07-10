'use strict';
var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');
var alienParameters = Object.keys(require(path.join(__dirname, '..', 'alien-details')));

var generateText = function(alienDetails, numberOfAliens) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = "";
	for(var i = 0; i < numberOfAliens; i++) {
		for(var j = 0; j < alienParameters.length; j++) {
			allAlienDetailsStr += alienDetails[alienParameters[j]][i] + '\t'
		}
		allAlienDetailsStr += '\r\n';
	}
	fs.writeFile(path.join(__dirname, '..', 'output', 'alien-details.txt'), allAlienDetailsStr, function (err) {
		if (err) {
			throw err;
		}
		else {
			console.log('Text file generated!'.cyan);	
		}
	});
};

module.exports = generateText;