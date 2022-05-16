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

// Add or remove class active that display the modal and go to top of page.
const toggleModal = () => {
    modalItem.classList.toggle("active");
    document.documentElement.scrollTop = 0;

    if (modalItem.classList.length !== 1) {
        modalContainer.style.animation = "open-modal 0.8s";
        formItem.style.display = "block";
        modalSuccess.style.display = "none";
    } else {
        modalContainer.style.animation = "close-modal 0.8s";
        modalSuccess.style.display = "flex";
    }
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
        if (modalItem.classList.length !== 1) {
            toggleModal();
        }
    }
});