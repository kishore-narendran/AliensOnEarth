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
    $ node aliens -t
##### Run the application and generate a PDF file
    $ node aliens -p


### Note about the generated output files:
##### All generated files will go to the output directory

    |-- aliens.js
    |-- command-line-arguments.js
    |--	generators
    |	|-- generate-pdf.js
    |	|-- generate-text.js
    |-- package.json
    |-- alien-parameters.js
    |-- output
    |   |-- ALL GENERATED FILES WILL APPEAR HERE!

### Instructions for writing plugins:

##### Adding support for new format generation plugin- 

1. Add `generate-<FORMAT NAME>.js` file in the `generators` directory
2. Write a function `var generate<FORMAT NAME> = function(alienDetails)`, for example - `var generatePdf = function(alienDetails)`
3. Export function using `module.exports = generate<FORMAT NAME>`, for example - `module.exports = generatePdf;`

For reference, [see this!](https://github.com/kishore-narendran/AliensOnEarth/blob/master/generators/generate-pdf.js)

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

##### Adding support for new command line arguments 

Add `{ name: "<FORMAT NAME>", type: Boolean, alias: "<SINGLE LETTER FORMAT DENOTION FOR COMMAND LINE>"}` to the `commandLineArguments` variable of the `command-line-arguments.js` file.

Example - `{ name: "pdf", type: Boolean, alias: "p"}`


### Adding more parameters for alien details:

Add the parameter as a string to the `alienParameters` array in the `alien-parameters.js` file
