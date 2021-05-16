const os = require('os');
// we are using a build in module here so we don't write a path
// just os

// info about current user
const user = os.userInfo();

console.log(user);

// returns system run-time in secionds

console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOS);

// there are many more os modules, u can find them on the node homepage
// or the node documents
