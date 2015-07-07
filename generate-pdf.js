'use strict';
var PDFDocument = require('pdfkit');
var fs = require('fs');
var path = require('path');

var generatePdf = function(alienDetails) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = '';
	for(var i = 0; i < alienDetailsLength; i++) {
		var alienDetail = alienDetails[i];
		allAlienDetailsStr += '\n';
		allAlienDetailsStr += (alienDetail.codeName + ' ' + alienDetail.bloodColour + ' ' + alienDetail.noOfAntennas + ' ' + alienDetail.noOfLegs + ' ' + alienDetail.homePlanet);
	}
	var doc = new PDFDocument();
	doc.pipe(fs.createWriteStream(path.join(__dirname, 'output', 'alien-details.pdf')));
	doc.text(allAlienDetailsStr);
	doc.end();
	console.log('PDF file generated!');

};

module.exports = generatePdf;