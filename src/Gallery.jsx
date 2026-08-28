import React, { useState, useEffect } from 'react';

const imagensGaleria = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"
];

function Gallery() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [filtroCSS, setFiltroCSS] = useState("none");
    const [statusFiltro, setStatusFiltro] = useState("Original");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const salvos = localStorage.getItem('nexa_fotos');
        if (salvos) {
            console.log("Fotos já salvas:", JSON.parse(salvos));
        }
    }, []);

    const aplicarEfeito = (tipo) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (tipo === "vibrante") {
                setFiltroCSS("saturate(2.5) contrast(1.1)");
                setStatusFiltro("Vibrante");
            } else if (tipo === "sombrio") {
                setFiltroCSS("brightness(0.4) grayscale(0.5) contrast(1.2)");
                setStatusFiltro("Sombrio");
            } else if (tipo === "quente") {
                setFiltroCSS("sepia(0.6) saturate(1.5) hue-rotate(-10deg)");
                setStatusFiltro("Quente");
            } else if (tipo === "esverdeado") {
                setFiltroCSS("hue-rotate(80deg) saturate(1.2)");
                setStatusFiltro("Esverdeado");
            }
        }, 1200);
    };

    const atualizarImagem = (novoIndice) => {
        setIndiceAtual(novoIndice);
        setFiltroCSS("none");
        setStatusFiltro("Original");
    };

    const nextImage = () => {
        let prox = indiceAtual + 1;
        if (prox >= imagensGaleria.length) prox = 0;
        atualizarImagem(prox);
    };

    const prevImage = () => {
        let ant = indiceAtual - 1;
        if (ant < 0) ant = imagensGaleria.length - 1;
        atualizarImagem(ant);
    };

    const salvarFoto = () => {
        const nomeArquivo = prompt("A foto ficou ótima! Dê um nome para salvá-la:", "minha_foto_editada");
        
        if (nomeArquivo !== null && nomeArquivo.trim() !== "") {
            let nomeFinal = nomeArquivo.replace(" ", "_").toLowerCase();
            const idAleatorio = Math.floor(Math.random() * 100000); 

            const novaFoto = {
                id: idAleatorio,
                nome: nomeFinal,
                url: imagensGaleria[indiceAtual],
                filtro: statusFiltro
            };

            const galeria = JSON.parse(localStorage.getItem('nexa_fotos')) || [];
            galeria.push(novaFoto);
            localStorage.setItem('nexa_fotos', JSON.stringify(galeria));

            alert(`Sucesso! O arquivo "${nomeFinal}_${idAleatorio}.jpg" foi salvo na galeria interna.`);
        } else {
            alert("Ação cancelada. A foto não foi salva.");
        }
    };

    return (
        <>
            <div className="ia-box">
                <p>Olá! Sou a Nexa. Escolha um estilo para a sua foto:</p>
                <div className="grid-estilos">
                    <button className="chip" onClick={() => aplicarEfeito('vibrante')}>🌈 Vibrante</button>
                    <button className="chip" onClick={() => aplicarEfeito('sombrio')}>🌫️ Sombrio</button>
                    <button className="chip" onClick={() => aplicarEfeito('quente')}>☀️ Quente</button>
                    <button className="chip" onClick={() => aplicarEfeito('esverdeado')}>🌿 Esverdeado</button>
                </div>
            </div>

            <div className="display-foto">
                <div className="moldura">
                    <button id="btn-prev" className="nav-btn" onClick={prevImage}>◀</button>
                    <img 
                        id="foto-principal" 
                        src={imagensGaleria[indiceAtual]} 
                        style={{ filter: filtroCSS }} 
                        alt="Paisagem" 
                    />
                    <button id="btn-next" className="nav-btn" onClick={nextImage}>▶</button>
                    {loading && <div id="loading" className="overlay" style={{ display: 'flex' }}>Nexa ajustando parâmetros...</div>}
                </div>
                
                <div className="rodape-foto">
                    <p id="status-filtro">Estilo atual: <strong>{statusFiltro}</strong></p>
                    <button id="btn-salvar" className="botao-salvar" onClick={salvarFoto}>📥 Salvar na Galeria</button>
                </div>
            </div>
        </>
    );
}

export default Gallery;