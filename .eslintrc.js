module.exports = {
  extends: 'airbnb-base',
  plugins: ['import', 'mocha'],
  env: {
    commonjs: true,
    node: true,
    mocha: true
  },
  rules: {
    'arrow-parens': 0,
    'prefer-const': 0,
    'no-unused-expressions': 0
  }
};
