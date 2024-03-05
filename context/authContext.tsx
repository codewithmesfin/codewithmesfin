// import auth from "@/services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    checkUserAuthentication: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    checkUserAuthentication: () => { },
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsDarkMode] = useState(false);

    useEffect(() => {
        checkUserAuthentication()
    }, [isAuthenticated]);

    const checkUserAuthentication = async () => {
        // const authenticated = await auth.isAutenticated()
        const authenticated=false
        setIsDarkMode(authenticated);
    };

    const value = { isAuthenticated, checkUserAuthentication };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};