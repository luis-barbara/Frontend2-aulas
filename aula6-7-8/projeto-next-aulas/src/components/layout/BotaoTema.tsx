import { useContext } from 'react';
import { TemaContext } from '@/components/layout/ContextAPI';

const BotaoTema = () => {
    const { tema, setTema } = useContext(TemaContext)!;
    return (
        <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
            Mudar Tema
        </button>
    );
};

export default BotaoTema;