const forms = document.getElementById("form");
const email = document.getElementById("email");



// THIS IS A FUNCTION THAT ADD ERROR DISPLAY

const setError = (input, massage) => {

    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".error-text-container");

    errorDisplay.innerText = massage;

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

// THIS IS A FUNCTION THAT ADD SUCCCESS DISPLAY

const setSuccess = input => {
    const inputControl = input.parentElement;


    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

forms.addEventListener("submit", (e) => {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email can not be empty')
    } else if (!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        setError(email, 'Please provide a valid email')
    } else {
        setSuccess(email)
    }

}