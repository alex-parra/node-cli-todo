const chalk = require('chalk');
const rl = require('readline');

exports.logError = error => {
  const eLog = chalk.red(error);
  console.log(eLog);
};

exports.printHelp = () => {
  const usageText = `
  ${chalk.green('todo helps you manage you todo tasks.')}

  usage:
    todo <command>

    commands can be:

    new:      used to create a new todo
    get:      used to retrieve your todos
    complete: used to mark a todo as complete
    help:     used to print the usage guide
  `;

  console.log(usageText);
};

exports.ask = question => {
  const r = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
  return new Promise((resolve, error) => {
    r.question(question, answer => {
      r.close();
      resolve(answer);
    });
  });
};
