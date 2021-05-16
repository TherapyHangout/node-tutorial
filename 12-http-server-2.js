const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to our Homepage');
	} else if (req.url === '/about') {
		res.end('This is our History so far.');
	} else {
		res.end(`
  <h1>Whoopsie!!!</h1>
  <p>The thing u are looking for exists only in a parallel universe.</p>
  <a href="/">Back Home</a>
  `);
	}
});

// setting up the listenting port
server.listen(5000);

// localhost:5000 , or 127.0.0.1:5000

// so we see that we can pass in our response directly into our res.end()
// we even can pass in html directly
// from this huge ass object we get back in our request, we are only interessted
// in the requested url and send our response accordingly, this is still a very
// simple example and will get more complex in the future
