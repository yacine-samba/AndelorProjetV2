import React from 'react'
import { Navigate } from "react-router-dom";
import { profilservices } from '../services/profilservices';

/**
 * Fonction de vérification de token
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */
export const AuthGuard = ({children}) => {

    if(!profilservices.isLogged()){
        return <Navigate to="/admin"/>; 
    }
   
    return children
};

export default AuthGuard;