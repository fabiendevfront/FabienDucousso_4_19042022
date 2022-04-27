/*
Module for responsive menu
*/

// DOM Element
const navDisplay = document.getElementById("myNav");

// Add class for menu responsive that display or hide the menu
function displayNav() {
    if (navDisplay.className === "header__container") {
        navDisplay.className += " header__container--responsive";
    } else {
        navDisplay.className = "header__container";
    }
}

// Display/hide nav on small-screen when clicking on menu icon with "displayNav" function
document.getElementById("menuIcon").onclick = displayNav;