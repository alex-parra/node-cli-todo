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

  commands:
    list              ${chalk.yellow('used to list your todos')}
    new               ${chalk.yellow('used to create a new todo')}
    complete {id}     ${chalk.yellow('used to mark a todo as complete')}
    help              ${chalk.yellow('used to print the usage guide')}
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
