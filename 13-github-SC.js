// npm- global command, comes with node
// npm --version or npm--v

// local dependency - use it only in this particular project
// npm i <packageName> - installs the package locally

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// installs the package globaly for every project

// package.json - manifest file (stores important info about project/package)
// manual approach ( create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip and y for yes if necessary)
// npm init - y (say yes to everything by default)

const _ = require('lodash');

const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// u always have to install dependency packages before u can use them
// every external package, that is not included in node is a dependency
// it is common to use lodash with a variable called "_"
// just as an example we used an array with nested array as values  and
// used the flattendeep method to get back a new array

// just a test if source control works

// the reason why the package.json is important is if we usee the source
// control in github or others, we don't have to push all modules and
// dependencies with it to the server. We just need our code, cause
// if we or somebody else clones our repo to their machine, they can
// simply use the command npm install and through the info in our
// package.json every neccesary repo or dependency will be automagically
// installed and our code works
