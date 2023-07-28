import { useRef } from "react"

const Agregar = ({guardarTarea}) => {

    const campo = useRef(null)

    const tomarDato = () => {
        let textoCampo = campo.current.value;
        guardarTarea(textoCampo);
    }

    return (
        <div className="agregar">
            <label htmlFor="txtAgregar">Agregar:</label>
            <input type="text" name="txtAgregar" id="txtAgregar" ref={campo} />
            <input type="button" value="Agregar" onClick={tomarDato} />
        </div>
    )
}

export default Agregar