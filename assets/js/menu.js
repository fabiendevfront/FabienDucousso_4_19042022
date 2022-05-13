/*
* Responsive menu
*/

/* ======================
   DOM elements selection
   ====================== */

const navDisplay = document.querySelector(".header__container");
const menuIcon = document.querySelector(".header__icon");

/* ===================
   Display & hide menu
   =================== */

// Add class for menu responsive that display or hide the menu. Add animations open/close if menu open.
const displayNav = () => {
    navDisplay.classList.toggle("active");
    if (navDisplay.classList.length !== 1) {
        navDisplay.style.animation = "open-menu 0.5s";
    } else {
        navDisplay.style.animation = "close-menu 0.5s";
    }
};

// Display/hide nav on small-screen when clicking on menu icon with "displayNav" function
menuIcon.addEventListener('click', displayNav);