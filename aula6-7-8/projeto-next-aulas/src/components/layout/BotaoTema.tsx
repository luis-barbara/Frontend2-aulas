"use client";

import { useContext } from "react";
import { TemaContext } from "@/components/layout/ContextAPI";

const BotaoTema = () => {
    const context = useContext(TemaContext);
    
    if (!context) {
        return <div>Contexto não disponível</div>;
    }
    
    const { tema, setTema } = context;
    return (
        <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
            Mudar Tema
        </button>
    );
};

export default BotaoTema;