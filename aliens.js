'use strict';
var path = require('path');
var fs = require('fs');
var cliArgs = require('command-line-args');
var commandLineArguments = require(path.join(__dirname, 'command-line-arguments')).commandLineArguments;
var alienDetails = require(path.join(__dirname, 'alien-details'));
var alienParameters = Object.keys(alienDetails);
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

var numberOfAliens = 0;
prompt.start();

var exportDetails = function() {
	for(var i = 0; i < commandLineArguments.length; i++) {
		var argumentName = commandLineArguments[i].name;
		if(options[argumentName] == true) {
			var exportFunction = require(path.join(__dirname, 'generators', 'generate-'+argumentName));
			exportFunction(alienDetails, numberOfAliens);
		}
	} 
};

var acceptAlienDetails = function(err, result) {
	if(err) {
		console.log(err);
		process.exit();
	}
	else {
		numberOfAliens++;
		for(var i = 0; i < alienParameters.length; i++) {
			alienDetails[alienParameters[i]].push(result[alienParameters[i]]);
		}
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
