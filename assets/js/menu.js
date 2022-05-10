/*
* Responsive menu
*/

/* ======================
   DOM elements selection
   ====================== */

const navDisplay = document.getElementById("myNav");
const menuIcon = document.querySelector(".header__icon");

/* ===================
   Display & hide menu
   =================== */

// Add class for menu responsive that display or hide the menu
const displayNav = () => {
    if (navDisplay.className === "header__container") {
        navDisplay.className += " header__container--responsive";
    } else {
        navDisplay.className = "header__container";
    }
}

// Display/hide nav on small-screen when clicking on menu icon with "displayNav" function
menuIcon.addEventListener('click', displayNav);