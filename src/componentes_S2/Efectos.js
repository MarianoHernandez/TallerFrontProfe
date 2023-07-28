import { useState, useEffect } from "react";

const Efectos = () => {

    const [texto, setTexto] = useState("");

    //Comportamiento inicial, se ejecuta con cada cambio del componente
    useEffect(() => {
        //se ejecuta con cada cambio del componente
    })

    //Comportamiento asociado a cambios en algo específico
    useEffect(() => {
        //se ejecuta solamente si cambia algo de lo que está referenciado en el array
    }, [texto])

    //Comportamiento de ejecución la primera vez que se carga el componente
    useEffect(() => {
        //se ejecuta una sola vez cuando se carga el componente por primera vez
    }, [])

    return (
        <div>Efectos</div>
    )
}

export default Efectos