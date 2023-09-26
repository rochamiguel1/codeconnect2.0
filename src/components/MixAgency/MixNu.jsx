import React from 'react'
import Button from '../Header/Button/Button'

export default function MixNu({text1,text2}) {
    return (
        <div className=" flex flex-col p-16 gap-5 bg-nufondo bg-opacity-50 bg-cover h-[562px] " >
            <h2 className=' justify-start pt-12 w-[700px]  text-5xl text-[#fdf766] font-semibold' >{text1} </h2>
            <p className='  text-base pt-4 font-semibold text-[#fdf766]'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
                <Button text={'Contacto'} />

            </div>
        </div>
    )

}
