/*
Module for display and hide modal
*/

// DOM Element
const modalItem = document.querySelector(".modal");
const modalBtn = document.querySelector(".hero__btn");
const closeBtn = document.querySelector(".modal__close")

// Add style display block that display the modal
function displayModal() {
  modalItem.style.display = "block";
}

// Add style display none that hide the modal
function hideModal() {
  modalItem.style.display = "none";
}

// Display modal when clicking on button "Je m'inscris" with "displayModal" function
modalBtn.onclick = displayModal;

// Hide modal when clicking on button "X" with "hideModal" function
closeBtn.onclick = hideModal;