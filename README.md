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
    |-- generate-pdf.js
    |-- generate-text.js
    |-- package.json
    |-- output
    |   |-- ALL GENERATED FILES WILL APPEAR HERE!

### Instructions for writing plugins:

##### Adding support for new command line arguments 

Add `{ name: "<FORMAT NAME HERE>", type: Boolean, alias: "<SINGLE LETTER FORMAT DENOTION FOR COMMAND LINE>"}` to the `commandLineArguments` variable of the `command-line-arguments.js` file.

Example - `{ name: "pdf", type: Boolean, alias: "p"}`

