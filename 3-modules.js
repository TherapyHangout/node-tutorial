// Modules - split up your code into different modules
// CommonJS, every file is a module (by default)
// Modules - Ecapsulated Code (only share mimimum)

const names = require('./4-modules-names');
// we import our exported variables from 4-modules-names.js by using require
// and the pathname and name of our file

// console.log(names);
// we see, that we only get the names we imported secret is local so it is not
// transmited here

const sayHi = require('./5-modules-utils');
// in the same way, we import our variables, we import our functions
const data = require('./6-modules-alt-flavr');
require('./7-modules-mind-grenade');
// this only works if a function is invoked in the file we import here
// otherwise we have to store it in a variable

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// we get an error if we jsut write the name john or peter
// we could also us {john, peter} instead of names in our import
