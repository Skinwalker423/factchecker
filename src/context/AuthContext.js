import { createContext, useState, useContext, useEffect } from "react";
import { auth, signUpWithEmailAndPassword  } from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (email, password) => {
        signUpWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })

        return unsubscribe;
    },[])

    

    const value = {currentUser, setCurrentUser, signUp}

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}