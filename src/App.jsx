import React, { useState } from 'react';
import './style.css'; 
import Login from './Login';
import Header from './Header';
import Gallery from './Gallery';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div className="container">
            {!isLogged ? (
                <Login onLoginSuccess={() => setIsLogged(true)} />
            ) : (
                <div id="app-section">
                    <Header />
                    <Gallery />
                </div>
            )}
        </div>
    );
}

export default App;