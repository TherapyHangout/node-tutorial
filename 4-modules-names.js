// Modules Names (Our Variables)

// local Variables

const secret = 'SUPER SECRET';

// global Variables
const john = 'john';
const peter = 'peter';

console.log(module);
// We can run a module like this jsut to see what info we get

// Module {
// id: '.',
// path: 'C:\\Users\\BasTion\\Desktop\\Tutorial Node',
// exports: {},
// parent: null,
// filename: 'C:\\Users\\BasTion\\Desktop\\Tutorial Node\\4-modules-names.js',
// loaded: false,
// children: [],
// paths: [
//   'C:\\Users\\BasTion\\Desktop\\Tutorial Node\\node_modules',
//   'C:\\Users\\BasTion\\Desktop\\node_modules',
//   'C:\\Users\\BasTion\\node_modules',
//   'C:\\Users\\node_modules',
//   'C:\\node_modules'
// ]

// we get the above Object - in this file we will use the export property to //
// dertermine which variables are used at a global scale and which are just
// used locally

module.exports = { john, peter };

// we export the variables as an object, cause we have multiple. Can also be done
// differetly
