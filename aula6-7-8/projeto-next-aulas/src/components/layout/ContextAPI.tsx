"use client"

import { createContext, useState, ReactNode } from "react";

interface TemaContextType {
    tema: string;
    setTema: (tema: string) => void;
}

export const TemaContext = createContext<TemaContextType | undefined>(undefined);

export const TemaProvider = ({ children }: { children: ReactNode }) => {
    const [tema, setTema] = useState("light");
    return (
        <TemaContext.Provider value={{ tema, setTema }}>
            {children}
        </TemaContext.Provider>
    );
};