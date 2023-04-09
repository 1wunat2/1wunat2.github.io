// Get the nav element
const nav = document.querySelector('nav');

// Get the list of links inside the nav element
const links = nav.querySelectorAll('a');

// Loop through each link and add a click event listener
links.forEach(link => {
	link.addEventListener('click', function() {
		// Remove the 'active' class from all links
		links.forEach(link => {
			link.classList.remove('active');
		});

		// Add the 'active' class to the clicked link
		this.classList.add('active');
	});
});