const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');

const sequences = ['docs', 'blog'];

const generators = fs
  .readdirSync(`${__dirname}/generators`)
  .filter(f => !f.startsWith('.'))
  .sort((previous, next) =>
    sequences.indexOf(previous) > sequences.indexOf(next) ? 1 : -1
  )
  .map(f => {
    return {
      name: `${f.padEnd(15)} - ${chalk.gray(
        require(`./generators/${f}/meta.json`).description
      )}`,
      value: f,
      short: f
    };
  });

const runGenerator = (
  generatorPath,
  { name = '', cwd = process.cwd(), args = {} }
) => {
  return new Promise(resolve => {
    if (name) {
      mkdirp.sync(name);
      cwd = path.join(cwd, name);
    }

    const Generator = require(generatorPath);
    const generator = new Generator({
      name,
      env: {
        cwd
      },
      resolved: require.resolve(generatorPath),
      args
    });

    return generator.run(() => {
      if (name) {
        if (process.platform !== `linux` || process.env.DISPLAY) {
          clipboardy.writeSync(`cd ${name}`);
          console.log('📋 Copied to clipboard, just use Ctrl+V');
        }
      }

      console.log('✨ File Generate Done');
      resolve(true);
    });
  });
};

const run = config => {
  return inquirer
    .prompt([
      {
        name: 'type',
        message: 'Select the boilerplate type',
        type: 'list',
        choices: generators
      }
    ])
    .then(answers => {
      return runGenerator(`./generators/${answers.type}`, config);
    })
    .catch(error => {
      console.error(chalk.red(`> Generate failed`), error);
      process.exit(1);
    });
};

module.exports = run;
