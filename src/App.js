import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import Login from "./componentes/Login";
import Clima from "./componentes/Clima";
import Contacto from "./componentes/Contacto";
import NoEncontrado from "./componentes/NoEncontrado";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contenedor from "./componentes/Contenedor";

let App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contenedor/>}>
            <Route path="/" element={<Login />}></Route>
            <Route path="/clima" element={<Clima />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<NoEncontrado />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

/*
- todas las etiquetas cierran
- devolver un nodo padre o Fragment
- class -> className - for -> htmlFor
*/

/*
import Contador from './componentes/Contador';
import Personas from './componentes/Personas';
import Texto from './componentes/Texto';

<h1>Bienvenida/o</h1>
      <Contador />
      <hr/>
      <Texto />
      <hr/>
      <Personas />

 return (
    <div className="App">
      <h1>Bienvenida/o</h1>
      <p>Hola {nombre}!</p>
      <Titulo />
      <Titulo />
      <Persona nombre="Juan" apellido="Perez" />
      <Persona nombre="Pedro" apellido="Gonzalez" />
      <hr />
      {nombres.map((nombre, i) => <p key={i}>{nombre}</p>)}
      <hr />
      <h2>Personas</h2>
      {personas.map(persona => <Persona key={persona.id} nombre={persona.nombre} apellido={persona.apellido} />)}
      {personas.map(persona => <Persona key={persona.id} {...persona} />)}
    </div>

  );
*/
