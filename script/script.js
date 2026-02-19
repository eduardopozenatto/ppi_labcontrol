const logins = document.querySelectorAll(".login-link");
const signups = document.querySelectorAll(".signup-link");
const recovery_password = document.querySelector(".forgot-password");

const back_to_login = document.getElementById("back-title");

const login_form = document.querySelector(".login-form");
const signup_form = document.querySelector(".signup-form");
const recovery_form = document.querySelector(".recovery-form");


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

recovery_password.addEventListener('click', function(event) {
    recovery_form.style.display = 'flex';
    signup_form.style.display = 'none';
    login_form.style.display = 'none';

});

back_to_login.addEventListener('click', function(event) {
    login_form.style.display = 'flex';
    signup_form.style.display = 'none';
    recovery_form.style.display = 'none';
});