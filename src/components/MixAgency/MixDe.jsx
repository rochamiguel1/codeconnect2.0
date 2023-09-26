import React from 'react'
import Button from '../Header/Button/Button'

export default function MixDe({text1,text2}) {
    return (
        <div className=" flex flex-col p-16 gap-5 bg-denfondo bg-opacity-50 bg-cover bg-center h-[562px] " >
            <h2 className=' justify-start w-[700px] text-5xl text-[#fdf766] pt-16' >{text1} </h2>
            <p className='  text-base pt-4 text-[#fdf766]'> {text2}</p>

            <div className='flex gap-24 pt-8 justify-start'>
                <Button text={'Contacto'} />


            </div>
        </div>
    )
}
