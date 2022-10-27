import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)
export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const logInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logInWithGithub = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
        logInWithGoogle,
        logOut,
        logInWithGithub,
        createUser,
        updateUserInfo,
        logIn,
        loading,
        setLoading
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;