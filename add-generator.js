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

var checkIfFileExists = function(plugin) {
	if(!fs.existsSync(plugin)) {
		console.log('Plugin file not found!'.red);
		return false;
	}
	return true;
};

var checkIfPluginValid = function(plugin) {
	if(options.plugin.substring(options.plugin.lastIndexOf('.')) != '.js') {
		console.log('Generator file not a .js file!'.red);
		return false;
	}
	return true;
};

var checkIfGeneratorExistsAndAdd = function(format, plugin) {
	var filePath = path.join(__dirname, 'generators', 'generate-' + format + '.js');
	//Checking if the Generator exists
	if(fs.existsSync(filePath)) {
		prompt.get(['Another generator exists for this format, replace it? (Y/N)'], function(err, result) {
			if(err) {
				console.log(err);
				process.exit();
			}
			else if(result['Another generator exists for this format, replace it? (Y/N)'] == 'Y'){
				fs.unlinkSync(filePath);
				fs.rename(plugin, filePath, moveGenerator);
			}
			else {
				console.log('Generator not added!'.red);
				process.exit();
			}
		});
	}
	else {
		fs.rename(plugin, filePath, moveGenerator);
	}
};

var cli = commandLineArguments([
	{name: 'format', type: String, alias: 'f'},
	{name: 'plugin', type: String, alias: 'p'}
]);

var options = cli.parse();

if(checkIfFileExists(options.plugin) && checkIfPluginValid(options.plugin)) {
	checkIfGeneratorExistsAndAdd(options.format, options.plugin);
}






