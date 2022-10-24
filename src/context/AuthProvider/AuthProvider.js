import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)
export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const logInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, [])
    const authInfo = { user, logInWithGoogle, logOut };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;