
import React from 'react'
import Button from '../Header/Button/Button'
import { Link } from 'react-router-dom'
import './HealthAgencyestilo.css'




export default function HealthAgency({ text1, text2, img }) {
  return (

    <div className="contenedor" >
      <h2  >{text1} </h2>
      <p > {text2}</p>

      <div className=' botones'>
        <Button text={'Contacto'} />
        <Link to='/AboutUs'><button className=' bg-azul text-verde h-12 w-40 justify-center items-center rounded '>Sobre Nosotros</button></Link>
      </div>

    </div>
  )
}
