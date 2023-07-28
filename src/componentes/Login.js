import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
export const Login = () => {
    const user = useRef(null);
    const pwd = useRef(null);

    const window = useNavigate()

    const [error, setError] = useState("Error");
    const [error2, setError2] = useState(false);


    const ingresar =()=>{
        const userCampo = user.current.value
        const pwdCampo = pwd.current.value
        console.log(userCampo,pwdCampo)
        if(userCampo === 'a' && pwdCampo==='a'){
            localStorage.setItem('session', 'a')
            toast.success('Successfully toasted!')
            window("/clima")

        }else{
            localStorage.clear()
            setError2(true)
            toast.error('Error toasted!')
            //setError("Usuario y/o Contraseña incorrectos")
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <p>Login</p>
        <Link to='/contacto'>Escribenos</Link><br/>
        <Link to='/clima'>Clima</Link>

        <div>
            <label htmlFor='txtUser'>User:</label>
            <input type="text" id="txtUser" ref={user}/><br></br>
            <label htmlFor='pwdPassword'>Password:</label>
            <input type="password" id="pwdPassword" ref={pwd}/>
            <input type='button' value='ingresar' onClick={ingresar}></input>
            {error2 && <p>{error}</p>}
        </div>
        <Toaster />
    </div>
  )
}

export default Login