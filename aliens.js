'use strict';
var path = require('path');
var fs = require('fs');
var cliArgs = require('command-line-args');
var commandLineArguments = require(path.join(__dirname, 'command-line-arguments')).commandLineArguments;
var alienParameters = require(path.join(__dirname, 'alien-parameters'));
var updateCommandLineArguments = require(path.join(__dirname, 'update-command-line-arguments'));
var prompt = require('prompt');
var colors = require('colors/safe');

updateCommandLineArguments();

/* Using the command line options from the command-line-arguments file */
var cli = cliArgs(commandLineArguments);

/* Parsing command-line values */
var options = cli.parse();

/* Creating output folder */
var stats = fs.lstatSync(path.join(__dirname, 'output'));
if (!(stats.isDirectory())) {
	fs.mkdirSync(path.join(__dirname, 'output'));
}

prompt.start();
var alienDetails = [];

var exportDetails = function() {
	for(var i = 0; i < commandLineArguments.length; i++) {
		var argumentName = commandLineArguments[i].name;
		if(options[argumentName] == true) {
			var exportFunction = require(path.join(__dirname, 'generators', 'generate-'+argumentName));
			exportFunction(alienDetails);
		}
	} 
};

var acceptAlienDetails = function(err, result) {
	if(err) {
		console.log(err);
		process.exit();
	}
	else {
		alienDetails.push(result);
		console.log('Enter '.blue + 'Y'.yellow + ' to add another alien\'s details'.blue);
		prompt.get(['continue'], startOrContinue);
	}
};

var startOrContinue = function(err, result, firstFlag) {
	if(result.continue == 'Y' || firstFlag) {
		prompt.get(alienParameters, acceptAlienDetails);
	}
	else if(err){
		console.log(err);
		process.exit();
	}
	else {
		console.log('Thank you for entering the alien details!'.green);
		exportDetails();
	}
};

console.log('************************************************'.red);
console.log('*******      Enter Alien Details         *******'.red);
console.log('************************************************'.red +  '\n\n');
startOrContinue(null, {}, true);
