const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.end('Welcome');
});

server.listen(5000);

// in the http module in the class server, we have the
// ability through event: 'request' to listen to
// an event and use the on method without having to
// import the events module. But we have to name it 'request'
// or our code doesn't work

// and our Event gets automagically emited
