module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'jest',
    'unicorn',
  ],
  env: {
    'jest/globals': true,
  },
};
