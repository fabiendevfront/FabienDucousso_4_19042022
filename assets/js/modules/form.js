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
const inputBirth = document.getElementById("birthDate");
const errorBirth = document.querySelector("#birthDate + p");
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
    tournament: /^[0-9]{1,2}$/
  };

/* Functions for check if inputs values is valid */

// Check if first & last name is valid with regex pattern
function isValidName(name) {
    return regexPatterns.name.test(name);
};

// Check if email is valid with regex pattern
function isValidEmail(email) {
    return regexPatterns.email.test(email);
};

// Check if the date is valid and less than the current date
function compareDate(date) {
    let dateNow = new Date();
    let day = dateNow.getDate();
    let month = (dateNow.getMonth()+1);
    let year = dateNow.getFullYear();
    dateNow = day+"-"+month+"-"+year;
    console.log(dateNow);

    let birthDate = new Date(date);
    let birthDateDay = birthDate.getDate();
    let birthDateMonth = (birthDate.getMonth()+1);
    let birthDateYear = birthDate.getFullYear();
    birthDate = birthDateDay+"-"+birthDateMonth+"-"+birthDateYear;
    console.log(birthDate);

    if (dateNow < birthDate) {
        return false;
    }
}

function isValidDate(date) {
    if (date.value === "") {
        console.log("champ vide");
        return false;
    } else if (compareDate(date.value)) {
        console.log("Date doit être inférieure");
        return false;
    } else {
        console.log("date ok");
        return true;
    }
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

function testEmail(input, error) {
    if (isValidEmail(input.value) === false) {
        input.classList.add("form-comp__input--error");
        error.textContent = emailMsgError;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

function testDate(input, error) {
    if (isValidDate(input) === false) {
        input.classList.add("form-comp__input--error");
        error.textContent = birthMsgError;
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

// Execute function "testEmail" when a user writes something in input "E-mail"
inputEmail.addEventListener('input', function(){
    testEmail(inputEmail, errorEmail);
});

// Execute function "testEmail" when a user writes something in input "E-mail"
inputBirth.addEventListener("input", function() {
    testDate(inputBirth, errorBirth);
});

// Execute function "testEmail" when a user writes something in input "E-mail"
inputBirth.addEventListener("focusout", function() {
    testDate(inputBirth, errorBirth);
});