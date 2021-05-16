const num1 = 5;
const num2 = 10;

function addValues() {
	console.log(`the sum is: ${num1 + num2}`);
}

addValues();

// this an simplistic example of how u just can import a module without storing it in
// a variable. u just import the module in ure app and use what it is programmed to do
// but it has to include a function and this function has to be invoked here,
// otherwise it doesn't work

// in ur app just add 'require('./7-modules-mind-grenade')' and ur good to go
