# Space Before Function Prop

Functions, when defined as the properties of a dictionary, must be preceded by
a line of whitespace.

## Rule Details

The following patterns are considered errors:

	var a = {
		foo(){},
		_bar(){},
	};


	Component = React.createClass({
		getInitialState() {},
		render() {},
	});

The following patterns are not considered errors:

	var a = {
		foo(){},

		_bar(){},
	};


	Component = React.createClass({
		getInitialState() {},

		render() {},
	});
