import jwtDecode from "jwt-decode"
import React, { createContext, useContext, useEffect, useState } from "react"
import { getAccessToken } from "../Services/TokenService"


const AuthContext = createContext({
    currentUser: null,
    role: null,
    handleUser: () => {},
    logout: () => {}
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const handleUser = () => {
        const token = getAccessToken()
        if(token) {
            const user = jwtDecode(token)
            setCurrentUser(user)
        }else{
            setCurrentUser(null)
        }
    }

    const logout = () => {
        setCurrentUser(null)
    }

    useEffect(() => {
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
