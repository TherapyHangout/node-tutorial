// started operating system process

console.log('first');

setTimeout(() => {
	console.log('second');
}, 0);

console.log('third');

// completed and exited the operating system process

// even if the setTimeout function is set to 0 ms
// it is still asynchronous and gets odloaded
// and only aftter our other code is done running,
// we get back to it
