
import Agregar from "./Agregar"
import Tarjetas from "./Tarjetas"

const Contenido = () => {

    return (
        <div className="contenido">
            <Agregar />
            <Tarjetas />
        </div>
    )
}

export default Contenido

/*

 const [tareas, setTareas] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
            .then(r => r.json())
            .then(datos => {
                setTareas(datos);
            })
    }, [])

    const guardarTarea = textoC => {
        console.log(textoC);
        let objTarea = {
            title: textoC,
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
                setTareas([...tareas, json]);
            });

    }



    */