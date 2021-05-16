// Alternatiive ways to export stuff in Node to different Modules

// we usually set up an array like this

// const items = ['item1', 'item2']

// here we can combine it with the export like:
module.exports.items = ['item1', 'item2'];

const person = {
	name: 'bob',
};

// u can export the object person as person like module.exports.person or
// as a 'true rebel' we can use another variable to store our obect as:

module.exports.singlePerson = person;
