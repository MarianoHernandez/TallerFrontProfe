import { useSelector } from "react-redux"

const Cuenta = () => {

    const contador = useSelector(state => state.contador.cuenta)

    return (
        <div>
            <h2>{contador}</h2>
        </div>
    )
}

export default Cuenta