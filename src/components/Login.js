import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === 'team123') { // Mot de passe fictif
            localStorage.setItem('isTeamLoggedIn', 'true');
            navigate('/team');
        } else {
            alert('Mot de passe incorrect');
        }
    };

    return (
        <div className="login">
            <h2>Connexion Équipe</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
            />
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
}

export default Login;