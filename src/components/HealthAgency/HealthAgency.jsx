
import React from 'react'
import Button from '../Header/Button/Button'
import { Link } from 'react-router-dom'




export default function HealthAgency({ text1, text2, img }) {
  return (

    <div className="flex flex-col justify-center items-center p-16 gap-5 bg-fondoHome bg-cover h-[562px]" >
      <h2 className='justify-center text-5xl text-verde' >{text1} </h2>
      <p className='text-base pt-4 text-azul'> {text2}</p>

      <div className='flex gap-24 pt-8 justify-center'>
        <Button text={'Contacto'} />
        <Link to='/AboutUs'><button className=' bg-azul text-verde h-12 w-40 justify-center items-center rounded '>Sobre Nosotros</button></Link>
      </div>

    </div>
  )
}
