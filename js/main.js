function askQuestions() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('how old are you?');
	age = parseInt(age);

	if (age >=18) {
		console.log('User is an adult');
		} else if (age >=13) {
			console.log('User is a teenager')
		} else {
			console.log('User is a child');
		}

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log('Greetings General!')
		} else {
		console.log('wah wah')
		}

	var faveColour = prompt('What is your favourite colour?').toLowerCase().trim();

	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow') {

		$('h1').css('color', faveColour);
	}

}

/*This is a JS
block comment */
//this is a single line comment (both same as CSS)

//When the page has loaded/dom has been created, then execute this script

$(function() {

	$('img').on('click', askQuestions);

	//When the user clicks an h3 (recipe is called .on)
	$('h3').on('click', function() {

		// Toggle the next element
		$(this).next().slideToggle();

	});

});