import React, {createContext, useEffect, useState,} from 'react';
import app from "../firebase/firebase.config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
        GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    
    const githubSignIn = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        return signOut(auth);
    }
    
    // user observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        
        return () => {
            unsubscribe();
        }
    },[]);
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;