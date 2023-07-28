import { useEffect } from 'react';
import Tarjeta from './Tarjeta'
import { useDispatch, useSelector } from 'react-redux';
import { guardarTareas } from '../features/tareasSlice';

const Tarjetas = () => {

    const dispatch = useDispatch();
    const tareas = useSelector(state => state.tareas.tareas)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
            .then(r => r.json())
            .then(datos => {
                dispatch(guardarTareas(datos));
            })
    }, [])

    return (
        <div className="tarjetas">
            {tareas.map(t => <Tarjeta key={t.id} {...t} />)}
        </div>
    )
}

export default Tarjetas