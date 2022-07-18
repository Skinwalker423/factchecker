import { createContext, useState, useContext, useEffect } from "react";
import { auth, signUpWithEmailAndPassword, addUserDocFromAuth } from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');

    const signUp = (email, password) => {
        signUpWithEmailAndPassword(email, password);
    }




    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    },[userName])

    const addAuthToFirebase = async(currentUser, userName) => {
        await addUserDocFromAuth(currentUser, userName);
        console.log('added to db');
    }

    

    const value = {currentUser, setCurrentUser, signUp, userName, setUserName, addAuthToFirebase}

    return (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    )
}