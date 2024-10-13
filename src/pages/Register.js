// src/pages/Register.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            // Create a new user with Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Registration successful');
            // Redirect to the dashboard upon successful registration
            navigate('/dashboard');
        } catch (error) {
            console.error('Error registering:', error);
            // Display error message to the user
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
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
            <button type="submit">{t('register')}</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Register;
