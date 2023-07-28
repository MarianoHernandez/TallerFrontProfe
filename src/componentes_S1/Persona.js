const Persona = ({nombre, apellido}) => {//{nombre, apellido} = {nombre:"Juan", apellido:"Perez"}

    return (
        <p>Hola, soy {nombre} {apellido}</p>
    )
}

export default Persona

/* const Persona = (props) => {

    //Nunca vamos a crear variables
    let {nombre, apellido} = props;

    return (
        <p>Hola, soy {nombre} {apellido}</p>
    )
}

export default Persona */

/* const Persona = (props) => {
  return (
    <p>Hola, soy {props.nombre} {props.apellido}</p>
  )
}

export default Persona */