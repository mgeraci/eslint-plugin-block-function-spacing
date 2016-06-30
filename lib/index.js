/**
 * @fileoverview eslint rules for spacing around blocks and functions
 * @author Michael P. Geraci
 */

"use strict";

module.exports.rules = {
  "space-around-blocks": require("./rules/space-around-blocks"),
  "space-before-function-props": require("./rules/space-before-function-props"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "space-around-blocks": 2,
			"space-before-function-props": 2,
    }
  }
};
