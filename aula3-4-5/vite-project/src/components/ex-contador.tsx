import { useState, useEffect, useRef } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setContador((prevContador) => prevContador + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);
    
    const toggleContador = () => {
        setIsRunning(!isRunning);
    };



    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={toggleContador}>{isRunning ? "Pause" : "Start"}</button>
            
        </div>
    );

};


export default Contador;