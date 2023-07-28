import Edad from "./Edad"

const Persona = ({name, dob}) => {
    //name = {title: "Mr", first: "Ivan", last: "Gulko"}
  return (
    <p>{name.first} {name.last} - <Edad {...dob} /></p>
  )
}

export default Persona