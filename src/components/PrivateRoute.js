// src/components/PrivateRoute.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        // You can replace this with a loading spinner or any other UI
        return <div>Loading...</div>;
    }

    // If a user is logged in, render the child components; otherwise, redirect to login
    return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
