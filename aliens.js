var cliArgs = require("command-line-args");
var commandLineArgumets = require("./command-line-arguments");
var prompt = require("prompt");
var colors = require("colors/safe");
 
/* Using the command line options from the command-line-arguments file */
var cli = cliArgs(commandLineArgumets);

/* Parsing command-line values */
var options = cli.parse();

prompt.start();


var acceptAlienDetails = function(err, result) {
	if(err) {
		console.log(err);
		process.exit();
	}
	else {
		alienDetails.push(result);
		console.log("Enter ".blue + "Y".yellow + " to add another alien's details".blue);
		prompt.get(['continue'], checkContinue);
	}
}
var checkContinue = function(err, result) {
	if(err) {
		console.log(err);
		process.exit();
	}
	else if(result.continue == "Y"){
		prompt.get(['codeName', 'bloodColour', 'noOfAntennas', 'noOfLegs', 'homePlanet'], acceptAlienDetails);
	}
	else {
		console.log("Thank you for entering the alien details!");
		console.log(alienDetails);
	}
}

console.log("************************************************".red);
console.log("*******      Enter Alien Details         *******".red);
console.log("************************************************".red);
var alienDetails = [];
prompt.get(['codeName', 'bloodColour', 'noOfAntennas', 'noOfLegs', 'homePlanet'], acceptAlienDetails);
