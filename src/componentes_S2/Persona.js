import Edad from "./Edad"

const Persona = ({name, dob}) => {
    //let name = {title: 'Ms', first: 'Anna', last: 'Hughes'}
    //let dob = {date: '1981-06-11T08:13:35.910Z', age: 42}

    return (
    <p>{name.first} - {name.last} | <Edad {...dob}/></p>
  )
}

export default Persona