(function () {
	"use strict";

	window.onload = function () {

		// Preloader JS
		const getPreloaderId = document.getElementById('preloader');
		if (getPreloaderId) {
			getPreloaderId.style.display = 'none';
		}

		// Header Sticky
		const getHeaderId = document.getElementById("header-area");
		if (getHeaderId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#header-area').classList.toggle('sticky', scrollTop >= height);
			});
		}
	};

	// Menu JS
	let menu, animate;

	(function () {
		// Initialize menu
		let layoutMenuEl = document.querySelectorAll('#layout-menu');
		layoutMenuEl.forEach(function (element) {
			menu = new Menu(element, {
				orientation: 'vertical',
				closeChildren: false
			});
			// Change parameter to true if you want scroll animation
			window.Helpers.scrollToActive((animate = false));
			window.Helpers.mainMenu = menu;
		});

	})();

	// Feather Icons
	feather.replace();

	//  Digital Date
	function updateDate() {
		var now = new Date();
		var date = now.getDate();
		var monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];
		var month = monthNames[now.getMonth()];
		var year = now.getFullYear();
		var digitalDate = document.getElementById("digitalDate");
		digitalDate.innerHTML = date + " " + month + " " + year;
	}
	setInterval(updateDate, 1000);

	// Header Burger Button
	const getHeaderBurgerMenuId = document.getElementById('header-burger-menu');
	if (getHeaderBurgerMenuId) {
		const switchtoggle = document.querySelector(".header-burger-menu");
		const savedTheme = localStorage.getItem("splash_sidebar");
		if (savedTheme) {
			document.body.setAttribute("sidebar-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
				localStorage.setItem("splash_sidebar", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
				localStorage.setItem("splash_sidebar", "sidebar-hide");
			}
		});
	}

	// Sidebar Burger Button
	const getSidebarBurgerMenuId = document.getElementById('sidebar-burger-menu');
	if (getSidebarBurgerMenuId) {
		const switchtoggle = document.querySelector(".sidebar-burger-menu");
		const savedTheme = localStorage.getItem("splash_sidebar");
		if (savedTheme) {
			document.body.setAttribute("sidebar-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
				localStorage.setItem("splash_sidebar", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
				localStorage.setItem("splash_sidebar", "sidebar-hide");
			}
		});
	}

	// Hover Active Background Color
	try {
		// Remove the "active" class from the current element and add it to the new element when hovered over
		var elements = document.querySelectorAll("[id^='my-element']");
		elements.forEach(function (element) {
			element.addEventListener("mouseover", function () {
				elements.forEach(function (el) {
					el.classList.remove("active");
				});
				element.classList.add("active");
			});
		});

	} catch (err) { }

	// Init BS Tooltip
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Keydown
	try {
		function execCommand(command) {
			document.execCommand(command, false, null);
			document.getElementById('editor').focus();
		}

		document.getElementById('editor').addEventListener('keydown', function (e) {
			if (e.key === 'Tab') {
				e.preventDefault();
				document.execCommand('insertText', false, '\t');
			}
		});
	} catch (err) { }

	// Clipboard
	new ClipboardJS('.copy-btn');

	// Popover
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

	// Drag & Drop
	sortable('.js-grid', {
		forcePlaceholderSize: true,
		placeholderClass: 'border'
	});
	sortable('.o-sortable', {
		forcePlaceholderSize: true,
		placeholderClass: 'border'
	});

	// Multiple Range Sliders
	try {
		// Single
		ionRangeSlider('.single-slider');
		document.querySelectorAll('.slider').forEach(function (slider) {
			ionRangeSlider(slider, {
				min: 0,
				max: 5000,
				prefix: "$",
				grid: true,
				grid_num: 5,
				step: 100,
			});
		});
	} catch (err) { }

	// Review Rating
	const ratings = document.querySelectorAll('.rating');
	ratings.forEach(rating => {
		rating.addEventListener('click', () => {
			// reset all ratings to default state
			ratings.forEach(rating => {
				rating.classList.remove('active');
			});

			// add active class to clicked rating and all previous ratings
			rating.classList.add('active');
			let prevRating = rating.previousElementSibling;
			while (prevRating) {
				prevRating.classList.add('active');
				prevRating = prevRating.previousElementSibling;
			}
		});
	});

	// ToastBtn JS
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}

	// Sweetalert JS
	try {
		document.getElementById("sweetalert_1").addEventListener("click", function (e) {
			Swal.fire("Good job!");
		});

		document.getElementById('sweetalert_2').addEventListener('click', function (e) {
			Swal.fire("Here's the title!", "...and here's the text!");
		});

		document.getElementById('sweetalert_3').addEventListener('click', function (e) {
			Swal.fire("Good job!", "You clicked the button!", "warning");
		});

		document.getElementById('sweetalert_4').addEventListener('click', function (e) {
			Swal.fire("Good job!", "You clicked the button!", "error");
		});

		document.getElementById('sweetalert_5').addEventListener('click', function (e) {
			Swal.fire("Good job!", "You clicked the button!", "success");
		});

		document.getElementById('sweetalert_6').addEventListener('click', function (e) {
			Swal.fire("Good job!", "You clicked the button!", "info");
		});

		document.getElementById('sweetalert_7').addEventListener('click', function (e) {
			Swal.fire("Good job!", "You clicked the button!", "question");
		});

		document.getElementById('sweetalert_8').addEventListener('click', function (e) {
			Swal.fire({
				title: "Good job!",
				text: "You clicked the button!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Confirm me!",
				customClass: {
					confirmButton: "btn btn-primary"
				}
			});
		});

		document.getElementById('sweetalert_9').addEventListener('click', function (e) {
			Swal.fire({
				title: "Good job!",
				text: "You clicked the button!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "<i class='la la-headphones'></i> I am game!",
				showCancelButton: true,
				cancelButtonText: "<i class='la la-thumbs-down'></i> No, thanks",
				customClass: {
					confirmButton: "btn btn-danger",
					cancelButton: "btn btn-default"
				}
			});
		});

		document.getElementById('sweetalert_10').addEventListener('click', function (e) {
			Swal.fire({
				position: "top-right",
				icon: "success",
				title: "Your work has been saved",
				showConfirmButton: false,
				timer: 1500
			});
		});

		document.getElementById('sweetalert_11').addEventListener('click', function (e) {
			Swal.fire({
				title: 'jQuery HTML example',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			});
		});

		document.getElementById('sweetalert_12').addEventListener('click', function (e) {
			Swal.fire({
				title: "Are you sure?",
				text: "You won to be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!"
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);
				}
			});
		});

		document.getElementById('sweetalert_13').addEventListener('click', function (e) {
			Swal.fire({
				title: "Are you sure?",
				text: "You won to be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!",
				cancelButtonText: "No, cancel!",
				reverseButtons: true
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);
				} else if (result.dismiss === "cancel") {
					Swal.fire(
						"Cancelled",
						"Your imaginary file is safe :)",
						"error"
					);
				}
			});
		});

		document.getElementById('sweetalert_14').addEventListener('click', function (e) {
			Swal.fire({
				title: "Sweet!",
				text: "Modal with a custom image.",
				imageUrl: "https://camo.envatousercontent.com/5b57b814db32f74f4ce750680390a407898cc665/68747470733a2f2f696d616765732e656e76797468656d652e636f6d2f72656163742d76657273696f6e2d617661696c61626c652e6a7067",
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Custom image",
				animation: false
			});
		});

		document.getElementById('sweetalert_15').addEventListener('click', function (e) {
			Swal.fire({
				title: "Auto close alert!",
				text: "I will close in 5 seconds.",
				timer: 5000,
				onOpen: function () {
					Swal.showLoading();
				}
			}).then(function (result) {
				if (result.dismiss === "timer") {
					console.log("I was closed by the timer");
				}
			});
		});
	} catch (err) { }


	// Password JS
	try {
		const passwordInput = document.getElementById("password");
		const passwordToggleIcon = document.querySelector(".password-toggle-icon");

		passwordToggleIcon.addEventListener("click", function () {
			if (passwordInput.type === "password") {
				passwordInput.type = "text";
				passwordToggleIcon.classList.remove("ri-eye-off-line");
				passwordToggleIcon.classList.add("ri-eye-line");
			} else {
				passwordInput.type = "password";
				passwordToggleIcon.classList.remove("ri-eye-line");
				passwordToggleIcon.classList.add("ri-eye-off-line");
			}
		});

	} catch { }

	// Tagss
	document.addEventListener('DOMContentLoaded', function () {
		const tagContainer = document.getElementById('tagContainer');
		const tagInput = document.getElementById('tagInput');
		if (tagInput) {
			tagInput.addEventListener('keydown', function (event) {
				if (event.key === 'Enter' && tagInput.value.trim() !== '') {
					createTag(tagInput.value.trim());
					tagInput.value = '';
				}
			});
		}
		function createTag(tagText) {
			const tag = document.createElement('div');
			tag.classList.add('tag');
			tag.innerHTML = `${tagText} <span class="tag-close">&#10006;</span>`;

			tag.querySelector('.tag-close').addEventListener('click', function () {
				tag.remove();
			});

			tagContainer.appendChild(tag);
		}
	});

	// Input JS
	try {
		var resultEl = document.querySelector(".resultSet"),
			plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
		for (var i = 0; i < plusMinusWidgets.length; i++) {
			plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
			plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
			plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
		}
		function clickHandler(event) {
			var countEl = event.target.parentNode.querySelector(".count");
			if (event.target.className.match(/\bminusBtn\b/)) {
				countEl.value = Number(countEl.value) - 1;
			}
			else if (event.target.className.match(/\bplusBtn\b/)) {
				countEl.value = Number(countEl.value) + 1;
			}
			triggerEvent(countEl, "change");
		};
		function changeHandler(event) {
			resultEl.value = 0;
			for (var i = 0; i < plusMinusWidgets.length; i++) {
				resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
			}
		};
		function triggerEvent(el, type) {
			if ('createEvent' in document) {
				var e = document.createEvent('HTMLEvents');
				e.initEvent(type, false, true);
				el.dispatchEvent(e);
			}
			else {
				var e = document.createEventObject();
				e.eventType = type;
				el.fireEvent('on' + e.eventType, e);
			}
		}
	} catch { }

	// From Validation
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(() => {
		'use strict'

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	})()

	// Quill Editor
	try {
		const getEditorId = document.getElementById('editor-container');
		if (getEditorId) {
			let quill = new Quill('#editor-container', {
				modules: {
					syntax: true,
					toolbar: '#toolbar-container'
				},
				placeholder: 'Write your message here',
				theme: 'snow'
			});
		}
		const getProductEditorId = document.getElementById('product-editor-container');
		if (getProductEditorId) {
			let quill = new Quill('#product-editor-container', {
				modules: {
					syntax: true,
					toolbar: '#toolbar-container'
				},
				theme: 'snow'
			});
		}
		const getMetaEditorId = document.getElementById('meta-editor-container');
		if (getMetaEditorId) {
			let quill = new Quill('#meta-editor-container', {
				modules: {
					syntax: true,
					toolbar: '#meta-toolbar-container'
				},
				theme: 'snow'
			});
		}
	} catch { }

	// myTable
	const getHeadersBurgerMenuId = document.getElementById('myTable');
	if (getHeadersBurgerMenuId) {
		let x = new RdataTB('myTable');
	}

	// Calendar JS
	try {
		const getHeaderssBurgerMenuId = document.getElementById('calendar-body');
		if (getHeaderssBurgerMenuId) {
			document.addEventListener('DOMContentLoaded', function () {
				updateCalendar(new Date());
			});

			function updateCalendar(date) {
				const calendarBody = document.getElementById('calendar-body');
				const monthYear = document.getElementById('month-year');

				// Clear existing content
				calendarBody.innerHTML = '';

				// Set the month and year
				const options = { month: 'long', year: 'numeric' };
				monthYear.textContent = date.toLocaleDateString('en-US', options);

				// Get the first day of the month
				const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
				const startingDay = firstDay.getDay();

				// Get the last day of the month
				const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
				const endingDay = lastDay.getDate();

				// Create calendar days
				let day = 1;
				for (let i = 0; i < 6; i++) {
					const row = document.createElement('tr');

					for (let j = 0; j < 7; j++) {
						if (i === 0 && j < startingDay) {
							const cell = document.createElement('td');
							row.appendChild(cell);
						} else if (day <= endingDay) {
							const cell = document.createElement('td');
							cell.textContent = day;

							// Highlight the active date
							if (day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
								cell.classList.add('active-date');
							}

							row.appendChild(cell);
							day++;
						}
					}

					calendarBody.appendChild(row);

					// Stop if all days are done
					if (day > endingDay) {
						break;
					}
				}
			}
		}
	} catch { }

	// Dark/Light Toggle
	const getSwitchToggleId = document.getElementById('switch-toggle');
	if (getSwitchToggleId) {
		const switchtoggle = document.querySelector(".switch-toggle");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("data-theme") === "dark") {
				document.body.setAttribute("data-theme", "light");
				localStorage.setItem("farol_theme", "light");
			} else {
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("farol_theme", "dark");
			}
		});
	}

	// Only Sidebar Light & Dark
	const getSidebarToggleId = document.getElementById('sidebar-light-dark');
	if (getSidebarToggleId) {
		const switchtoggle = document.querySelector(".sidebar-light-dark");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("sidebar-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-dark-light-data-theme") === "sidebar-dark") {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-light");
				localStorage.setItem("farol_theme", "sidebar-light");
			} else {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-dark");
				localStorage.setItem("farol_theme", "sidebar-dark");
			}
		});
	}

	// Only Header Light & Dark
	const getHeaderToggleId = document.getElementById('header-light-dark');
	if (getHeaderToggleId) {
		const switchtoggle = document.querySelector(".header-light-dark");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("header-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("header-dark-light-data-theme") === "header-dark") {
				document.body.setAttribute("header-dark-light-data-theme", "header-light");
				localStorage.setItem("farol_theme", "header-light");
			} else {
				document.body.setAttribute("header-dark-light-data-theme", "header-dark");
				localStorage.setItem("farol_theme", "header-dark");
			}
		});
	}

	// Only Footer Light & Dark
	const getFooterToggleId = document.getElementById('footer-light-dark');
	if (getFooterToggleId) {
		const switchtoggle = document.querySelector(".footer-light-dark");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("footer-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("footer-dark-light-data-theme") === "footer-dark") {
				document.body.setAttribute("footer-dark-light-data-theme", "footer-light");
				localStorage.setItem("farol_theme", "footer-light");
			} else {
				document.body.setAttribute("footer-dark-light-data-theme", "footer-dark");
				localStorage.setItem("farol_theme", "footer-dark");
			}
		});
	}

	// Only Card Radius & Square
	const getRadiusSquaresToggleId = document.getElementById('card-radius-square');
	if (getRadiusSquaresToggleId) {
		const switchtoggle = document.querySelector(".card-radius-square");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("card-radius-square-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-radius-square-data-theme") === "card-square") {
				document.body.setAttribute("card-radius-square-data-theme", "card-radius");
				localStorage.setItem("farol_theme", "card-radius");
			} else {
				document.body.setAttribute("card-radius-square-data-theme", "card-square");
				localStorage.setItem("farol_theme", "card-square");
			}
		});
	}

	// Only Card BG Style
	const getCardBgToggleId = document.getElementById('card-bg');
	if (getCardBgToggleId) {
		const switchtoggle = document.querySelector(".card-bg");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("card-bg-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-bg-data-theme") === "card-bg-normal") {
				document.body.setAttribute("card-bg-data-theme", "card-bg-gray");
				localStorage.setItem("farol_theme", "card-bg-gray");
			} else {
				document.body.setAttribute("card-bg-data-theme", "card-bg-normal");
				localStorage.setItem("farol_theme", "card-bg-normal");
			}
		});
	}

	// Only Fluid & Boxed Style
	const getBoxedToggleId = document.getElementById('boxed-style');
	if (getBoxedToggleId) {
		const switchtoggle = document.querySelector(".boxed-style");
		const savedTheme = localStorage.getItem("farol_theme");
		if (savedTheme) {
			document.body.setAttribute("boxed-style-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("boxed-style-data-theme") === "boxed-style-fluid") {
				document.body.setAttribute("boxed-style-data-theme", "boxed-style-boxed");
				localStorage.setItem("farol_theme", "boxed-style-boxed");
			} else {
				document.body.setAttribute("boxed-style-data-theme", "boxed-style-fluid");
				localStorage.setItem("farol_theme", "boxed-style-fluid");
			}
		});
	}

})();

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('farol_rtl', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('farol_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}
	
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('farol_rtl') === 'rtl') {
			setTheme('rtl');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('ltr');
		document.getElementById('slider').checked = true;
		}
	})();
} catch { }