/*
* Display and hide modal
*/

/* ======================
   DOM elements selection
   ====================== */

const modalItem = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalSuccess = document.querySelector(".modal__success");
const formItem = document.querySelector(".form-comp");
const modalTriggers = document.querySelectorAll(".modal-trigger");

/* ======================
   Display and hide modal
   ====================== */

// Add or remove class active that display the modal
const toggleModal = () => {
    modalItem.classList.toggle("active");
    formItem.style.display = "block";
    modalSuccess.style.display = "none";
}

/* =============
   Success modal
   ============= */

// Hide the form and display the success modal on validation
const displaySuccessModal = () => {
    formItem.style.display = "none";
    modalSuccess.style.display = "flex";
};

/* ======
   Events
   ====== */

// Assign event function to the buttons. Event execute toggleModal function for display/hide modal.
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

// Prevents current event propagating up in the DOM
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Hide modal when clicking on "echap key" with "toggleModal" function
document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape') {
        toggleModal();
    }
});