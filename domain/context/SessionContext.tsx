// context/SessionContext.tsx
'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';

type SessionContextType = {
    token: string | null;
    isAuthenticated: boolean;
    logout: () => void;
};

const SessionContext = createContext<SessionContextType>({
    token: null,
    isAuthenticated: false,
    logout: () => { },
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const t = localStorage.getItem('token');
        if (t) setToken(t);
    }, []);

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        toast.error('Sesión finalizada. Por favor inicia sesión.');
        setTimeout(() => (window.location.href = '/login'), 1500);
    };

    return (
        <SessionContext.Provider
            value={{
                token,
                isAuthenticated: !!token,
                logout,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => useContext(SessionContext);