import { useEffect, useState } from "react"
import Persona from "./Persona";

const Personas = () => {

    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(r => r.json())
            .then(datos => {
                setPersonas(datos.results);
            })
    }, [])

    
    return (
        <div>
            <h2>Personas</h2>
            {personas.map(per => <Persona key={per.login.uuid} {...per} />)}
        </div>
    )
}

export default Personas