//rafce
import { useState, useEffect } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    /* useEffect(() => {
        document.title = `Contador: ${contador} - Contador2: ${contador2}`;
    }, [contador]) */

    useEffect(() => {
        document.title = `Contador: ${contador} - Contador2: ${contador2}`;
    })

    const contar = evt => {
        setContador(contador + 1);
    }

    const contarSecundario = () => {
        setContador2(contador2 + 1);
    }

    const resetear = e => {
        setContador(0);
    }

    return (
        <div>
            <input type="button" value="Contar" onClick={contar} />
            <input type="button" value="Resetear" onClick={resetear} />
            <input type="button" value="Contador secundario" onClick={contarSecundario} />

            <h2>{contador}</h2>
            <h2>{contador2}</h2>
        </div>
    )
}

export default Contador

/*<input type="button" value="Contar 2" onClick={() => { 
                console.log("Anónima");
            }} />*/