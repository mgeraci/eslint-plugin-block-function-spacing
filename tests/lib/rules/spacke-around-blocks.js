"use strict";

var rule = require("../../../lib/rules/space-around-blocks");
var RuleTester = require("eslint").RuleTester;
var Errors = require("../../../errors");

var ruleTester = new RuleTester();

ruleTester.run("space-before-blocks", rule, {
	valid: [
		"\nvar a = 1;\n\nif (true) { console.log('whatever') } else { console.log('yeah') }"
	],

	invalid: [
		{
			code: "\nvar a = 1;\nif (true) { console.log('whatever') }",
			errors: [{
				message: Errors.blockBlank,
				type: "IfStatement"
			}]
		},
		{
			code: "\nif (true) { console.log('whatever') }\nvar a = 1;",
			errors: [{
				message: Errors.blockBlank,
				type: "IfStatement"
			}]
		}
	]
});
