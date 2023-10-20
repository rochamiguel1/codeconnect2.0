
import React from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'

export default function NavLinks() {
  return (
    <div className=' contenedornavlinks flex gap-x-7  text-sm   text-blanco  font-medium'>
        <Link to={'/'} > <p>INICIO</p> </Link> 
        {/* <p>SERVICIOS</p> */}
        <Link to={'/Contact'} ><p>CONTACTO</p> </Link>  

    </div>
  )
}
