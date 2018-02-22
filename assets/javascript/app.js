//select all the checkboxes and listened for event when check

//select all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

// listen for an event once click or change
// when check first one to be put in variable
// when check the second one and holding  shift need to know the last one click
let lastChecked;

function handleCheck(e) {
	//console.log(e);
	lastChecked = this;
	console.log(lastChecked);
	//check if the shift key down
	// and check that they are checking the box
	if (e.shiftKey && this.checked) {
		//loop over the checkbox 
		// and look for first one check then lastCheck
	}
};

// loop over each checkbox
// and listen for a click
// whgit en click to run handleCheck
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))