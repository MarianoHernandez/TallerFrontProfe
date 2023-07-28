import { useRef, useState } from "react";

const Texto = () => {

    const [texto, setTexto] = useState("");
    const campo = useRef(null)

    const actualizar = e => {
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.value);
        //setTexto(e.target.value);
    }

    const tomarDato = e => {
        //console.log(e);
        setTexto(campo.current.value);
    }

    return (
        <div>
            <label htmlFor="txtTexto">Nombre:</label>
            <input type="text" id="txtTexto" ref={campo} onChange={actualizar} />
            <input type="button" value="Tomar" onClick={tomarDato} />
            <p>Cantidad de caracteres: {texto.length}</p>
        </div>
    )
}

export default Texto

/*

useId()

<label>Nombre:
                <input type="text" />
            </label>
*/