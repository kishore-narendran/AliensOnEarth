'use strict';
var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');
var alienParameters = require(path.join(__dirname, '..', 'alien-parameters'));

var generateText = function(alienDetails) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = "";
	for(var i = 0; i < alienDetailsLength; i++) {
		var alienDetail = alienDetails[i];
		for(var j = 0; j < alienParameters.length; j++) {
			allAlienDetailsStr += alienDetail[alienParameters[j]] + '\t'
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