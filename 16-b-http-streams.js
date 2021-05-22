const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf8',
});

stream.on('data', (result) => {
	console.log(result);
});

stream.on('error', (err) => console.log(err));

// {/*<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65
// 6c 6c 6f 20 57 6f 72 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>
// <Buffer 57 6f 72 6c 64 20 33 39 32 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 31 0a 48 65
// 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 32 0a 48 65 6c 6c 6f ... 65486 more bytes>
// <Buffer 6f 72 6c 64 20 37 37 37 35 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 36 0a 48 65 6c
// 6c 6f 20 57 6f 72 6c 64 20 37 37 37 37 0a 48 65 6c 6c 6f 20 ... 65486 more bytes>
// <Buffer 39 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 31 35 34 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c
// 64 20 31 31 35 34 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 ... 65486 more bytes>
// <Buffer 31 38 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 35 31 38 31 0a 48 65 6c 6c 6f 20 57 6f
// 72 6c 64 20 31 35 31 38 32 0a 48 65 6c 6c 6f 20 57 6f 72 6c ... 65486 more bytes>
// <Buffer 31 38 38 32 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 38 38 32 32 0a 48 65 6c 6c 6f 20
// 57 6f 72 6c 64 20 31 38 38 32 33 0a 48 65 6c 6c 6f 20 57 6f ... 21160 more bytes> */}

// we see that if we use streams in node.js the it splits the
// handling of our file in ruffly 65 kb chunks until it
// finishes it - this is the default

// highWaterMark - enables us to control the buffer size
// we passed in 90000 as the size in bytes and our buffer
// chunk is ruffly 90 kb

// if you also pass in encoding: utf8 u get the full content of
// our file instead of the buffer
