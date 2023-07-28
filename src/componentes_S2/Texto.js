import { useRef, useState } from "react"


const Texto = () => {

    const [texto, setTexto] = useState("");
    const campo = useRef(null);

    const actualizar = e => {
        /* console.log(e);
        console.log(e.target);
        console.log(e.target.value); */
        setTexto(e.target.value);
    }

    const tomarDato = e => {
        setTexto(campo.current.value);
    }

    return (
        <div>
            <label htmlFor="txtTexto">Nombre:</label>
            <input type="text" id="txtTexto" onChange={actualizar} ref={campo} /><br />

            <input type="button" value="Tomar dato" onClick={tomarDato} />
            <p>{texto.length}</p>
        </div>
    )
}

export default Texto

/*
<label>Nombre:
    <input type="text" />
</label>
*/