import { useState } from "react";


const Contador =() => {
    const [contador, setContador] = useState(0);

    const Incrementar = () => {
        setContador(contador + 1);
        console.log(contador);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={Incrementar}>Incrementar</button>
        </div>
    );
}

export default Contador;