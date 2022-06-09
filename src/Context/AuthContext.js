import jwtDecode from "jwt-decode"
import React, { createContext, useContext, useEffect, useState } from "react"
import { getAccessToken } from "../Services/TokenService"
import { initializeApp } from "firebase/app";
import firebaseConfig from "../helpers/firebase";


const AuthContext = createContext({
    currentUser: null,
    role: null,
    handleUser: () => {},
    setRole: () => {},
    logout: () => {}
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [role,setRole] = useState(null)
    
    const handleUser = () => {
        const token = getAccessToken()
        if(token) {
            const user = jwtDecode(token)
            setCurrentUser(user)
            setRole('admin')
        }else{
            setCurrentUser(null)
        }
    }

    const logout = () => {
        setCurrentUser(null)
    }

    useEffect(() => {
        initializeApp(firebaseConfig)
        window.addEventListener('userLoggedIn', handleUser )
        window.addEventListener('userLoggedOut', logout)

        handleUser()
        setIsLoading(false)
    }, [])
    
    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <AuthContext.Provider value ={{
            currentUser,
            handleUser,
            logout
        }}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthProvider
