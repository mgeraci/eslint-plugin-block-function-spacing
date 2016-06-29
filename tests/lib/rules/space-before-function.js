"use strict";

var rule = require("../../../lib/rules/space-before-function");
var RuleTester = require("eslint").RuleTester;
var Errors = require("../../../errors");

var ruleTester = new RuleTester();

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

ruleTester.run("space-before-function", rule, {
	valid: [
		{
			code: "var a = {\nfoo(){},\n\n_bar(){},\n};",
			parserOptions: parserOptions,
		},
		{
			code: "\nvar Component = React.createClass({\ngetInitialState() {},\n\nrender() {}\n});",
			parserOptions: parserOptions,
		},
	],

	invalid: [
		{
			code: "\nvar a = {\nfoo(){},\n_bar(){},\n};",
			parserOptions: parserOptions,
			errors: [{
				message: Errors.functionPreceding,
				type: "FunctionDeclaration"
			}]
		},
		{
			code: "\nComponent = React.createClass({\ngetInitialState() {},\nrender() {}\n});",
			parserOptions: parserOptions,
			errors: [{
				message: Errors.functionPreceding,
				type: "FunctionDeclaration"
			}]
		},
	]
});
