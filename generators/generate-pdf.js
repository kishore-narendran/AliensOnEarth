'use strict';
var PDFDocument = require('pdfkit');
var fs = require('fs');
var path = require('path');
var colors = require("colors/safe");


var generatePdf = function(alienDetails) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = '';
	for(var i = 0; i < alienDetailsLength; i++) {
		var alienDetail = alienDetails[i];
		allAlienDetailsStr += '\n';
		allAlienDetailsStr += (alienDetail['Code Name'] + ' ' + alienDetail['Blood Colour'] + ' ' + alienDetail['Number of Antennas'] + ' ' + alienDetail['Number of Legs'] + ' ' + alienDetail['Home Planet']);
	}
	var doc = new PDFDocument();
	doc.pipe(fs.createWriteStream(path.join(__dirname, '..', 'output', 'alien-details.pdf')));
	doc.text(allAlienDetailsStr);
	doc.end();
	console.log('PDF file generated!'.cyan);

};

module.exports = generatePdf;