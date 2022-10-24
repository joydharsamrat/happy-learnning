import React from 'react';
import { createContext } from 'react';

export const userContext = createContext();

const AuthProvider = ({ children }) => {

    const user = { name: 'kuddus' }

    const authInfo = { user };
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthProvider;