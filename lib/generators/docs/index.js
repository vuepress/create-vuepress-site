const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'name',
        message: `What's the name of your project?`,
        default: this.name
      },
      {
        name: 'description',
        message: `What's the description of your project?`
      },
      {
        name: 'mail',
        message: `What's your email?`
      },
      {
        name: 'author',
        message: `What's your name?`
      },
      {
        name: 'repo',
        message: `What's the repo of your project?`
      }
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFiles({
      context: this.prompts,
      filterFiles: () => {
        return true;
      }
    });
  }
}

module.exports = Generator;
