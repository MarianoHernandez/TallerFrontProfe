import { useEffect, useState } from "react"

const Efectos = () => {

    const [contador, setContador] = useState(0);

    //comportamiento básico
    useEffect(() => {
        //se ejecuta cada vez que el componente se redibuja
    })

    //comportamiento con dependencias
    useEffect(() => {
        //se ejecuta cada vez que cambie algo de lo que está referenciado adentro del array
    }, [contador])

    //comportamiento de carga
    useEffect(() => {
        //se ejecuta una sola vez, cuando se carga el componente
    }, [])

    return (
        <div>Efectos</div>
    )
}

export default Efectos