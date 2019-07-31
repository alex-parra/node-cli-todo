const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// DB init
const adapter = new FileSync('./db.json');
const db = low(adapter);
db.defaults({ todos: [] }).write(); // Set some defaults (required if your JSON file is empty)

const todos = db.get('todos');

exports.create = todo => {
  todos.push(todo).write();
};