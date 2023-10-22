import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'
import '../Strategy/Strategy.css'

export default function Strategy() {
    return (

        <div className='contenedorstrategy  '>
            <div className='contenedortexto '>
                <h3 className='linea1 text-4xl font-bold'>Estrategias</h3>
                <h3 className='linea2 text-2xl font-bold'>Para cada especialidad</h3>
                <Link to='/Contact' target='top'><button className='h-[55px] w-[190px] text-blanco rounded border mt-5 mb-10'>Cuentanos tu caso</button> </Link>
            </div>
            <div className=' contenedorenlaces '>
                <div className='grupo1     '>
                    <Link to='/Médicos'> <Enlaces text={'Médicos'} /> </Link>
                    <Link to='/Fisios'><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas'><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='grupo2 '>
                    <Link to='/Psicologos'><Enlaces text={'Psicólogos'} /> </Link>
                    <Link to='/Dentistas'> <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores'><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
