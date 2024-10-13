// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <Link to="/login">{t('login')}</Link>
            {' | '}
            <Link to="/register">{t('register')}</Link>
        </div>
    );
}

export default Home;
