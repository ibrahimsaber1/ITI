// ------------------------day 4--------q6&7 -----------------------:)

function validateFullName() {
    const fullNameInput = document.getElementById('fullname');
    const fullNameValue = fullNameInput.value.trim();
    const errorElement = document.getElementById('fullname-error');

    if (fullNameValue === '' || fullNameValue.length <= 3) {
        errorElement.textContent = 'Invalid name';
        fullNameInput.style.backgroundColor = 'gray';
        fullNameInput.focus();
        fullNameInput.select();
        return false;
    } else {
        errorElement.textContent = '';
        fullNameInput.style.backgroundColor = 'white';
        return true;
    }
}

function validatePasswords() {
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeat-password');
    const passwordErrorElement = document.getElementById('password-error');

    if (passwordInput.value !== repeatPasswordInput.value) {
        passwordErrorElement.textContent = 'Passwords do not match';
        passwordInput.style.backgroundColor = 'gray';
        repeatPasswordInput.style.backgroundColor = 'gray';
        return false;
    } else {
        passwordErrorElement.textContent = '';
        passwordInput.style.backgroundColor = 'white';
        repeatPasswordInput.style.backgroundColor = 'white';
        return true;
    }
}

function validateForm(event) {
    const isFullNameValid = validateFullName();
    const arePasswordsValid = validatePasswords();

    if (!isFullNameValid || !arePasswordsValid) {
        event.preventDefault();
        alert('Please correct the validation errors first.');
    }
}


//-----------------------day 4--------q9 -----------------------:)

let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function performOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    previousInput = '';
    operation = null;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '';
}