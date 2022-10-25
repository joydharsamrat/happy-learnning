import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)
export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const logInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logInWithGithub = provider => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
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
    const authInfo = {
        user,
        logInWithGoogle,
        logOut,
        logInWithGithub,
        createUser,
        updateUserInfo,
        logIn,
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;