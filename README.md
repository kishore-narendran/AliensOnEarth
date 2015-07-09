# AliensOnEarth
A console application that accepts Alien details and exports the same into a file of a certain format. 

Please report any bugs or issues [here](https://github.com/kishore-narendran/AliensOnEarth/issues).

### Instructions for Installation:
##### Install [Node.js](https://nodejs.org/download/)
##### Install all dependencies
    $ npm install


### Instructions for Running the Application:
##### Run the application
    $ node aliens
##### Run the application and generate a text file
    $ node aliens --text
##### Run the application and generate a PDF file
    $ node aliens --pdf


### Note about the generated output files:
##### All generated files will go to the output directory

    |-- aliens.js
    |-- command-line-arguments.js
    |-- update-command-line-arguments.js
    |--	generators
    |	|-- generate-pdf.js
    |	|-- generate-text.js
    |-- package.json
    |-- alien-parameters.js
    |-- output
    |   |-- ALL GENERATED FILES WILL APPEAR HERE!

### Instructions for writing plugins:

##### Writing new format generation plugin file- 

1. Create a `<PLUGIN FILE NAME>.js` file
2. Write a function `var generate<FORMAT NAME> = function(alienDetails)`, for example - `var generatePdf = function(alienDetails)`
2. Export function using `module.exports = generate<FORMAT NAME>`, for example - `module.exports = generatePdf;`

For reference, [see this!](https://github.com/kishore-narendran/AliensOnEarth/blob/master/generators/generate-pdf.js)

For reference,
alienDetails - is a JSON Array parameter that contains all the alien details that have been accepted by the console application
An example, is as shown below

```
alienDetails: [
	{
		"Code Name": "Jar Jar Binks",
		"Blood Colour": "red",
		"Number of Antennas": "2",
		"Number of Legs": "2",
		"Home Planet": "Naboo"
	},
	{
		"Code Name": "Jaba the Hutt",
		"Blood Colour": "green",
		"Number of Antennas": "0",
		"Number of Legs": "2",
		"Home Planet": "Tattooine"
	}
]
```

##### Adding the generator for use- 
	$ node add-generator.js -f <FORMAT NAME> -p <FULL PATH TO PLUGIN FILE>

##### Once a format generation plugin has been added using the `add-generator.js` file, the corresponding command line argument to generate that format at runtime is `--<FORMAT NAME>`. As an example, for the generator `generator-pdf.js`, the command line argument is `--pdf`


### Adding more parameters for alien details:

Add the parameter as a string to the `alienParameters` array in the `alien-parameters.js` file
