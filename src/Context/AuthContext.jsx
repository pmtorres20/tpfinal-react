import { createContext, useState, useContext, use } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const login = (username) => 
        setUser({ name: username });
    const logout = () => 
        setUser(null);

    return (

        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    );
}
export function useAuth() {
    return useContext(AuthContext);
}