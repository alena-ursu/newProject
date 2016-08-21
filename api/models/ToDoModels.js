var mongoose = require('mongoose');

var TaskShema = new mongoose.ToDoShema({
	name: String,
	updated_at: {
		type: Date,
		default: Date.now
	}
}, {collection: "todos"});

module.exports = mongoose.model('Task', ToDoShema);
