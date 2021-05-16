const path = require('path');

// equally to os we just write path and import it
// not the actual path

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
// the join method joins path segments, normalizes them and returns them as a string

console.log(filePath);

const base = path.basename(filePath);
console.log(base);
// shows the last portion of a path

const absolute = path.resolve(__dirname, 'content', 'content', 'test.txt');
console.log(absolute);
// gives u the exact path on ur system
// The path.resolve() method resolves a sequence of paths or path segments into an
// absolute path. it returns a string
