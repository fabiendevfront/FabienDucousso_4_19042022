/*
* Registration form
*/

/* ======================
   DOM elements selection
   ====================== */

// Object contain DOM selection of inputs
const formInputs = {
    first: document.querySelector("#first"),
    last: document.querySelector("#last"),
    email: document.querySelector("#email"),
    birth: document.querySelector("#birthDate"),
    tournament: document.querySelector("#nbTournament"),
    allCities: document.querySelectorAll("input[name=location]"),
    terms: document.querySelector("#terms"),
    allInputs: document.querySelectorAll(".form-comp__input--text"),
    allCheckbox: document.querySelectorAll(".form-comp__input--checkbox")
};

// Object contain Dom selection of areas where error displayed of each input
const errorArea = {
    first: document.querySelector("#first + p"),
    last: document.querySelector("#last + p"),
    email: document.querySelector("#email + p"),
    birth: document.querySelector("#birthDate + p"),
    tournament: document.querySelector("#nbTournament + p"),
    cities: document.querySelector(".form-comp__error-location"),
    citiesCont: document.querySelector(".form-comp__city-items"),
    terms: document.querySelector(".form-comp__error-terms")
}

/* =====================================
   Objects for Regex and errors messages
   ===================================== */

// Object contain the errors messages
const errorMsg = {
    name: "Deux caractères ou plus, sans espace, chiffre ou caractère spécial",
    email: "Veuillez renseigner un email valide",
    birth: "Veuillez indiquer une date valide",
    tournament: "Veuillez renseigner un nombre de participation (de 0 à 99)",
    location: "Veuillez choisir une ville",
    terms: "Veuillez accepter les conditions d'utilisation"
};

/* Object contain regex for inputs test
Regex name:
* ^ = start of sequence
* [\p{L}] = unicode category, "L" = any kind of letter from any language
* {2,25} = must contain between 2 and 25 characters
* $ = end of sequence
* u = match unicode characters
* i = case insensitive
Regex email:
* () = group
* \d = numbers from 0 to 9
* [._-] = accepts special characters . _ -
* ? = zero or one occurrence
* * = zero or multiple occurrences
* \. = escaping the . symbol so that it is interpreted and searched in the chain
Regex tournament:
* [0-9] = numbers from 0 to 9
*/
const regexPatterns = {
    name: /^[\p{L}]{2,25}$/ui,
    email: /^[a-z\d]([._-]?[a-z\d])*@[a-z\d]([-.]?[a-z\d])*\.([a-z]{2,4})$/i,
    tournament: /^[0-9]{1,2}$/
};

/* =============================================
   Functions for check if inputs values is valid
   ============================================= */

// Check if first & last name is valid with regex pattern
const isValidName = (name) => {
    return regexPatterns.name.test(name);
};

// Check if email is valid with regex pattern
const isValidEmail = (email) => {
    return regexPatterns.email.test(email);
};

// Check if the date less than the current date
const compareDate = (date) => {
    let dateNow = new Date();
    let birthDate = new Date(date);

    if (dateNow < birthDate) {
        return true;
    }
};

// Check if the date is valid
const isValidDate = (date) => {
    if (date.value === "") {
        return false;
    } else if (compareDate(date.value)) {
        return false;
    } else {
        return true;
    }
};

// Check if number tournament is valid with regex pattern
const isValidNbTournament = (number) => {
    return regexPatterns.tournament.test(number);
};

// Check if city is selected
const isValidCity = (allCitiesInputs) => {
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
const testName = (input, error) => {
    if (!isValidName(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.name;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error classe and message for input email
const testEmail = (input, error) => {
    if (!isValidEmail(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.email;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error message for input date
const testDate = (input, error) => {
    if (!isValidDate(input)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.birth;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error classe and message for input tournament
const testNbTournament = (input, error) => {
    if (!isValidNbTournament(input.value)) {
        input.classList.add("form-comp__input--error");
        error.textContent = errorMsg.tournament;
    } else {
        input.classList.remove("form-comp__input--error");
        error.textContent = "";
    }
};

// Display/hide error classe and message for input city
const testCity = (allCities, container, error) => {
    if (!isValidCity(allCities)) {
        container.classList.add("form-comp__city-items--error");
        error.textContent = errorMsg.location;
    } else {
        container.classList.remove("form-comp__city-items--error");
        error.textContent = "";
    };
};

// Display/hide error message for input terms
const testTerms = (input, error) => {
    if (!input.checked) {
        error.textContent = errorMsg.terms;
    } else {
        error.textContent = "";
    }
};

/* ===============
   Form validation
   =============== */

/* Check if all form values is valid on submit:
If not valid: validation is false and display errors messages
If valid: display success modal and remove all values form
*/
const formValidation = () => {
    let validation = true;

    if (!isValidName(formInputs.first.value)) {
        validation = false;
        testName(formInputs.first, errorArea.first);
    }
    if (!isValidName(formInputs.last.value)) {
        validation = false;
        testName(formInputs.last, errorArea.last);
    }
    if (!isValidEmail(formInputs.email.value)) {
        validation = false;
        testEmail(formInputs.email, errorArea.email);
    }
    if (!isValidDate(formInputs.birth)) {
        validation = false;
        testDate(formInputs.birth, errorArea.birth);
    }
    if (!isValidNbTournament(formInputs.tournament.value)) {
        validation = false;
        testNbTournament(formInputs.tournament, errorArea.tournament);
    }
    if (!isValidCity(formInputs.allCities)) {
        validation = false;
        testCity(formInputs.allCities, errorArea.citiesCont, errorArea.cities);
    }
    if (!formInputs.terms.checked) {
        validation = false;
        testTerms(formInputs.terms, errorArea.terms);
    }
    if (validation) {
        displaySuccessModal();
        removeAllValues();
    }
};

// Remove all values in inputs text, radio, checkbox
const removeAllValues = () => {
    formInputs.allInputs.forEach((input) => {
        input.value = "";
    });

    formInputs.allCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
    });
};

/* Event on form submit:
Disable default comportement of submit
Launch form validation function
*/
formItem.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
});

/* =============
   Inputs events
   ============= */

// Assign events functions to the inputs. Events execute test functions when user writes something in inputs text.
formInputs.allInputs.forEach((input) => {
    input.addEventListener("input", (event) => {
        if (event.target.id === "first") {
            testName(formInputs.first, errorArea.first);
        } else if (event.target.id === "last") {
            testName(formInputs.last, errorArea.last);
        } else if (event.target.id === "email") {
            testEmail(formInputs.email, errorArea.email);
        } else if (event.target.id === "birth") {
            testDate(formInputs.birth, errorArea.birth);
        } else if (event.target.id === "nbTournament") {
            testNbTournament(formInputs.tournament, errorArea.tournament);
        }
    });
});

// Execute function "testDate" when user focus date picker in input "Date de naissance"
formInputs.birth.addEventListener('focusout', () => {
    testDate(formInputs.birth, errorArea.birth);
});

// Remove error classe & message if user select a city after failed submit
formInputs.allCities.forEach((input) =>
    input.addEventListener('change', () => {
        const btnCheck = input.checked;

        if (btnCheck !== null) {
            errorArea.citiesCont.classList.remove("form-comp__city-items--error");
            errorArea.cities.textContent = "";
        }
    })
);

// Execute function "testTerms" when user check/uncheck "Conditions d'utilisation" checkbox
formInputs.terms.addEventListener('change', () => {
    testTerms(formInputs.terms, errorArea.terms);
});