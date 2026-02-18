const logins = document.querySelectorAll(".login-link");
const signups = document.querySelectorAll(".signup-link");

const login_form = document.querySelector(".login-form");
const signup_form = document.querySelector(".signup-form");


logins.forEach(function(login) {
    login.addEventListener('click', function(event) {
        login_form.style.display = 'flex';
        signup_form.style.display = 'none';

    });
});

signups.forEach(function(signup) {
        signup.addEventListener('click', function(event) {  
        signup_form.style.display = 'flex';
        login_form.style.display = 'none';

    });
});

