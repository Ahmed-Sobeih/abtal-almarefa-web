// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user with Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to the dashboard upon successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('email')}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('password')}
            />
            <button type="submit">{t('login')}</button>
        </form>
    );
}

export default Login;
