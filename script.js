const usuarioCorreto = "aluno@fiap.com.br";
const senhaCorreta = "1234";

const loginSection = document.getElementById('login-section');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if(emailInput === usuarioCorreto && passwordInput === senhaCorreta) {
        alert("Login efetuado com sucesso!");
        
        loginSection.style.display = 'none';
        document.getElementById('app-section').style.display = 'block';

        let nomeUsuario = emailInput.split('@')[0].toUpperCase();
        document.getElementById('welcome-message').textContent = `Bem-vindo(a), ${nomeUsuario}!`;
    } else {
        alert("E-mail ou senha incorretos.");
    }
});

const btnPrompt = document.getElementById('btn-prompt');

btnPrompt.addEventListener('click', function() {
    const resposta = prompt("O que você achou do projeto até agora?");
    if(resposta) {
        alert(`Obrigado pelo feedback! Você disse: "${resposta}".`);
    }
});