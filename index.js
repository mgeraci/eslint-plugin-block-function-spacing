'use strict';

module.exports = {
  rules: {
    'space-around-blocks': require('./lib/rules/space-around-blocks'),
    'space-before-function-prop': require('./lib/rules/space-before-function-prop'),
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
				'space-around-blocks': 2,
				'space-before-function-prop': 2,
      }
    }
  }
};
