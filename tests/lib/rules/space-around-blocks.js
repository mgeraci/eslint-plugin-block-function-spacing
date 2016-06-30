"use strict";

var rule = require("../../../lib/rules/space-around-blocks");
var RuleTester = require("eslint").RuleTester;
var Errors = require("../../../lib/errors");

var ruleTester = new RuleTester();

ruleTester.run("space-before-blocks", rule, {
	valid: [
		"\nvar a = 1;\n\nif (true) { console.log('whatever') } else { console.log('yeah') }\n\nvar b = 1;",
		"\n// preceding comment is ok\nif (true) { console.log('whatever') } else { console.log('yeah') }\n\nvar b = 1;",
		"\nvar a = 1;\n\nswitch(dog) { case 'pit bull': console.log('sweet dog, dawg'); break; }\n\nvar b = 1;",
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
		},

		{
			code: "\nvar a = 1;\nswitch(dog) { case 'pit bull': console.log('sweet dog, dawg'); break; }",
			errors: [{
				message: Errors.blockBlank,
				type: "SwitchStatement"
			}]
		},
		{
			code: "\nswitch(dog) { case 'pit bull': console.log('sweet dog, dawg'); break; }\nvar a = 1;",
			errors: [{
				message: Errors.blockBlank,
				type: "SwitchStatement"
			}]
		},
	]
});
