import React from 'react'
import Button from '../Header/Button/Button'
import './MixAgencyestilo.css'
import { Link } from 'react-router-dom'

export default function MixFi({ text1, text2 }) {
    return (
        <div className="contenedorfi flex flex-col p-16  " >
            <h2 className=' justify-start pt-12 w-[700px]  text-5xl text-blanco font-semibold' >{text1} </h2>
            <p className='  text-base pt-4 font-semibold text-blanco'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
               <Link to='/Contact'> <Button text={'Contacto'} /></Link>

            </div>
        </div>
    )
}
