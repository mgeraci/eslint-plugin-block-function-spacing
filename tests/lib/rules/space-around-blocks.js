"use strict";

var rule = require("../../../lib/rules/space-around-blocks");
var RuleTester = require("eslint").RuleTester;
var Errors = require("../../../lib/errors");

var ruleTester = new RuleTester();

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  },
	sourceType: "module"
};

ruleTester.run("space-before-blocks", rule, {
	valid: [
		"\nvar a = 1;\n\nif (true) { console.log('whatever') } else { console.log('yeah') }\n\nvar b = 1;",
		"\n// preceding comment is ok\nif (true) { console.log('whatever') } else { console.log('yeah') }\n\nvar b = 1;",
		"\nvar a = 1;\n\nswitch(dog) { case 'pit bull': console.log('sweet dog, dawg'); break; }\n\nvar b = 1;",
		{
			code: 'const LocationZipOrCity = React.createClass({\n\trender() {\n\t\tconst placeholder = locationCountry === "US" ?\n\t\t\t_str("Zip code") :\n\t\t\t_str("City");\n\n\t\tconst a = 1;\n\n\t\tif (placeholder === a) {\n\t\t\tconsole.log("oh fuck");\n\t\t}\n\n\t\treturn (\n\t\t\t<div className="settings-field-input">\n\t\t\t\tyo\n\t\t\t</div>\n\t\t);\n\t},\n});\n\nexport default LocationZipOrCity;\n',
			parserOptions: parserOptions
		},
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
			code: 'const LocationZipOrCity = React.createClass({\n\trender() {\n\t\tconst placeholder = locationCountry === "US" ?\n\t\t\t_str("Zip code") :\n\t\t\t_str("City");\n\n\t\tconst a = 1;\n\t\tif (placeholder === a) {\n\t\t\tconsole.log("oh fuck");\n\t\t}\n\n\t\treturn (\n\t\t\t<div className="settings-field-input">\n\t\t\t\tyo\n\t\t\t</div>\n\t\t);\n\t},\n});\n\nexport default LocationZipOrCity;\n',
			parserOptions: parserOptions,
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
