'use strict';
var fs = require('fs');
var path = require('path');
var prompt = require('prompt');
var commandLineArguments = require('command-line-args');
var colors = require('colors/safe');

var moveGenerator = function(err, result) {
	if(err) {
		console.log(err);
		process.exit();
	}
	else {
		console.log('Generator added!'.green);
	}
};

var cli = commandLineArguments([
	{name: 'format', type: String, alias: 'f'},
	{name: 'plugin', type: String, alias: 'p'}
]);

var options = cli.parse();

if(!fs.existsSync(options.plugin)) {
	console.log('Plugin file not found!'.red);
	process.exit();
}

//Checking if the plugin file is a .js file
if(options.plugin.substring(options.plugin.lastIndexOf('.')) != '.js') {
	console.log('Generator file not a .js file!'.red);
	process.exit();
}

var filePath = path.join(__dirname, 'generators', 'generate-' + options.format + '.js');

//Checcking if the Generator exists
if(fs.existsSync(filePath)) {
	prompt.get(['Another file exists for this format, replace it? (Y/N)'], function(err, result) {
		if(err) {
			console.log(err);
			process.exit();
		}
		else if(result['Another file exists for this format, replace it? (Y/N)'] == 'Y'){
			fs.unlinkSync(filePath);
			fs.rename(options.plugin, filePath, moveGenerator);
		}
		else {
			console.log('Generator not added!'.red);
			process.exit();
		}
	});
}
else {
	fs.rename(options.plugin, filePath, moveGenerator);
}


