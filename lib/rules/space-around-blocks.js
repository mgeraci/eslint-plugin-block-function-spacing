"use strict";

var Errors = require("../errors");

var surroundingLinesAreBlank = function(node) {
	var isValid = true;
	var blockStart = node.loc.start.line;
	var blockEnd = node.loc.end.line;
	var tokens = node.parent.tokens || node.parent.body;

	if (!tokens || !tokens.length) {
		return isValid;
	}

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		var tokenStart = token.loc.start.line;
		var tokenEnd = token.loc.end.line;

		if (tokenEnd === blockStart - 1 || tokenStart === blockEnd + 1) {
			isValid = false;
		}
	}

	return isValid;
};

module.exports = function(context) {
	return {
		IfStatement: function(node) {
			if (!surroundingLinesAreBlank(node)) {
				context.report(node, Errors.blockBlank);
			}
		},

		SwitchStatement: function(node) {
			if (!surroundingLinesAreBlank(node)) {
				context.report(node, Errors.blockBlank);
			}
		}
	}
};

module.exports.schema = [];
