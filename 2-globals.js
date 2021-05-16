// Gloabals (variables)  - No Window , cause no browser

//Some Global Variables

// __dirname - path to current directory
// __filename - file name
// require  - function to use modules (Common JS)
// module - info about current module (file)
// process - info about environment where the program is being executed

// Examples of uses of Global Variables
console.log(__dirname);

setInterval(() => {
	console.log(__filename);
}, 5000);
