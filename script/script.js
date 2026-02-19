// constantes com os botões de login, cadastro superiores e "esqueceu a senha?"

const logins = document.querySelectorAll(".login-link");
const signups = document.querySelectorAll(".signup-link");
const recovery_password = document.querySelector(".forgot-password");

// constante com o botão de voltar para o login (recovery password page)
const back_to_login = document.getElementById("back-title");

// constantes com os elementos de cada formulário
const login_form = document.querySelector(".login-form");
const signup_form = document.querySelector(".signup-form");
const recovery_form = document.querySelector(".recovery-form");

// Para cada botão com a classe respectiva dos botões, 
// executa a função que adiciona um evento 'click' para 
// mostrar/esconder os formulários
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