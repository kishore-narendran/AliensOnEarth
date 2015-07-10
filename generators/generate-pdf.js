'use strict';
var PDFDocument = require('pdfkit');
var fs = require('fs');
var path = require('path');
var colors = require('colors/safe');
var alienParameters = Object.keys(require(path.join(__dirname, '..', 'alien-details')));


var generatePdf = function(alienDetails, numberOfAliens) {

	var alienDetailsLength = alienDetails.length;
	var allAlienDetailsStr = '';
	for(var i = 0; i < numberOfAliens; i++) {
		for(var j = 0; j < alienParameters.length; j++) {
			allAlienDetailsStr += alienDetails[alienParameters[j]][i] + ' ';
		}
		allAlienDetailsStr += '\n';
	}
	var doc = new PDFDocument();
	doc.pipe(fs.createWriteStream(path.join(__dirname, '..', 'output', 'alien-details.pdf')));
	doc.text(allAlienDetailsStr);
	doc.end();
	console.log('PDF file generated!'.cyan);

};

module.exports = generatePdf;