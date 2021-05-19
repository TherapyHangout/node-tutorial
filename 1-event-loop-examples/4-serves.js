const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request event');
	res.end('Hello World');
});

server.listen(5000, () => {
	console.log('Server listening on port: 5000....');
});

// the listen method is an asychronous process, so
// this process doesn't end, it stays alive until
// we kill it or it gets killed by an error

// we start the server and every time it gets a new request
// by refreshing the page (127.0.0.1:5000, or loacalhost:5000)
// or loading the page for the first time, it runs the code and
// logs request event in the console
