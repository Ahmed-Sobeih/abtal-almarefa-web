// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <a href="/login">{t('login')}</a>
        </div>
    );
}

export default Home;
