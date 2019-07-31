const chalk = require('chalk');

const { ask } = require('./utils');
const Todos = require('./todosModel');

exports.new = () => {
  const q = chalk.blue('Type in your todo\n');
  ask(q).then(todo => {
    Todos.create({ title: todo, complete: false });
  });
};

exports.index = () => {
  Todos.all().forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.title} ${todo.complete ? chalk.green('✔') : chalk.red('-')}`);
  });
}

exports.complete = (index) => {
  Todos.update(index, {complete: true});
}
