/*
Module for display and hide modal
*/

// DOM elements selection
const modalItem = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalBtn = document.querySelector(".hero__btn");
const closeBtn = document.querySelector(".modal__close")
const validBtn = document.querySelector(".form-comp__btn");
const modalBody = document.querySelector(".modal__body");
const formItem = document.querySelector(".form-comp");
const successBtn = document.querySelector(".modal__btn");
const modalSuccess = document.querySelector(".modal__success");

/* Display modal */

// Add style display block that display the modal
function displayModal() {
    modalItem.style.display = "block";
    formItem.style.display = "block";
    modalSuccess.style.display = "none";
}

// Display modal when clicking on button "Je m'inscris" with "displayModal" function
modalBtn.addEventListener('click', displayModal);

/* Hide modal */

// Add style "display none" that hide the modal
function hideModal() {
    console.log("fermeture de la modale")
    modalItem.style.display = "none";
}

// Hide modal when clicking on button "X" with "hideModal" function
closeBtn.addEventListener('click', hideModal);


// Prevents current event propagating up in the DOM
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Hide modal when clicking on modal background with "hideModal" function
modalItem.addEventListener('click', hideModal);

// Hide modal when clicking on "echap key" with "hideModal" function
document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape' && modalItem.style.display == "block") {
        console.log(modalItem.style.display);
        hideModal();
    }
});

/* Success modal */

// Deletes the form and inject the html of the success modal
function successModal() {
    formItem.style.display = "none";
    modalSuccess.style.display = "flex";
    // modalBody.removeChild(formItem);
    // modalBody.innerHTML = `<div class="modal__success"><div class="modal__success-cont"><p class="modal__thanks">Merci pour votre inscription !</p> <p class="modal__registered">Votre réservation a été reçue.</p></div><button class="modal__btn btn btn--modal">Fermer</button>`;
}

// Open succes modal when clicking on button "C'est parti" with "successModal" function
validBtn.addEventListener('click', function(event) {
    event.preventDefault();
    successModal();
});


// Hide modal when clicking on success modal button "fermer" with "hideModal" function
successBtn.addEventListener('click', hideModal);
