module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/unicorn',
  ],
  plugins: ['jest', 'unicorn'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'import/prefer-default-export': false,
  },
};
