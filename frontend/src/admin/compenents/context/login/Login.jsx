import React, { useState } from 'react';
import axios from '../../../../api/axios';
import './Login.css';
import { profilservices } from '../../../../services/profilservices';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                email: email,
                password: password,
            });
            profilservices.saveToken(response.data.token);      
            // navigate('/admin/dashboard');
            window.location = '/admin/dashboard';

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Bonjour !</h1>
            <p>Espace administration</p>
            <form className="form flex flex-col items-center w-full" onSubmit={handleSubmit}>
                <div className="input w-full">
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className="input-label">E-mail</label>
                </div>

                <div className="input w-full">
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="input-label">Mot de passe</label>
                </div>
                {error && <p>{error}</p>}
                <button type='submit' className='m-4'>Se connecter</button>
            </form>
        </div>
    )
}

export default Login