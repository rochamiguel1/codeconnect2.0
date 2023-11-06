import React from 'react'
import Button from '../Header/Button/Button'
import './MixAgencyestilo.css'
import { Link } from 'react-router-dom'

export default function MixEm({ text1, text2 }) {
    return (
        <div className="contenedorem " >
            <h2 className=' justify-start w-[700px]  text-5xl text-blanco font-semibold' >{text1} </h2>
            <p className='  text-base pt-4 font-semibold text-blanco'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
               <Link to='/Contact'> <Button text={'Contacto'} /></Link>

            </div>
        </div>
    )
}
