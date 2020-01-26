module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'mocha', 'react', 'jsx-a11y'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    mocha: true,
  },
  rules: {
    'arrow-parens': 0,
    'prefer-const': 0,
    'no-unused-expressions': 0,
    'max-len': ['error', 120],
    'implicit-arrow-linebreak': 'off',
  },
};
