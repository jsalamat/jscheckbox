//select all the checkboxes and listened for event when check

//select all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

// listen for an event once click or change
function handleCheck(e) {
	console.log(e);
};

// loop over each checkbox
// and listen for a click
// when click to run handleCheck
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))