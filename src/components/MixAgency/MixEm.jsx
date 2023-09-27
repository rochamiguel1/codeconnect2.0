import React from 'react'
import Button from '../Header/Button/Button'

export default function MixEm({ text1, text2 }) {
    return (
        <div className=" flex flex-col p-16 gap-5 bg-emfondo bg-opacity-50 bg-cover h-[600px]" >
            <h2 className=' justify-start w-[700px]  text-5xl text-verde font-semibold' >{text1} </h2>
            <p className='  text-base pt-4 font-semibold text-verde'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
                <Button text={'Contacto'} />

            </div>
        </div>
    )
}
