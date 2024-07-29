import { createContext, useContext, useState } from "react";

const AuthContext = createContext()



const AuthProvider = ({ Children }) => {
    const [auth, setAuth] = useState({
        User: null,
        token: ""
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {Children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };
