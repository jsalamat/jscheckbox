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
	
	//check if the shift key down
	// and check that they are checking the box

	// create inBetween and loop over each checkbox
	// it will only be true on area that will be check
	// it will true on first one and then will be false on the lastCheck
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		// loop over every single checkbox 
		// and look for first one check then lastCheck
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log("Start to check them inbetween!");
			}

		});
	}
	lastChecked = this;
	//console.log(lastChecked);
};

// loop over each checkbox
// and listen for a click
// whgit en click to run handleCheck
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))