
const Tarjeta = ({id, title}) => {
    
    return (
        <div className="tarjeta">
            <input type="checkbox" id={`list${id}`} className="checkbox" />
            <label className="checkLabel" htmlFor={`list${id}`}> {title}</label>
        </div>
    )
}

export default Tarjeta