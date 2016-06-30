"use strict";

var Errors = require("../errors");

var previousLineIsBlank = function(node) {
	var isValid = true;
	var functionStart = node.loc.start.line;
	var properties = node.parent.properties;

	for (var i = 0; i < properties.length; i++) {
		var property = properties[i];
		var propertyEnd = property.loc.end.line;

		if (propertyEnd === functionStart - 1) {
			isValid = false;
		}
	}

	return isValid;
};

module.exports = function(context) {
	return {
		Property: function(node) {
			if (!node.value || (node.value && node.value.type != "FunctionExpression")) {
				return;
			}

			if (!previousLineIsBlank(node)) {
				context.report(node, Errors.functionPreceding);
			}
		}
	}
};

module.exports.schema = [];
