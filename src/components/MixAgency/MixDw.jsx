import React from 'react'
import Button from '../Header/Button/Button'
import './MixAgencyestilo.css'
import { Link } from 'react-router-dom'


export default function MixDw({text1,text2}) {
  return (
    <div className="contenedordw flex flex-col p-16 gap-5 bg-dwfondo bg-opacity-50 bg-cover h-[562px] " >
      <h2 className=' justify-start w-[700px] font-semibold text-5xl text-blanco' >{text1} </h2>
      <p className='  text-base font-semibold pt-4 text-blanco'> {text2}</p>

      <div className='flex gap-24 pt-8 justify-start'>
       <Link to='/Contact'> <Button text={'Contacto'} /></Link>
        

      </div>
    </div>
  )
}
