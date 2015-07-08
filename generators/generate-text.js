'use strict';
var fs = require('fs');
var path = require('path');
var colors = require("colors/safe");

var generateText = function(alienDetails) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = "";
	for(var i = 0; i < alienDetailsLength; i++) {
		var alienDetail = alienDetails[i];
		allAlienDetailsStr += "\n";
		allAlienDetailsStr += alienDetail.codeName + "\t" + alienDetail.bloodColour + "\t" + alienDetail.noOfAntennas + "\t" + alienDetail.noOfLegs + "\t" + alienDetail.homePlanet;
	}

	fs.writeFile(path.join(__dirname, '..', 'output', 'alient-details.txt'), allAlienDetailsStr, function (err) {
		if (err) {
			throw err;
		}
		else {
			console.log('Text file generated!'.cyan);	
		}
	});
};

module.exports = generateText;