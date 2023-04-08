"use strict";

//ready event handler
$(document).ready(() => {

	//will be used to validate the email address
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	//will be used to validate phone number
	const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

	//will be used to validate date
	const dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

	//moves the focus to the “Arrival date” text box
	$('#arrival_date').focus();

	//submit event of reservation form
	$('#reservation_form').submit(function (e) {

		// Flag to track if all entries are valid
		let isValid = true;

		// Get the form and the values of the input fields
		const form = $('#reservation_form');

		// retrives values from each field and trim it to remove white spaces
		const rDate = $('#arrival_date').val().trim();
		const nights = $('#nights').val().trim();
		const name = $('#name').val().trim();
		const email = $('#email').val().trim();
		const phone = $('#phone').val().trim();

		// Validate reservation date
		if (rDate == '') {
			$('#arrival_date').next().text('This field is required.');
			isValid = false;
		} else if (!dateformat.test(rDate)) {
			$('#arrival_date').next().text('Date must be in valid format. (e.g. MM/DD/YYYY)');
			isValid = false;
		} else {
			//if passess the validation return to valid state
			$('#arrival_date').next().html('&#10004;').addClass('valid');
		}

		//check if nights is numeric
		if (nights == '') {
			$('#nights').next().text('This field is required.');
			isValid = false;
		} else if (isNaN(nights)) {
			$('#nights').next().text('Must be numeric.');
			isValid = false;
		} else {
			//if passess the validation return to valid state
			$('#nights').next().html('&#10004;').addClass('valid');
		}

		//checks if name is entered
		if (name == '') {
			$('#name').next().text('This field is required.');
			isValid = false;
		} else {
			//if passess the validation return to valid state
			$('#name').next().html('&#10004;').addClass('valid');
		}

		//checks if email matches with the pattern
		if (email == '') {
			$('#email').next().text('This field is required.');
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$('#email').next().text('Must be valid email address.');
			isValid = false;
		} else {
			//if passess the validation return to valid state
			$('#email').next().html('&#10004;').addClass('valid');
		}

		//checks if phone matches with the pattern
		if (phone == '') {
			$('#phone').next().text('This field is required.');
			isValid = false;
		} else if (!phonePattern.test(phone)) {
			$('#phone').next().text('Must be a valid input. (e.g. 123-456-7890).');
			isValid = false;
		} else {
			//if passess the validation return to valid state
			$('#phone').next().html('&#10004;').addClass('valid');
		}

		//put the entries back into the controls
		$('#arrival_date').val(rDate);
		$('#nights').val(nights);
		$('#name').val(name);
		$('#email').val(email);
		$('#phone').val(phone);
		
		//checks all the entries correct
		if (!isValid) {
			// Prevent the form from submit if any entry is Invalid
			e.preventDefault();

		}
	});
}); // end ready