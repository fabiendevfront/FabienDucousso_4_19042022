/*
Module for registration form
*/

/* DOM elements selection */
const inputFirst = document.getElementById("first");
const errorFirst = document.querySelector("#first + p");
const inputLast = document.getElementById("last");
const errorLast = document.querySelector("#last + p");
const inputEmail = document.getElementById("email");
const errorEmail = document.querySelector("#email + p");
const inputBirth = document.getElementById("birthdate");
const errorBirth = document.querySelector("#birthdate + p");
const inputTournament = document.getElementById("nbTournament");
const errorTournament = document.querySelector("#nbTournament + p");
const inputRadioLocation = document.querySelectorAll("input[name='location']");
const errorLocation = document.querySelector(".form-comp__error-location");
const checkboxTerms = document.getElementById("terms");
const errorTerms = document.querySelector("#terms + p");

/* Errors messages */
const firstMsgError = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastMsgError = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailMsgError = "Veuillez renseigner un email valide";
const birthMsgError = "Veuillez indiquer une date valide";
const tournamentMsgError = "Veuillez renseigner un nombre de participation";
const locationMsgError = "Veuillez choisir une ville";
const termsMsgError = "Veuillez accepter les conditions d'utilisation";

/* Regex patterns object for inputs test */
const regexPatterns = {
    name: /^[a-z]{2,25}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    birthdate: /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/i,
    tournament: /^[0-9]{1,2}$/,
  };

/* Functions for check inputs values */

// Check if first & last name is valid with regex pattern
function isValidName(name) {
    return regexPatterns.name.test(name);
};

/* Functions for display/hide errors classes ands message */

// Display/hide errors classes ands message for input first name
function testFirstName(input, error) {
    if (isValidName(input.value) === false) {
        input.classList.add("form-comp__input--error");
        error.textContent = firstMsgError;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide errors classes ands message for input last name
function testLastName(input, error) {
    if (isValidName(input.value) === false) {
        input.classList.add("form-comp__input--error");
        error.textContent = lastMsgError;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

/* Inputs events */

// Execute function "testFirstName" when a user writes something in input "Prénom"
inputFirst.addEventListener('input', function() {
    testFirstName(inputFirst, errorFirst);
});

// Execute function "testLastName" when a user writes something in input "Nom"
inputLast.addEventListener('input', function() {
    testLastName(inputLast, errorLast);
});