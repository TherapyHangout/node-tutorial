const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// many method in events
// we concentrate on on (listening for events)
// and emit (starting events)

customEmitter.on('response', () => {
	console.log(`data received`);
});
// we use the backticks for our console.log because
// the ticks in on and emit have to match

// we can have as many events as we like, that we listen to
customEmitter.on('response', () => {
	console.log(`some other logic applies here`);
});
customEmitter.on('response', (user, id) => {
	console.log(`This data came from: User: ${user}, with ID: ${id}`);
});

// the order matters - first we listen, then we emit
customEmitter.emit('response', 'john', 34);

// we can insert some arguments directly
// in the other on's  i didn't look for the arguments
// so i didn't pass them in, but my code worked anyway
