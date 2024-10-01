// src/LogoutButton.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin }); // Redireciona para a página inicial após logout
    };

    return (
        <button onClick={handleLogout}>
            Sair
        </button>
    );
};

export default LogoutButton;