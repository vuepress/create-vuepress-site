module.exports = {
  root: true,

  env: {
    node: true,
    es6: true
  },

  extends: ['plugin:prettier/recommended'],

  rules: {
    'no-undef': ['error']
  }
};
