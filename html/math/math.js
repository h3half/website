function computeFunction() {
	// Get input from the form on the page
	var rawInput = document.getElementById('mainTB').value;

	// Get rid of spaces inside the input
	var noSpaces = rawInput.replaceAll(' ', '');

	// Add spaces between the math symbols inside the input
	spacedOut = noSpaces.replaceAll('+', ' + ');
	spacedOut = spacedOut.replaceAll('-', ' - ');
	spacedOut = spacedOut.replaceAll('*', ' * ');
	spacedOut = spacedOut.replaceAll('/', ' / ');

	// Find out how many values are actually inside the parsed string
	valueCount = (spacedOut.split(' ').length - 1) / 2 + sd1;
	console.log(valueCount);

	// Find out how many math operators are inside the parsed string
	operaterCount = valueCount - 1;

	// Get each value and put those values in an array
	
	// Display the result on the screen
	document.getElementById('answerSpace').innerHTML = spacedOut;
}

// Adds the "replaceAll" function to string types, same as the regular "replace" function but acts on all occurances in the string instead of just the first one
String.prototype.replaceAll = function(target, replacement) {
	return this.split(target).join(replacement);
};
