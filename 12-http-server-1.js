const http = require('http');

// we import the http module and in our example, we use the createServer
// method to start a server. as a parameter it expects a callback function
// and in there it is common to pass in two parameters called req - as in
// request of the user , or the incoming message  and res - as in response
// as in outgoing message with the requested data. u can call it also tik and
// tok but this wouldn't be helpful

const server = http.createServer((req, res) => {
	console.log(req);
	// req will be a giant object that we get back and that we can work with
	res.write('Welcome to our Homepage');
	res.end();
});

// setting up the listenting port
server.listen(5000);

// localhost:5000 , or 127.0.0.1:5000
