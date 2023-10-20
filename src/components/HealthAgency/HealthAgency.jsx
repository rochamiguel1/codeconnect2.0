
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
        <Link to='/Contact'> <Button text={'Contacto'} /></Link>
        <Link to='/AboutUs'><Button text={'Sobre Nosotros'}></Button></Link>
      </div>

    </div>
  )
}
