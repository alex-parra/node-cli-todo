const chalk = require('chalk');

const { ask } = require('./utils');
const Todos = require('./todosModel');

exports.new = () => {
  const q = chalk.blue('Type in your todo\n');
  ask(q).then(todo => {
    Todos.create({ title: todo, complete: false });
  });
};
