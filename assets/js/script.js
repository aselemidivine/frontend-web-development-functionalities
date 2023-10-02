// TOGGLE BUTTON 
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

// TOGGLE WHEN THE HAMBURGER ICON/BUTTON IS CLICKED
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});



// DECLARING A VARIABLE
const button = document.getElementById('myButton');

// CHANGE BUTTON TEXT WHEN CLICKED
button.addEventListener('click', () => {
    button.textContent = 'Thank you for clicking this button!';
});

// CHANGE BUTTON COLORS
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'green';
});

// RESTORE BUTTON DEFAULT COLOR
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'black'; 
});




// GET REFERENCE TO THR BUTTON AND THE PARAGRAPH ELEMENT
const showTextButton = document.getElementById('showTextButton');
const displayText = document.getElementById('displayText');

// ADD A CLICK EVENT LISTENER TO THE BUTTON
showTextButton.addEventListener('click', () => {

    // CHANGE THE TEXT CONTENT OF THE PARAGRAPH WHEN THE BUTTON IS CLICKED
    displayText.textContent = 'Hello, This is the displayed text for Sterling academy!';
})
















// GRABBING THE ELEMENTS FROM THE DOM(HTML)
const username = document.getElementById("username");
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// SUBMIT THE FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

console.log(form);
// FUNCTION TO SET AN ERROR MESSAGE
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  // SET THE MESSAGE ON THE PAGE THROUGH CSS
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// Handle validation using REGEX
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};



