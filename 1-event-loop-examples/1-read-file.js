const { readFile } = require('fs');

console.log('started the first task');

// Check The File Path

readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(result);
	console.log('completed the first task');
});
console.log('starting the next task');

// you have to use npm run dev to run the script with nodemon
// we see that in our list of events in this code we start the first
// task and immediatly start the next task. The reason for this is
// that the readFile method we import from the fs module is
// asynchronous
// this task takes a lot longer than our other tasks so it gets
// ofloaded and we immediatly start the next task
