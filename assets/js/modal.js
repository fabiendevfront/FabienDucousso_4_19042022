/*
* Display and hide modal
*/

/* ======================
   DOM elements selection
   ====================== */

const modalItem = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const modalContainer = document.querySelector(".modal__container");
const modalBtn = document.querySelector(".hero__btn");
const closeBtn = document.querySelector(".modal__close");
const successBtn = document.querySelector(".modal__btn");
const modalSuccess = document.querySelector(".modal__success");
const formItem = document.querySelector(".form-comp");

/* =============
   Display modal
   ============= */

// Add style display block that display the modal
const displayModal = () => {
    modalItem.style.display = "block";
    formItem.style.display = "block";
    modalSuccess.style.display = "none";
}

// Display modal when clicking on button "Je m'inscris" with "displayModal" function
modalBtn.addEventListener('click', displayModal);

/* ==========
   Hide modal
   ========== */

// Add style "display none" that hide the modal
const hideModal = () => {
    modalItem.style.display = "none";
}

// Hide modal when clicking on button "X" with "hideModal" function
closeBtn.addEventListener('click', hideModal);


// Prevents current event propagating up in the DOM
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Hide modal when clicking on modal background with "hideModal" function
modalItem.addEventListener('click', hideModal);

// Hide modal when clicking on "echap key" with "hideModal" function
document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape') {
        hideModal();
    }
});

/* =============
   Success modal
   ============= */

// Hide the form and display the success modal on validation
const displaySuccessModal = () => {
    formItem.style.display = "none";
    modalSuccess.style.display = "flex";
};

// Hide modal when clicking on success modal button "fermer" with "hideModal" function
successBtn.addEventListener('click', hideModal);
