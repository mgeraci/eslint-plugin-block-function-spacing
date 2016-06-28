"use strict";

var Errors = require("../../errors");

module.exports = function(context) {
	return {
		IfStatement: function(node) {
			var isValid = true;
			var blockStart = node.loc.start.line;
			var blockEnd = node.loc.end.line;
			var tokens = node.parent.tokens;

			for (var i = 0; i < tokens.length; i++) {
				var token = tokens[i];
				var tokenStart = token.loc.start.line;
				var tokenEnd = token.loc.end.line;

				if (tokenEnd === blockStart - 1 || tokenStart === blockEnd + 1) {
					isValid = false;
				}
			}

			if (!isValid) {
				context.report(node, Errors.blockBlank);
			}
		}
	}
}

module.schema = [];
