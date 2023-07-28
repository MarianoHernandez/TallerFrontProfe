import { useDispatch } from "react-redux"
import { decrementar, incrementar, resetear } from "../features/contadorSlice";

const Botones = () => {

    const dispatch = useDispatch();

    const aumentarCuenta = () => {
        dispatch(incrementar());
    }

    const disminuirCuenta = () => {
        dispatch(decrementar());
    }

    const resetearCuenta = () => {
        const numero = 22;
        dispatch(resetear(numero));
    }

    return (
        <div>
            <input type="button" value="Incrementar" onClick={aumentarCuenta} />
            <input type="button" value="Decrementar" onClick={disminuirCuenta} />
            <input type="button" value="Resetear" onClick={resetearCuenta} />
        </div>
    )
}

export default Botones