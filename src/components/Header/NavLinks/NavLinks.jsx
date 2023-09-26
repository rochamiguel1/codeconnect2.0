
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
    <div className='flex gap-x-7 text-lg text-blanco font-medium'>
        <Link to={'/'} > <p>INICIO</p> </Link> 
        <p>SERVICIOS</p>
        <Link to={'/Contact'} ><p>CONTACTO</p> </Link>  

    </div>
  )
}
