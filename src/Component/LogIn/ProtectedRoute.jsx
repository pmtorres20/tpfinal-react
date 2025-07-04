import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
    // Esta función verifica si el usuario está autenticado
    // Si esta autenticado, renderiza los hijos (children)
    // Si no esta autenticado, redirige al usuario a home("/")

    const { user } = useAuth();

    return 
        user ? children : <Navigate to="/" replace />; //children es el componente que se quiere renderizar si el usuario está autenticado
}

export default ProtectedRoute;
