// src/pages/Dashboard.js
import React from 'react';
import { auth } from '../firebase';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Dashboard() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            <h1>{t('dashboard')}</h1>
            <button onClick={handleLogout}>{t('logout')}</button>
        </div>
    );
}

export default Dashboard;
