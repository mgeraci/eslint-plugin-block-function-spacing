'use strict';

module.exports = {
  rules: {
    'space-around-blocks': require('./lib/rules/space-around-blocks'),
    'space-before-function-props': require('./lib/rules/space-before-function-props'),
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
				'space-before-function-props': 2,
      }
    }
  }
};
