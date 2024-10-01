import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Recupera o token do localStorage
    const token = localStorage.getItem('token');

    // Verifica se o token existe e se é válido
    const isAuthenticated = token && isTokenValid(token);

    return isAuthenticated ? children : <Navigate to="/" replace />; // Redireciona para login se não estiver autenticado
};

// Função para validar o token JWT
const isTokenValid = (token) => {
    try {
        // Decodifica o payload do token (JWT)
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        // Verifica se o token está expirado
        if (decodedToken.exp * 1000 > Date.now()) {
            return true; // Token é válido
        } else {
            console.warn('Token expirado.');
            localStorage.removeItem('token'); // Remove o token expirado
            return false; // Token expirado
        }
    } catch (error) {
        console.error('Erro ao validar o token:', error);
        localStorage.removeItem('token'); // Remove o token inválido
        return false; // Token inválido ou erro ao processá-lo
    }
};

export default ProtectedRoute;
