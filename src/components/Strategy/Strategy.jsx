import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'

export default function Strategy() {
    return (

        <div className='bg-azul p-20 h-[250px] flex gap-6 '>
            <div className='flex flex-col text-blanco items-start justify-start'>
                <h3 className=' text-4xl font-bold'>Estrategias</h3>
                <h3 className='text-2xl font-bold'>Para cada especialidad</h3>
                <Link to='/Contact' ><button className='h-[55px] w-[190px] text-blanco rounded border mt-5 mb-10'>Cuentanos tu caso</button> </Link>
            </div>
            <div className='flex flex-col gap-4 ml-48 items-center h-[70px] w-[490px]cd '>
                <div className='flex gap-4 text-blanco  '>
                    <Link to='/Médicos'> <Enlaces text={'Médicos'} /> </Link>
                    <Link to='/Fisios'><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas'><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='flex gap-4 text-blanco'>
                    <Link to='/Psicologos'><Enlaces text={'Psicólogos'} /> </Link>
                    <Link to='/Dentistas'> <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores'><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
