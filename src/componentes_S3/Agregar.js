import { useRef } from "react"
import { useDispatch } from "react-redux"
import { agregarTarea } from "../features/tareasSlice";

const Agregar = () => {

    const dispatch = useDispatch();

    const campo = useRef(null)

    const tomarDato = () => {
        let textoCampo = campo.current.value;

        let objTarea = {
            title: textoCampo,
            completed: false,
            userId: 1
        };

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(objTarea),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                dispatch(agregarTarea(json))
            });



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