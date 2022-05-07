/*
* Registration form
*/

/* ======================
   DOM elements selection
   ====================== */

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
const allCitiesInputs = document.querySelectorAll("input[name=location]");
const containerCities = document.querySelector(".form-comp__city-items")
const errorCities = document.querySelector(".form-comp__error-location");
const inputTerms = document.getElementById("terms");
const errorTerms = document.querySelector(".form-comp__error-terms");

/* =======
   Objects
   ======= */

// Form inputs
const formInputs = {
    first: document.getElementById("first"),
    last: document.getElementById("last"),
    email: document.getElementById("email"),
    birth: document.getElementById("birthDate"),
    tournament: document.getElementById("nbTournament")
};

// Errors messages
const errorMsg = {
    name: "Deux caractères ou plus, sans espace, chiffre ou caractère spécial",
    email: "Veuillez renseigner un email valide",
    birth: "Veuillez indiquer une date valide",
    tournament: "Veuillez renseigner un nombre de participation (de 0 à 99)",
    location: "Veuillez choisir une ville",
    terms: "Veuillez accepter les conditions d'utilisation"
};

// Regex patterns object for inputs test
const regexPatterns = {
    name: /^[a-z]{2,25}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    tournament: /^[0-9]{1,2}$/
};

/* =============================================
   Functions for check if inputs values is valid
   ============================================= */

// Check if first & last name is valid with regex pattern
function isValidName(name) {
    return regexPatterns.name.test(name);
};

// Check if email is valid with regex pattern
function isValidEmail(email) {
    return regexPatterns.email.test(email);
};

// Check if the date less than the current date
function compareDate(date) {
    let dateNow = new Date();
    let birthDate = new Date(date);

    if (dateNow < birthDate) {
        return true;
    }
};

// Check if the date is valid
function isValidDate(date) {
    if (date.value === "") {
        return false;
    } else if (compareDate(date.value)) {
        return false;
    } else {
        return true;
    }
};

// Check if number tournament is valid with regex pattern
function isValidNbTournament(number) {
    return regexPatterns.tournament.test(number);
};

// Check if city is selected
function isValidCity(allCitiesInputs) {
    let cityChecked = false;
    allCitiesInputs.forEach((city) => {
        if (city.checked) {
            cityChecked = true;
        }
    });
    if (cityChecked === true) {
        return true;
    } else {
        return false;
    }
};

/* ===================================================
   Functions for display/hide error classe and message
   =================================================== */

// Display/hide error classe and message for input first and last name
function testName(input, error) {
    if (!isValidName(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.name;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error classe and message for input email
function testEmail(input, error) {
    if (!isValidEmail(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.email;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error message for input date
function testDate(input, error) {
    if (!isValidDate(input)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.birth;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error classe and message for input tournament
function testNbTournament(input, error) {
    if (!isValidNbTournament(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.tournament;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error message for input city
function testCity(allCities, container, error) {
    if (!isValidCity(allCities)) {
        container.classList.add("form-comp__city-items--error");
        error.textContent = errorMsg.location;
    } else {
        container.classList.remove("form-comp__city-items--error");
        error.textContent = "";
    }
};

// Display/hide error message for input terms
function testTerms(input, error) {
    if (!input.checked) {
        error.textContent = errorMsg.terms;
    } else {
        error.textContent = "";
    }
};

// console.log(testTerms(inputTerms, errorTerms))

/* ===============
   Form validation
   =============== */

function formValidation() {
    let validation;

    if (!isValidName(inputFirst.value)) {
        validation = false;
        testName(inputFirst, errorFirst);
    } else if (!isValidName(inputLast.value)) {
        validation = false;
        testName(inputLast, errorLast);
    } else if (!isValidEmail(inputEmail.value)) {
        validation = false;
        testEmail(inputEmail, errorEmail);
    } else if (!isValidDate(inputBirth.value)) {
        validation = false;
        testDate(inputBirth, errorBirth);
    } else if (!isValidNbTournament(inputTournament.value)) {
        validation = false;
        testNbTournament(inputTournament, errorTournament);
    } else if (!isValidCity(allCitiesInputs)) {
        validation = false;
        testCity(allCitiesInputs, containerCities, errorCities);
    } else if (!inputTerms.checked) {
        validation = false;
        testTerms(inputTerms, errorTerms);
    } else {
        validation = true;
    };

    if (validation) {
        displaySuccessModal();
        removeAllValues();
    };
};

formItem.addEventListener('submit', function(event) {
    event.preventDefault();
    formValidation();
});

function removeAllValues() {
    const allInputs = document.querySelectorAll(".form-comp__input--text");
    const allCheckbox = document.querySelectorAll(".form-comp__input--checkbox");

    allInputs.forEach((input) => {
        input.value = "";
    });

    allCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
    });
};

/* =============
   Inputs events
   ============= */

// Execute function "testFirstName" when a user writes something in input "Prénom"
inputFirst.addEventListener('input', function() {
    testName(inputFirst, errorFirst);
});

// Execute function "testLastName" when a user writes something in input "Nom"
inputLast.addEventListener('input', function() {
    testName(inputLast, errorLast);
});

// Execute function "testEmail" when a user writes something in input "E-mail"
inputEmail.addEventListener('input', function(){
    testEmail(inputEmail, errorEmail);
});

// Execute function "testDate" when a user writes something in input "Date de naissance"
inputBirth.addEventListener('input', function() {
    testDate(inputBirth, errorBirth);
});

// Execute function "testDate" when a user focus date picker in input "Date de naissance"
inputBirth.addEventListener('focusout', function() {
    testDate(inputBirth, errorBirth);
});

// Execute function "testNbTournament" when a user writes something in input "À combien de tournois.."
inputTournament.addEventListener('input', function() {
    testNbTournament(inputTournament, errorTournament);
});

allCitiesInputs.forEach((input) =>
    input.addEventListener('change', () => {
        const btnCheck = input.checked;

        if (btnCheck !== null) {
            containerCities.classList.remove("form-comp__city-items--error");
            errorCities.textContent = "";
        }
    })
);

inputTerms.addEventListener('change', () => {
    testTerms(inputTerms, errorTerms);
});