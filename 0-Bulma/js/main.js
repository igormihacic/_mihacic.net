document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});

const displayModal = () => {
	// display the modal
	const modal = document.getElementById("thanks-modal");
	modal.classList.toggle("is-active");

	// add event listeners to close the modal 2 buttons
	const thanksClose = document.querySelectorAll(".thanks-close");

	thanksClose.forEach((element) => {
		element.addEventListener("click", () => {
			modal.classList.toggle("is-active");
			location.href = url.origin + "/#contact";
		});
	});
};

const url = new URL(window.location.href);
if (url.hash === "#thanks") {
	displayModal();
}

const myUrl = url.origin + "/#thanks";

// document.getElementById("_next").setAttribute(value, myUrl);
document.getElementById("_next").value = myUrl;
