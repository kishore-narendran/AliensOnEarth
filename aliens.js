var cliArgs = require("command-line-args");
var commandLineArgumets = require("./command-line-arguments");
 
/* Using the command line options from the command-line-arguments file */
var cli = cliArgs(commandLineArgumets);

/* parse the supplied command-line values */
var options = cli.parse();
    
console.log(options.pdf + " " + options.text);