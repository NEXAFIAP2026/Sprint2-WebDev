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

const slideImg = document.getElementById('slide-img');
const btnNext = document.getElementById('btn-next');

// Array com os links das imagens de gatos
const imagensSlideshow = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&h=400&fit=crop"
];

let indiceAtual = 0;

btnNext.addEventListener('click', function() {
    indiceAtual++;
    
    // Se chegar na última foto, volta para a primeira
    if(indiceAtual >= imagensSlideshow.length) {
        indiceAtual = 0;
    }
    
    slideImg.src = imagensSlideshow[indiceAtual];
});