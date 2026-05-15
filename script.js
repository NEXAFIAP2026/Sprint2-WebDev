const usuarioValido = "aluno@fiap.com.br";
const senhaValida = "1234";

const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const appSection = document.getElementById('app-section');
const foto = document.getElementById('foto-principal');
const loading = document.getElementById('loading');
const statusFiltro = document.getElementById('status-filtro');

// Validação de Formulário e Alerta de Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    if (email === usuarioValido && senha === senhaValida) {
        alert("Login efetuado com sucesso!");
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
    } else {
        alert("E-mail ou senha incorretos.");
    }
});

// Manipulação Dinâmica de Elementos e Eventos (DOM)
function aplicarEfeito(tipo) {
    loading.style.display = 'flex';

    setTimeout(() => {
        loading.style.display = 'none';
        
        if (tipo === "vibrante") {
            foto.style.filter = "saturate(2.5) contrast(1.1)";
            statusFiltro.innerHTML = "Estilo atual: <strong>Vibrante</strong>";
        } else if (tipo === "sombrio") {
            foto.style.filter = "brightness(0.4) grayscale(0.5) contrast(1.2)";
            statusFiltro.innerHTML = "Estilo atual: <strong>Sombrio</strong>";
        } else if (tipo === "quente") {
            foto.style.filter = "sepia(0.6) saturate(1.5) hue-rotate(-10deg)";
            statusFiltro.innerHTML = "Estilo atual: <strong>Quente</strong>";
        } else if (tipo === "esverdeado") {
            foto.style.filter = "hue-rotate(80deg) saturate(1.2)";
            statusFiltro.innerHTML = "Estilo atual: <strong>Esverdeado</strong>";
        }
    }, 1200);
}

// Alertas e Prompts e Manipulação de Strings (Botão Salvar)
document.getElementById('btn-salvar').addEventListener('click', () => {
    // Uso do prompt
    const nomeArquivo = prompt("A foto ficou ótima! Dê um nome para salvá-la:", "minha_foto_editada");
    
    // Verificação e manipulação da string
    if (nomeArquivo !== null && nomeArquivo.trim() !== "") {
        // Uso do alert concatenando a string digitada
        let nomeFinal = nomeArquivo.replace(" ", "_").toLowerCase(); // Tira espaços e deixa minúsculo
        alert(`Sucesso! O arquivo "${nomeFinal}.jpg" foi salvo na sua galeria.`);
    } else {
        alert("Ação cancelada. A foto não foi salva.");
    }
});

// --- LÓGICA DO SLIDESHOW (Manipulação de Imagens) ---
const imagensGaleria = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", // Rio/Montanha
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", // Floresta verde
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"  // Montanhas nevadas
];

let indiceAtual = 0;
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Função para atualizar a imagem e zerar o filtro
function atualizarImagem() {
    foto.src = imagensGaleria[indiceAtual];
    
    // Zera o filtro sempre que trocar de foto
    foto.style.filter = "none";
    statusFiltro.innerHTML = "Estilo atual: <strong>Original</strong>";
}

// Botão Avançar
btnNext.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= imagensGaleria.length) {
        indiceAtual = 0; // Volta pra primeira se passar da última
    }
    atualizarImagem();
});

// Botão Voltar
btnPrev.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = imagensGaleria.length - 1; // Vai pra última se voltar da primeira
    }
    atualizarImagem();
});