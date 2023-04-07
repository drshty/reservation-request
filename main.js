"use strict";

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

		let rDate = $('#arrival_date').val();
		let nights = $('#nights').val();
		let name = $('#name').val();
		let email = $('#email').val();
		let phone = $('#phone').val();


		// Validate each input field
		if (rDate == '') {
			$('#arrival_date').next().text('This field is required.');
			isValid = false;
		} else if (!dateformat.test(rDate)) {
			$('#arrival_date').next().text('Date must be in valid format. (e.g. MM/DD/YYYY)');
			isValid = false;
		} else {
			rDate = $('#arrival_date').val().trim();
			$('#arrival_date').next().text('*');
		}

		if (nights == '') {
			$('#nights').next().text('This field is required.');
			isValid = false;
		} else if (isNaN(nights)) {
			$('#nights').next().text('Must be numeric.');
			isValid = false;
		} else {
			nights = $('#nights').val().trim();
			$('#nights').next().text('*');
		}

		if (name == '') {
			$('#name').next().text('This field is required.');
			isValid = false;
		} else {
			name = $('#name').val().trim();
			$('#name').next().text('*');
		}

		if (email == '') {
			$('#email').next().text('This field is required.');
			isValid = false;
		} else if (!emailPattern.test(email)) {                              //checks if email matches with the pattern
			$('#email').next().text('Must be valid email address.');
			isValid = false;
		} else {
			email = $('#email').val().trim();
			$('#email').next().text('*');
		}

		if (phone == '') {
			$('#phone').next().text('This field is required.');
			isValid = false;
		} else if (!phonePattern.test(phone)) {                              //checks if phone matches with the pattern
			$('#phone').next().text('Must be a valid input. (e.g. 123-456-7890).');
			isValid = false;
		} else {
			phone = $('#phone').val().trim();
			$('#phone').next().text('*');
		}

		//checks all the entries correct
		if (!isValid) {
			// Prevent the form from submit if all entries are Invalid
			e.preventDefault();

			//put the entries back into the controls
			$('#arrival_date').val(rDate);
			$('#nights').val(nights);
			$('#name').val(name);
			$('#email').val(email);
			$('#phone').val(phone);
		}

	});
}); // end ready