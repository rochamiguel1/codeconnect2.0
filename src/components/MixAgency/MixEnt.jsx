import React from 'react'
import Button from '../Header/Button/Button'
import './MixAgencyestilo.css'

export default function MixEnt({text1,text2}) {
    return (
        <div className="contenedorent flex flex-col p-16 gap-5 bg-enfondo bg-opacity-50 bg-cover bg-center h-[562px] " >
            <h2 className=' justify-start w-[700px] text-5xl text-[#ffffff] pt-16' >{text1} </h2>
            <p className='  text-base pt-4 text-[#ffffff]'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
                <Button text={'Contacto'} />


            </div>
        </div>
    )
}
