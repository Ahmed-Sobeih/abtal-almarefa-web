// src/pages/Dashboard.js
import React from 'react';
import { auth } from '../firebase';
import { useTranslation } from 'react-i18next';

function Dashboard({ history }) {
    const { t } = useTranslation();

    const handleLogout = () => {
        auth.signOut();
        history.push('/login');
    };

    return (
        <div>
            <h1>{t('dashboard')}</h1>
            <button onClick={handleLogout}>{t('logout')}</button>
        </div>
    );
}

export default Dashboard;
