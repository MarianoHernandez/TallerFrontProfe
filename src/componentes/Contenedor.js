import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contenedor = () => {
  return (
    <div>
        <h1>App de clima</h1>
        <nav >
            <NavLink to='/' >Login</NavLink> - 
            <NavLink to='/clima' className='active'>Clima</NavLink> - 
            <NavLink to='/contacto'>Contacto</NavLink>
        </nav>
        <hr></hr>

        <Outlet></Outlet>
    </div>
  )
}

export default Contenedor