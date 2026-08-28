import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "aluno@fiap.com.br" && password === "1234") {
            alert("Login efetuado com sucesso!");
            onLoginSuccess();
        } else {
            alert("E-mail ou senha incorretos.");
        }
    };

    return (
        <div id="login-section">
            <h2>Nexa | Login</h2>
            <form id="login-form" onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="E-mail (aluno@fiap.com.br)" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha (1234)" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <button type="submit">Acessar Assistente</button>
            </form>
        </div>
    );
}

export default Login;