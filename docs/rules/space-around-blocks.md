# Space Around Blocks

Blocks, like `if` and `case`, must be preceded by a line of whitespace.

## Rule Details

The following patterns are considered errors:

	var a = 1;
	if (true) {
		console.log('whatever');
	}


	if (true) {
		console.log('whatever');
	}
	var a = 1;


	var a = 1;
	switch(dog) {
		case 'pit bull':
			console.log('sweet dog, dawg');
			break;
	}


	switch(dog) {
		case 'pit bull':
			console.log('sweet dog, dawg');
			break;
	}
	var a = 1;

The following patterns are not considered errors:

	var a = 1;

	if (true) {
		console.log('whatever');
	}


	if (true) {
		console.log('whatever');
	}

	var a = 1;


	var a = 1;

	switch(dog) {
		case 'pit bull':
			console.log('sweet dog, dawg');
			break;
	}


	switch(dog) {
		case 'pit bull':
			console.log('sweet dog, dawg');
			break;
	}

	var a = 1;
